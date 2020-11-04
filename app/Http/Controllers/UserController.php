<?php

/**
 *  This controller handles the registration of new users as well as their
 *  validation, creation, update and delete from admin.
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Redirect;
use App\Helper\Helper;
use App\Models\User;
use DB;
use Hash;
use Session;
use Auth;
use Illuminate\Support\Facades\Lang;
use Log;

/**
 * Class UserController
 * @package App\Http\Controllers
 */
class UserController extends Controller {

    /**
     * Display a listing of the users for admin.
     * 
     * @return view
     */
    public function index() {
        try{
            $data = DB::table('new_accounts')->select('portal_url')->where('status', '=', '1')->get()->toArray();
            $urls = array();
            foreach ($data as $portal_url) {
                $portal_url = json_decode(json_encode($portal_url), true);
                $urls[] = url('') . '/' . $portal_url['portal_url'];
            }
            $currentUrl = url()->current();
            $lastWord = substr($currentUrl, strrpos($currentUrl, '/') + 1);
            $getImage = DB::table('new_accounts')->select('image', 'id', 'name')->where('portal_url', '=', $lastWord)->get()->toArray();
            if (in_array($currentUrl, $urls)) {
                Log::info(__METHOD__ . 'get url ');
                return view('users.index', compact('getImage'));
            } elseif (Auth::guard('new_account')->check()) {
                return view('users.home');
            } else {
                //view 404 page if url is invalid
                return abort(404);
            }
        }catch (Exception $e) {
            DB::rollback();
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function userLogin(Request $request) {
        $messages = [
            'username.email' => Lang::get('message.username'),
            'username.exists' => Lang::get('message.uNameExist')
        ];
        $this->validate($request, [
            'username' => 'required|email|exists:users,email',
            'password' => 'required'
        ], $messages);        
        $username = $request->username;
        $password = $request->password;
        $newAccountUserId = $request->id;
        $sql = DB::table('users')->select('new_account_user_id', 'email', 'password')->whereRaw("find_in_set($newAccountUserId, `new_account_user_id`) > 0")->where('email', $username)->get()->toArray();
        foreach($sql as $accId)
        {
            $explode = explode(',', $accId->new_account_user_id);
            if(in_array($newAccountUserId, $explode))
            {
                foreach($explode as $val)
                {
                    if (filter_var($username, FILTER_VALIDATE_EMAIL)) {
                        Log::info(__METHOD__ . 'get auth username or password');
                        Auth::attempt(['email' => $username, 'password' => $password]);
                    }
                }
            }        
        }
        try {
            //was any of those correct ?
            if (Auth::check()) {
                Log::info(__METHOD__ . 'Auth check');
                Session::put('username', $request->username);
                Session::put('id', $request->id);
                return redirect('view/status');
                //return view('users.home');
                //send them where they are going 
              //  return redirect()->intended('home');
            } else {        
                return redirect()->back()->withErrors([
                            'credentials' => Lang::get('message.userLogin')
                ]);
            }
        } catch(Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @return view
     */
    public function landingpage() {
        return redirect('https://kissingersolutions.com/web-stor/');
    }
    public function deleteInactiveUsers(){
   DB::table('scheduler_list')->where('id', '=', 5)->delete();
   echo "Run Scuuseefully";
    }
    public function viewUser() {
        return view('users.home', compact('countResource'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function userCreate(Request $request) {
        $roles = Role::get();
        $newAccountUserId = $request->session()->get('id');
        //select all acoount users
        $getAccountUsers = DB::table('new_accounts')->where('id', '=', $newAccountUserId)->get();
        $getAccountUsers = json_decode(json_encode($getAccountUsers), true);
        //get value from two table with join
        return view('users.newUsers', compact('roles', 'getAccountUsers'));
    }
	
	public function accountList(Request $request) {
        
        //select all acoount users
        $getAccountUsers = DB::table('new_accounts')->select('id','name')->get(); 
        $getAccountUsers = json_encode($getAccountUsers);
        //get value from two table with join
        return $getAccountUsers;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function insertUser(Request $request) {
		
        //$newAccountUserId = $request->session()->get('id');
        //$userId = Auth::id();
		$userId = 1;
		//echo json_encode($request->input('new_account_user_id'));
		//exit;
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/|confirmed',
            'role_id' => 'required'
                ], ['password.regex' => Lang::get('message.pwdCheck')
        ]);
        $data = array(
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role_id' => $request->input('role_id'),
            'created_by' => $userId,
            'new_account_user_id' => $request->input('new_account_user_id'),
            'status' => 1
        );
		//echo json_encode($data);
		//exit;
        try{
            $modal = new User();
            $modal->fill($data);
            $modal->save();
			$res_suc = array('status' => 200,'message' =>'User is created successfully!');
			return json_encode($res_suc);
           // return Redirect::to('/view/users')->with('success', Lang::get('message.success'));
        } catch(Exception $e){
			$res_fail = array('status' => 401,'message' =>'Error creating user account!');
			return json_encode($res_fail);
           // return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function viewUsersData(Request $request) {
        $newAccountUserId = $request->session()->get('id');
        $email = $request->session()->get('username');
        $username = session()->get('username');
        $getRoleId = DB::table('users')->select('role_id')->where('email', '=', $username)->get();
        //remove stdClass object
        $getRoleId = json_decode(json_encode($getRoleId), true);
        $roleId = [];
        try {
            if (!empty($getRoleId)) {
                Log::info(__METHOD__ . 'getting role id as ');
                $roleId = $getRoleId[0]['role_id'];
            }
            $id = session()->get('id');
            $data = DB::table('new_accounts')->select('name', 'username')->where('id', '=', $id)->get()->toArray();
            $data = json_decode(json_encode($data), true);
            $getUsername = $data[0]['username'];
            //join with tables
            $sql = "SELECT i.`email`, i.`id`, i.`role_id`, i.`new_account_user_id`, c.`name`, GROUP_CONCAT(DISTINCT c.`name` SEPARATOR '\n') as accountName FROM users i INNER JOIN new_accounts c ON FIND_IN_SET(c.`id`, i.`new_account_user_id`) GROUP BY i.`email`, i.`id`, i.`role_id`, i.`new_account_user_id`";
            $result = DB::select($sql);
            $result = json_decode(json_encode($result), true);
            foreach($result as $val)
            {
                $explode = explode(',', $val['new_account_user_id']);
                if(in_array($newAccountUserId, $explode))
                {
                    $res = User::select('email', 'role_id', 'id')->whereRaw("find_in_set($newAccountUserId, `new_account_user_id`) > 0")->get()->toArray();
                }
            }
            return view('users.viewUsers', compact('res', 'getUsername', 'username', 'roleId'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getUserDataById(Request $request) {
        $viewDataById = $request->all();
        $res = DB::table('users')->where('id', $viewDataById['id'])->get();
        return response()->json(['res' => $res]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     */
    public function editUserById($id) {
        if ($id) {
            Log::info(__METHOD__ . 'getting auth id as' . $id);
            $roles = Role::get();
            //join with users and roles
            $user = User::select('users.name', 'users.email', 'users.id', 'users.role_id', 'roles.guard_name')->where('users.id', '=', $id)
                            ->join('roles', 'users.role_id', '=', 'roles.id')
                            ->get()->toArray();
            //select all acoount users
            $getAccountUsers = DB::table('new_accounts')->get();
            return view('users.editUser', compact('user', 'roles', 'getAccountUsers'));
        } else {
            Log::error(__METHOD__ . 'User id is not found');
            return false;
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateUserData(Request $request) {
        $userId = Auth::id();
        $newAccountUserId = $request->session()->get('id');
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $request->get('id'),
            'role_id' => 'required'
        ]);
        $info = $request->all();
        $data = array(
            'name' => $info['name'],
            'email' => $info['email'],
            'role_id' => $info['role_id'],
            'created_by' => $userId
        );
        try{
            $modal = User::find($info['id']);
            $modal->fill($data);
            $modal->save();
            return Redirect::to('/view/users')->with('success', Lang::get('message.userUpdatesuccess'));
        } catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     */
    public function deleteUserDetails($id) {
        try {
            $userTable = DB::table('users')->where('id', $id)->delete();
            // Redirect to the user management page
            return Redirect::to('/view/users')->with('success', Lang::get('message.userDelete'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    public function logoutAccount() {
        Session::flush();
        return Redirect::to('/');
    }

// this function is just for testing
//datepicker testing data only 
    public function datepicker(Request $requestDate){
        $inputDate = $requestDate->all();
        $startDate = substr($inputDate['process_datepicker'], 0,10);
        $endDate = substr($inputDate['process_datepicker'], 14,25);
        echo "Startdate - ".$startDate."<br> Enddate - ".$endDate;
        dd($inputDate);
        //print_r($inputDate); exit; 
    }

}
