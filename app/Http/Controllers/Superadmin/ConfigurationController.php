<?php
/**
 * This controller handles the configuration of notification as well as their
 * validation and creation.
 */

namespace App\Http\Controllers\Superadmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Lang;
use Illuminate\Support\Facades\Auth;
use App\Notifications\KissingerNotifications;
use App\Helper\Helper;
use App\User;
use App\Configuration;
use App\ConfigureParameter;
use Notification;
use DB;
use Log;

/**
 * Class ConfigurationController
 * @package App\Http\Controllers
 */
class ConfigurationController extends Controller {
    
    /**
     * Show the form for creating a configuration.
     *
     * @param  $id
     */
    public function configureNotification($id) {
        //get value from table
        $getNotification = DB::table('new_notifications')->select('id', 'notification_type')->where('id', '=', $id)->get()->toArray();
        $notificationId = $getNotification[0]->id;
        $notificationType = $getNotification[0]->notification_type;
        $allAccount = DB::table('new_accounts')->where('status', '=', 1)->select('*')->get();
        $userId = Auth::id();
        try{
            if($notificationId){
                Log::info(__METHOD__.'getting notification id as '.$notificationId);
                $getConfig = DB::table('configurations')->select('configurations.account_id', 'configurations.recipeintemail', 'new_accounts.name')->where('configurations.auth_id', '=', $userId)
                                ->where('configurations.notification_id', '=', $notificationId)
                                ->leftJoin('new_accounts', 'configurations.account_id', '=', 'new_accounts.id')
                                ->groupBy('configurations.account_id')->get()->toArray();
                $getReciep = DB::table('configurations')->select('configurations.account_id', 'configurations.recipeintemail', 'new_accounts.name')->where('configurations.auth_id', '=', $userId)
                    ->where('configurations.notification_id', '=', $notificationId)
                    ->leftJoin('new_accounts', 'configurations.account_id', '=', 'new_accounts.id')
                    ->groupBy('configurations.recipeintemail')->get()->toArray();
                return view('superadmin.notification.configureNotification', compact('allAccount', 'notificationId', 'notificationType', 'getConfig', 'getReciep'));
            } else {
                Log::error(__METHOD__.'notification id is not found');
                return false;
            }
        }catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Show the form for creating a configuration.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function saveConfiguration(Request $request) {
        
        //create a validation
        $this->validate($request, [
            'account_id' => 'required',
            'recipeintemail' => 'required'
                ], [
            'account_id.required' => 'Notification Enabled For is required',
            'recipeintemail.required' => 'Recipient Email is required'
        ]);
        $userId = Auth::id();
        $info = $request->all();
        $accountId = $info['account_id'];
        $notificationId = $info['notification_id'];
    	$recipientEmail = $info['recipeintemail'];
        $notificationType = $info['notification_type'];
        Configuration::whereNotIn('account_id', $accountId)->where('notification_id', '=', $notificationId)->delete();
        try {
            //$isDublicate = false;
            foreach ($accountId as $accId) {
                Configuration::whereNotIn('recipeintemail', $recipientEmail)->where('account_id', '=', $accId)->where('notification_id', '=', $notificationId)->delete();
                foreach ($recipientEmail as $recipEmail) {
                    $configPrmKey = DB::table('configurations')->where('account_id', '=', $accId)->where('recipeintemail', '=', $recipEmail)->get()->toArray();
                    $data = array(
                        'auth_id' => $userId,
                        'notification_id' => $notificationId,
                        'notification_type' => $notificationType,
                        'account_id' => $accId,
                        'recipeintemail' => $recipEmail
                    );
                    if (empty($configPrmKey)) {
                        $modal = new Configuration();
                        $modal->fill($data);
                        $modal->save();
                    }
                }
            }
            return Redirect::to('/notification')->with('success', Lang::get('message.configurationSuccess'));
        } catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Send notification before configuration.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function test_notification(Request $request)
    { 
        $res = Helper::testConfigNotification($request);
        return response()->json($res);      
    }

    /**
     * Get notification id
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function notificationId(Request $request)
    {
        try {            
            $notificationId = $request->all();
            $getParameter = DB::table('configure_parameters')->select('id', 'account_id', 'parameter', 'description', 'parameter_type', 'parameter_value', 'notification_id')->where('notification_id', $notificationId)->get()->toArray();
            $res = [
                'success' => true,
                'notifi_id' => $notificationId,
                'parameter' => $getParameter
            ];
            return response()->json($res);
        } catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }

    /**
     * Save Notification Parameter
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function saveParameter(Request $request)
    {
        
        try {
            $info = $request->all();
            // var_dump($info);
            // exit;
            $getQry = ConfigureParameter::select('notification_id')->where('notification_id', $info['notification_id'])->get()->toArray();
            
           if(empty($getQry)){
                $parameterType = $info['parameter_type'];       
                $description = $info['description'];       
                foreach ($parameterType as $key => $pType) {
                    $data = array(
                        'notification_id' => $info['notification_id'],
                        'parameter_type' => $pType,
                        'description' => $info['description'][$key],
                        'parameter_value' => $info['parameter_value'][$key]
                    );
                    $modal = new ConfigureParameter();
                    $modal->fill($data);
                    $modal->save();
                    
                }
            }else {
                $parameterType = $info['parameter_type'];        
                foreach ($parameterType as $key => $pType) {
                    $data = array(
                        'notification_id' => $info['notification_id'],
                        'parameter_type' => $pType,
                        'description' => $info['description'][$key],
                        'parameter_value' => $info['parameter_value'][$key]
                    );
                    $modal = ConfigureParameter::find($info['id'][$key]);
                    $modal->fill($data);
                    $modal->save();
                }
            }
            $res = [
                'success' => true
            ];
            return response()->json($res);
        } catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }       
    }
}
