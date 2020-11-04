<?php
/**
 * This controller handles the notification of new users as well as their
 * validation , creation, update and delete.
 */

namespace App\Http\Controllers\Superadmin;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use DB;
use Illuminate\Support\Facades\Lang;
use Log;
use App\NewNotification;
use App\ConfigureParameter;

/**
 * Class NotificationController
 * @package App\Http\Controllers
 */
class NotificationController extends Controller {
    
    
    /**
     * Display a listing from of notification.
     * 
     * @return \Illuminate\View\View
     */
    public function index() {
        $getNotification = DB::table('new_notifications')->get()->toArray();
        echo json_encode($getNotification);
       
    }
    
    /**
     * Show the form for creating a new notification.
     *
     * @return \Illuminate\View\View
     */
    public function createNotification() {
        $res = DB::table('scheduler_list')->get()->toArray();
        return view('superadmin.notification.createNotification', compact('res'));
    }

   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function saveNotification(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'notification_type' => 'required',
            'notification_condition' => 'required',
            'database_type' => 'required',
            'email_subject' => 'required',
            'email_body' => 'required'
        ]);
        $data = array(
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'notification_type' => $request->input('notification_type'),
            'scheduler_type' => $request->input('scheduler_type'),
            'database_type' => $request->input('database_type'),
            'notification_condition' => $request->input('notification_condition'),
            'email_subject' => $request->input('email_subject'),
            'email_body' => $request->input('email_body'),
            'status' => 0
        );
        try{
            if($data) {
                Log::info(__METHOD__ . 'Data Insert ');
                $modal = new NewNotification();
                $modal->fill($data);
                $modal->save();
                $res = $modal->id;

                $getQry = NewNotification::select('notification_condition')->where('id', $res)->get()->toArray();
            $notificationCondition = $getQry[0]['notification_condition'];
            $explode = explode('$', $notificationCondition);
            array_shift($explode);
            $arrVal = [];
            //print_r($arrVal);
            foreach($explode as $expVal)
            {
                $val = explode('"', $expVal);
                $arrVal[] = "$".$val[0];

            }

            $count = count($arrVal);
            //$minCount = $count - 1;
            //::where('notification_id', '=', $info['id'])->delete();
            $qry = ConfigureParameter::select('parameter')->where('notification_id', $res)->get()->toArray();
            //print_r($qry);

            if(empty($qry))
            {
                //echo "insert"; die;
            //ConfigureParameter::where('notification_id', $info['id'])->delete();
                for ($i = 0; $i < $count; $i++)
                {
                    $paramData = array(
                        'notification_id' => $res,
                        'parameter' => $arrVal[$i]
                    );
                    
                    DB::table('configure_parameters')->insert($paramData);
                }
            }
                return Redirect::to('/notification')->with('success', Lang::get('message.createNotifi'));
            } else {
                Log::error(__METHOD__ . 'Not Insert');
                return false;
            }
        }catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * View particular notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getNotificationById(Request $request) {
        $notificationId = $request->all();
        $res = DB::table('new_notifications')->where('id', $notificationId['id'])->get();
        return response()->json(['res' => $res]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     */
    public function editNotification($id) {
        if($id)
        {
            Log::info(__METHOD__.'getting notification id as '.$id);
            $data = DB::table('new_notifications')->select('id', 'name', 'description', 'notification_type', 'notification_condition', 'email_subject', 'email_body')->where('id', '=', $id)->get()->toArray();
            $getQry = DB::table('configure_parameters')->select('id')->where('notification_id', $id)->get()->toArray();
            //print_r($getQry); 
            return view('superadmin.notification.editNotification', compact('data', 'getQry'));
        }else{
            Log::error(__METHOD__.'notification id is not found');
            return false;
        }
    }

    /**
     * Update the specified notification in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function updateNotification(Request $request) {
        //create validation
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'notification_type' => 'required',
            'notification_condition' => 'required',
            'email_subject' => 'required',
            'email_body' => 'required'
        ]);
        //get all input fields
        $info = $request->all();
        //print_r($info); die;
        $data = array(
            'name' => $info['name'],
            'description' => $info['description'],
            'notification_type' => $info['notification_type'],
            'notification_condition' => $info['notification_condition'],
            'email_subject' => $info['email_subject'],
            'email_body' => $info['email_body']
        );
        try{
            //insert value in table regarding notification
            $modal = NewNotification::find($info['id']);
            $modal->fill($data);
            $modal->save();

            $getQry = NewNotification::select('notification_condition')->where('id', $info['id'])->get()->toArray();
            $notificationCondition = $getQry[0]['notification_condition'];
            $explode = explode('$', $notificationCondition);
            array_shift($explode);
            $arrVal = [];
            foreach($explode as $expVal)
            {
                $val = explode('"', $expVal);
                $arrVal[] = "$".$val[0];

            }

            //print_r($arrVal); 
            //die;
            $count = count($arrVal);
            //$minCount = $count - 1;
            //::where('notification_id', '=', $info['id'])->delete();
            $qry = ConfigureParameter::select('parameter')->where('notification_id', $info['id'])->get()->toArray();
            //print_r($qry);

            if(empty($qry))
            {
                //echo "insert"; die;
            //ConfigureParameter::where('notification_id', $info['id'])->delete();
                for ($i = 0; $i < $count; $i++)
                {
                    $paramData = array(
                        'notification_id' => $info['id'],
                        'parameter' => $arrVal[$i]
                    );
                    DB::table('configure_parameters')->insert($paramData);
                }
            }else{
                $parameters = [];
                foreach($qry as $paramVal)
                {
                    $parameters[] = $paramVal['parameter'];
                }
                foreach($parameters as $value)
                {
                    if(!in_array($value, $arrVal))
                    {
                        ConfigureParameter::where('parameter', $value)->delete();
                    }
                }
                for ($i = 0; $i < $count; $i++)
                {
                    if(!in_array($arrVal[$i], $parameters))
                    {
                        $paramData = array(
                            'notification_id' => $info['id'],
                            'parameter' => $arrVal[$i]
                        );
                        // $configureModal = new ConfigureParameter();
                        // $configureModal->fill($paramData);
                        // $configureModal->save();
                        DB::table('configure_parameters')->insert($paramData);
                    }
                    
                }
                
            }
            // Redirect to the user management page
            return Redirect::to('/notification')->with('success', Lang::get('message.updateNotifi'));
        }catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Update the specified notification in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function updateNotificationStatus(Request $request) {
        $info = $request->all();
        $id = $info['id'];
        if($id) {
            Log::info(__METHOD__ . 'getting notification id as ' . $id);
            $qry = DB::table('new_notifications')->select('status', 'enable_number')->where('id', $info['id'])->get();
            $status = $qry[0]->status;
            $enableNumber = $qry[0]->enable_number;
            if ($status == 0 && $enableNumber == "") {
                $increment = 0;
                $data = DB::table('new_notifications')->where('id', $info['id'])->update(['status' => $info['status'], 'enable_number' => DB::raw($increment + 1)]);
                $res = [
                    'success' => true,
                    'url' => url('/configureNotification/' . $id)
                        ];
                return response()->json($res);
            } else {
                $data = DB::table('new_notifications')->where('id', $info['id'])->update(['status' => $info['status'], 'enable_number' => DB::raw(1 + 1)]);
                $res = [
                    'success' => false,
                    'status' => $status,
                    'url' => url('/notification')
                        ];
                return response()->json($res);
            }
        } else {
            Log::error(__METHOD__ . 'notification id is not found');
            return false;
        }
    }

    /**
     * Remove the specified notification from storage.
     *
     * @param $id
     */
    public function deleteNotification($id) {
        try {
            $notificationTable = DB::table('new_notifications')->where('id', $id)->delete();
            $configureTable = DB::table('configurations')->where('notification_id', $id)->delete();
            $parameterTable = DB::table('configure_parameters')->where('notification_id', $id)->delete();
            // Redirect to the user management page
            return Redirect::to('notification')->with('success', Lang::get('message.deleteNotifi'));
        }catch (Exception $e) {
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

}
