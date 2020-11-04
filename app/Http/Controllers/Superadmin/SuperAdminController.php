<?php

/**
 * This controller handles the registration of new users as well as their
 * validation , creation, update and delete from super admin.
 */

namespace App\Http\Controllers\Superadmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Spatie\Permission\Models\Role;
use DB;
use Hash;
use Validator;
use App\NewAccount;
use Illuminate\Support\Facades\Lang;
use Log;

/**
 * Class SuperAdminController
 * @package App\Http\Controllers
 */
class SuperAdminController extends Controller {

    /**
     * Display a home page.
     * 
     * @retun view
     */
    public function viewHome() {
        $data = DB::table('kai_connection_statuses')->where('archived', '=',0)->get()->toArray();
        return view('superadmin.home.index', compact('data'));
    }

    /**
     * Display a listing of the resource.
     * 
     * @param  \Illuminate\Http\Request  $request
     */
    public function index(Request $request) {
       // $getRole = Role::get()->toArray();
        //get auth id
        
        $sql = "SELECT i.`email`, i.`id`, i.`role_id`, i.`new_account_user_id`, c.`name`, GROUP_CONCAT(DISTINCT c.`name` SEPARATOR '\n') as accountName FROM users i LEFT JOIN new_accounts c ON FIND_IN_SET(c.`id`, i.`new_account_user_id`) GROUP BY i.`email`, i.`id`, i.`role_id`, i.`new_account_user_id`";
        $userList = DB::select($sql);
        $userList = json_encode($userList);
        echo  $userList; 
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return $roles, $data
     */
    public function create() {
        try {
            $roles = Role::get();
            $roleId = Auth::user()->role_id;
            $email = Auth::user()->email;
            //select all acoount users
            $getAccountUsers = NewAccount::all();
            $data = User::select('users.email', 'new_accounts.name')->where('users.email', '=', $email)
                    ->join('new_accounts', 'users.new_account_user_id', '=', 'new_accounts.id')
                    ->get();
            return view('superadmin.create', compact('roles', 'getAccountUsers', 'roleId', 'data'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request) {
        $userId = Auth::id();
        $roleId = Auth::user()->role_id;
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/|confirmed',
            'role_id' => 'required',
            'password_confirmation' => 'required'
                ], ['password.regex' => Lang::get('message.pwdCheck'),
            'role_id.required' => Lang::get('message.role')
        ]);
        //multiple account id save in database
        $newAccountsUsersId = $request->input('new_account_user_id');        
        $data = array(
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'role_id' => $request->input('role_id'),
            'created_by' => $userId, 
            'status' => 1
        );
        if ($request->input('role_id') != 7) {
            Log::info(__METHOD__ . 'insert for admin or user ');
            $data['new_account_user_id'] = implode(',', $newAccountsUsersId);
        }
        try {
            $modal = new User();
            $modal->fill($data);
            $modal->save();
            return Redirect::to('/users')->with('success', Lang::get('message.success'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Show the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getDataById(Request $request) {
        $viewDataById = $request->all();
        $res = DB::table('users')->where('id', $viewDataById['id'])->get();
        return response()->json(['res' => $res]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return $user, $roles, $data
     */
    public function edit($id) {
      //  $roles = Role::get();
        //join with users and roles
        $user = User::select('users.name', 'users.email', 'users.id', 'users.password','users.new_account_user_id','users.role_id', 'roles.guard_name')->where('users.id', '=', $id)
                ->join('roles', 'users.role_id', '=', 'roles.id')
                ->get();
      //  $roleId = Auth::user()->role_id;
    //    $getAccountUsers = DB::table('new_accounts')->get();
        //join with two table users and new_accounts
        // $data = User::select('users.new_account_user_id', 'new_accounts.username', 'roles.id')->where('users.id', '=', $id)
        //         ->leftjoin('new_accounts', 'users.new_account_user_id', '=', 'new_accounts.id')
        //         ->join('roles', 'users.role_id', '=', 'roles.id')
        //         ->get();
        // $explode = explode(',', $data[0]['new_account_user_id']);
        return json_encode($user);
       // return view('superadmin.edit', compact('user', 'roles', 'data', 'getAccountUsers', 'roleId', 'explode'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function update(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $request->get('id'),
            'role_id' => 'required'
        ]);
        $info = $request->all();
        //multiple account id save in database
        try {
            if ($request->input('role_id') != 7) {
                Log::info(__METHOD__ . 'update for admin and user');
                $new_account_user_id = $info['new_account_user_id'];
                DB::table('users')->where('id', $info['id'])->update(['name' => $info['name'], 'email' => $info['email'], 'role_id' => $info['role_id'], 'new_account_user_id' => implode(',', $new_account_user_id)]);
            } else {
                Log::info(__METHOD__ . 'update for superadmin');
                DB::table('users')->where('id', $info['id'])->update(['name' => $info['name'], 'email' => $info['email'], 'role_id' => $info['role_id'], 'new_account_user_id' => ""]);
            }
            return Redirect::to('/users')->with('success', Lang::get('message.userUpdatesuccess'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     */
    public function destroy($id) {
        User::destroy($id);
        // Redirect to the user management page
        return Redirect::to('/users')->with('success', Lang::get('message.userDelete'));
    }

    /**
     * Get password of resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function changePassword(Request $request) {
        $viewDataById = $request->all();
        $res = DB::table('users')->where('id', $viewDataById['id'])->get();
        return response()->json(['res' => $res]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  $newPwd
     * @return \Illuminate\Http\Response
     */
    public function updatePasswordForUser(Request $request) {
        $info = $request->all();
        $oldPassword = $info['oldPwd'];
        $newPwd = $info['newPwd'];
        $confirmPwd = $info['confirmPwd'];
        //validation
        $validator = Validator::make($request->all(), [
                    'newPwd' => 'required|min:8|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/',
                    'confirmPwd' => 'required|same:newPwd'
                        ], [
                    'newPwd.required' => Lang::get('message.newPwd'),
                    'confirmPwd.required' => Lang::get('message.confirmPwd'),
                    'confirmPwd.same' => Lang::get('message.matchPwd'),
                    'newPwd.regex' => Lang::get('message.pwdCheck')
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()->all()]);
        } else {
            Log::info(__METHOD__ . 'validation is not failed');
            //update password of user for superAdmin
            $updatePwd = DB::table('users')->where('id', $info['id'])->update(['password' => Hash::make($newPwd)]);
            $res = ['success' => true, 'message' => Lang::get('message.updatePwd'), 'url' => url('/users'),];
            return response()->json($res);
        }
    }

    public function getstatus() {
       
        $data = DB::table('kai_connection_statuses')->get()->toArray();
        return view('superadmin.getstatus', compact('data'));
           
       
    }

    public static function getaccountbyID($id) {
       
        $data = DB::table('new_accounts')->where('id', $id)->value('name');
        return $data;
           
       
    }
}
