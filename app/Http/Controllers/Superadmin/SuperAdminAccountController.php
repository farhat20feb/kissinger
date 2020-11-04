<?php

/**
 * This controller handles the account of new users as well as their 
 * validation , creation, update and delete from superadmin.
 */

namespace App\Http\Controllers\Superadmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use DB;
use Hash;
use Validator;
use App\NewAccount;
use Illuminate\Support\Facades\Lang;
use Log;

/**
 * Class SuperAdminAccountController
 * @package App\Http\Controllers
 */
class SuperAdminAccountController extends Controller {
    public function __construct()
    {
        ini_set('max_execution_time', 300);
    }
    /**
     * Show the form for creating a new account.
     *
     */
    public function createNewAccount() {
        $id = Auth::id();
        $roleName = $roleName = $this->getRoleName($id);
        if ($roleName) {
            return view('superadmin.newAccount', compact('roleName'));
        } else {
            Log::error(__METHOD__ . 'auth id is not found');
            return false;
        }
    }

    /**
     * Show the form for creating a new account.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function newAccountForUser(Request $request) {
      //  echo json_encode($request);
       // exit;
        //validation at new account page
        $this->validate($request, [
            'name' => 'required',
            'server' => 'required',
            'port' => 'required|numeric',
            'database_name' => 'required',
            'username' => 'required',
            'password' => 'required',
            'timezone' => 'required',
            'portal_url' => 'required',
            'image' => 'mimes:jpeg,png'
        ]);

        $data = array(
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'password' => $request->password,
            'server' => $request->input('server'),
            'port' => $request->input('port'),
            'database_name' => $request->input('database_name'),
            'timezone' => $request->input('timezone'),
            'disable_monitoring' => $request->input('disable_monitoring'),
            'portal_url' => $request->input('portal_url'),
            'status' => 1
        );

       //   echo json_encode($data);
      //  exit;
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('upload_image');
            $image->move($destinationPath, $image_name);
            $data['image'] = $image_name;
        }
        try {
            $modal = new NewAccount();
            $modal->fill($data);
            $modal->save();
            $res = $modal->id;
            if ($res) {
                Log::info(__METHOD__ . 'getting account id as ' . $res);
                //create connection ffrom database
                return $this->insertInkaiConnectionTable($request, $res);
            } else {
                Log::error(__METHOD__ . 'account id is not found');
                return false;
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * this function is used for insert the newly created account id and its various 
     * values into laravel database 
     * 
     * @param object $request
     * @param object $res
     * @return string
     */
    private function insertInkaiConnectionTable($request, $res) {
        $server = $request->input('server');
        $port = $request->input('port');
        $database_name = $request->input('database_name');
        $username = $request->input('username');
        $password = $request->input('password');
        $conn = @mysqli_connect($server, $username, $password, $database_name, $port);
        DB::beginTransaction();
        try {
            if (!$conn) {
                Log::error(__METHOD__ . 'connection not success');
                $result = array('status' =>200,'message' =>'Account is Created.Could not connect to DB' );
                return json_encode($result);
               // return redirect()->to('/accounts')->send();
            } else {
                $kaiData = mysqli_query($conn, "SELECT * FROM kaiconnection");
                Log::info(__METHOD__ . 'connection success');
                while ($row = mysqli_fetch_array($kaiData)) {
                    $name = $row['name'];
                    $type = $row['type'];
                    $connectionstring = $row['connectionstring'];
                    $username = $row['username'];
                    $password = $row['password'];
                    $phpoverlay = $row['phpoverlay'];
                    $heading = $row['heading'];
                    $dashboard_name = $row['dashboard_name'];
                    $active = $row['active'];
                    $status = $row['status'];
                    $created = $row['created'];
                    $modified = $row['modified'];
                    //insert kaicoonection data in laravel table
                    DB::insert('INSERT INTO kaiconnection_with_accounts (`name`, `account_id`, `type`, `connectionstring`, `username`, `password`, `phpoverlay`, `heading`, `dashboard_name`, `active`, `status`, `created`, `modified`) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [$name, $res, $type, $connectionstring, $username, $password, $phpoverlay, $heading, $dashboard_name, $active, $status, $created, $modified]);
                    DB::commit();
                }
                $result = array('status' =>200,'message' =>'Account is Created' );
                return json_encode($result);
               // return Redirect::to('/accounts')->with('success', Lang::get('message.accountCreated'));
            }
        } catch (Exception $e) {
            DB::rollback();
            
            $result = array('status' =>401,'msg' =>'Error!!' );
            return json_encode($result);
            //return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Show the form regarding account user.
     * 
     * @return void
     */
    public function viewAccountUsers() {
        $request = request();
        $token = $request->bearerToken();
        $id = Auth::id();
        $roleName = $this->getRoleName($id);
        if ($token) {
            $data = DB::table('new_accounts')->where('delete_status', '=', 0)->get()->toArray();
            echo json_encode($data);
           
        } else {
         
            $res = array("status"=>'400', "msg"=>'failed');

            echo json_encode($res);
        }
    }

    /**
     * Get Role name of user
     * 
     * @param $id
     * @return void
     */
    private function getRoleName($id) {
        if ($id) {
            Log::info(__METHOD__ . 'getting auth id as' . $id);
            $getData = User::SELECT('users.name', 'users.email', 'users.id', 'users.role_id', 'roles.guard_name')->WHERE('users.id', '=', $id)
                            ->join('roles', 'users.role_id', '=', 'roles.id')
                            ->get()->toArray();
            $roleName = $getData[0]['guard_name'];
            return $roleName;
        } else {
            Log::error(__METHOD__ . 'auth id is not found');
            return false;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function viewAccountUsersById(Request $request) {
        $viewAccountUsersById = $request->all();
        $res = DB::table('new_accounts')->where('id', '=', $viewAccountUsersById['id'])->get();
        if ($res) {
            return response()->json(['res' => $res]);
        } else {
            Log::error(__METHOD__ . 'auth id is not found');
            return false;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     */
    public function editAccountUser($id) {
        try {
            if ($id) {
                Log::info(__METHOD__ . 'getting account id as ' . $id);
                $users = DB::table('new_accounts')->where('id', '=', $id)->get()->toArray();
                return json_encode($users);
              //  return view('superadmin.editAccountUsers', compact('users'));
            } else {
                Log::error(__METHOD__ . 'account id is not found');
                return false;
            }
        } catch (Exception $e) {
            $res = array('status' =>401,'msg' => 'Error.!!' );
            return json_encode($res);
           // return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateAccountUser(Request $request) {
        $info = $request->all();
        // valtidation on input fields
        $this->validate($request, [
            'name' => 'required',
            'server' => 'required',
            'port' => 'required',
            'database_name' => 'required',
            'username' => 'required',
            'password' => 'required',
            'timezone' => 'required',
            'portal_url' => 'required',
            'image' => 'mimes:jpeg,png|max:500'
        ]);
        //for image upload
        $data = array(
            'name' => $request->input('name'),
            'username' => $request->input('username'),
            'password' => $request->password,
            'server' => $request->input('server'),
            'port' => $request->input('port'),
            'database_name' => $request->input('database_name'),
            'timezone' => $request->input('timezone'),
            'disable_monitoring' => $request->input('disable_monitoring'),
            'portal_url' => $request->input('portal_url'),
            'status' => 1
        );
        try {
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $image_name = time() . '.' . $image->getClientOriginalExtension();
                $destinationPath = public_path('upload_image');
                $image->move($destinationPath, $image_name);
                $data['image'] = $image_name;
                // update data
            }
            $modal = NewAccount::find($info['id']);
            $modal->fill($data);
            $modal->save();
            $res = array('status' =>200,'msg' =>'Account Updated Successfully');
            return json_encode($res);
           // return Redirect::to('/accounts')->with('success', Lang::get('message.updateAccount'));
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Show the form of account user on modal.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getAccountPassword(Request $request) {
        $id = $request->all();
        $password = Auth::user()->password;
        $getdata = DB::table('new_accounts')->SELECT('name', 'id')->WHERE('id', '=', $id)->get();
        try {
            if ($getdata) {
                Log::info(__METHOD__ . 'get id or name from account table');
                $res = [
                    'success' => true,
                    'message' => Lang::get('message.getPwd'),
                    'password' => $password,
                    'result' => $getdata
                ];
                return response()->json($res);
            } else {
                Log::error(__METHOD__ . 'account id is not found');
                return false;
            }
        } catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function deleteAccountbyID(Request $request) {
        $userData = $request->all();
        $id = $userData['id'];
        $userTable = DB::table('new_accounts')->where('id', $id)->update(['delete_status' => 1]);
        $result = array('status' =>200,'msg' => 'Account Deleted Successfully!');
        return json_encode($result);
    }
    public function deleteAccountUser(Request $request) {
        $userData = $request->all();
        $id = $userData['id'];
        $oldPassword = $userData['password'];
        $newPassword = $request->input('confirmPassword');
        $getUser = DB::table('users')->SELECT('new_account_user_id')->whereRaw("find_in_set($id,new_account_user_id)")->get()->toArray();
       if(count($getUser) > 0){
        $accountIdCount = count(explode(',', $getUser[0]->new_account_user_id));
       }
       else{
        $accountIdCount = 0;
       }
       // echo json_encode($accountIdCount);exit;
        DB::beginTransaction();
        try {
            if ($accountIdCount == 1) {                
                Log::info(__METHOD__ . 'Check Passowrd for delete account and related data');
                if (Hash::check($newPassword, $oldPassword)) {
                    $userTable = DB::table('users')->where('new_account_user_id', $id)->delete();
                    $accountTable = DB::table('new_accounts')->where('id', $id)->delete();
                    $kaiConnection = DB::table('kaiconnection_with_accounts')->where('account_id', $id)->delete();
                    DB::commit();
                    $res = [
                        'success' => 200,
                        'url' => url('/accounts'),
                        'message' => Lang::get('message.delAcc')
                    ];
                } else {
                    $res = [
                        'success' => 401,
                        'message' => Lang::get('message.notDelAcc')
                    ];
                }
            } else {
                if (Hash::check($newPassword, $oldPassword)) {
                    $userTable = DB::table('users')->where('new_account_user_id', $id)->update(['new_account_user_id' => ""]);
                    $accountTable = DB::table('new_accounts')->where('id', $id)->delete();
                    $kaiConnection = DB::table('kaiconnection_with_accounts')->where('account_id', $id)->delete();
                    DB::commit();
                    $res = [
                        'success' => 200,
                        'url' => url('/accounts'),
                        'message' => Lang::get('message.delAcc')
                    ];
                } else {
                    $res = [
                        'success' => 401,
                        'message' => Lang::get('message.notDelAccccc')
                    ];  
                }
            }
            DB::table('users')->where('new_account_user_id', '')->whereIn('role_id', ['5', '6'])->delete();
            return response()->json($res);            
        } catch (Exception $e) {
            DB::rollback();
            return response()->json($res); 
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function updateMultipleStatus() {

        $_POST = json_decode(array_keys($_POST)[0], true);

        
        $data = DB::table('new_accounts')->where('id', $_POST['id'])->update(['status' => $_POST['status']]);
        $msg = array('status' =>200,'msg' =>'Status Updated Successfully');
        return $msg;
    }

    /**
     * this function is used to test the added account connection while creating an account.
     * 
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function testConnection(Request $request) {
        $server = $request->input('server');
        $port = $request->input('port');
        $database_name = $request->input('database_name');
        $username = $request->input('username');
        $password = $request->input('password');
        $validator = Validator::make($request->all(), ['server' => 'required', 'port' => 'required', 'database_name' => 'required', 'username' => 'required']);
        //create validation
        if ($validator->fails()) {
            Log::error(__METHOD__ . 'validation failed');
            return response()->json(['error' => $validator->errors()->all()]);
        } else {
            $conn = mysqli_connect($server, $username, $password, $database_name, $port);
            if (!$conn) {
                $data = [
                    'success' => false,
                    'message' => Lang::get('message.notConnect')
                ];
                return response()->json($data);
            } else {
                $data = [
                    'success' => true,
                    'message' => Lang::get('message.connect')
                ];
                return response()->json($data);
            }
        }
    }

    /**
     * this function is used to test connection of added account details on edit page.
     * 
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function editTestConnection(Request $request) {
        $server = $request->input('server');
        $port = $request->input('port');
        $database_name = $request->input('database_name');
        $username = $request->input('username');
        $password = $request->input('password');
        $validator = Validator::make($request->all(), ['server' => 'required', 'port' => 'required', 'database_name' => 'required', 'username' => 'required']);
        //validation check
        if ($validator->fails()) {
            Log::error(__METHOD__ . 'Validation failed');
            return response()->json(['error' => $validator->errors()->all()]);
        } else {
            $conn = mysqli_connect($server, $username, $password, $database_name, $port);
            if (!$conn) {
                Log::error(__METHOD__ . 'Connection failed');
                $data = [
                    'success' => false,
                    'message' => Lang::get('message.notConnect')
                ];
                return response()->json($data);
            } else {
                Log::info(__METHOD__ . 'connection success');
                $data = [
                    'success' => true,
                    'message' => Lang::get('message.connect')
                ];
                return response()->json($data);
            }
        }
    }

    /**
     * this function is used to copy all the webstore kaiconnection data into laravel kaiconnection data
     * after click on refresh button.
     * 
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function refreshConnection(Request $request) {
        $info = $request->all();
        $accountId = $info['id'];
        //Delete data of kaiConnection table from laravel database
        $deleteData = DB::table('kaiconnection_with_accounts')->where('account_id', '=', $accountId)->delete();
        //get value for create connection
        $getData = DB::table('new_accounts')->select('username', 'password', 'database_name', 'server', 'port')->where('id', '=', $accountId)->get();
        $getData = json_decode(json_encode($getData), true);
        $username = $getData[0]['username'];
        $password = $getData[0]['password'];
        $database_name = $getData[0]['database_name'];
        $server = $getData[0]['server'];
        $port = $getData[0]['port'];
        //create connection from dufferent database
        $conn = mysqli_connect($server, $username, $password, $database_name, $port);
        if (!$conn) {
            $insertData = [
                'success' => false,
                'message' => Lang::get('message.faild')
            ];
            return response()->json($insertData);
        } else {
            Log::info(__METHOD__ . 'Connection success');
            $kaiData = mysqli_query($conn, "SELECT * FROM kaiconnection");
            while ($row = mysqli_fetch_array($kaiData)) {
                $name = $row['name'];
                $type = $row['type'];
                $connectionstring = $row['connectionstring'];
                $username = $row['username'];
                $password = $row['password'];
                $phpoverlay = $row['phpoverlay'];
                $heading = $row['heading'];
                $dashboard_name = $row['dashboard_name'];
                $active = $row['active'];
                $status = $row['status'];
                $created = $row['created'];
                $modified = $row['modified'];
                //insert kaicoonection data in laravel table
                DB::insert('insert into kaiconnection_with_accounts (`name`, `account_id`, `type`, `connectionstring`, `username`, `password`, `phpoverlay`, `heading`, `dashboard_name`, `active`, `status`, `created`, `modified`) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [$name, $accountId, $type, $connectionstring, $username, $password, $phpoverlay, $heading, $dashboard_name, $active, $status, $created, $modified]);
            }
            //Count number of row of kaiconnection_account table
            $numOfRow = DB::table('kaiconnection_with_accounts')->where('account_id', '=', $accountId)->count();
            $insertData = [
                'success' => true,
                'message' => Lang::get('message.conSuccess'),
                'numOfRow' => $numOfRow
            ];
            return response()->json($insertData);
        }
    }
}

?>