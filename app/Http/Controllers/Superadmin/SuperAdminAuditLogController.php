<?php
/**
 * This controller handles the audit log error of users for select 
 * particular account in super-admin.
 */

namespace App\Http\Controllers\Superadmin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use DB;
use App\Helper\Helper;
use Log;

/**
 * Class SuperAdminAuditLogController
 * @package App\Http\Controllers
 */
class SuperAdminAuditLogController extends Controller {
    
    /**
     * Show the form for audit log.
     *
     * @return \Illuminate\View\View
     */
    public function viewers() {
        try{
            $data = DB::table('new_accounts')->where('status', '=', 1)->get();
            if($data){
                Log::info(__METHOD__.'account staus is active ');
                $data = json_decode(json_encode($data), true);
                return view('superadmin.viewer', compact('data'));
            } else{
                Log::error(__METHOD__.'account is not active');
                return false;
            }
        }catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }
    
    /**
     * Listing audit log error select for particular user.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function getKaiauditlog(Request $request) {
  //   echo json_encode($request);die;
        $response = Helper::auditLog($request);
        try{
            if($response){
                Log::info(__METHOD__.'get audit log ');
                return response()->json($response);
            }else {
                Log::error(__METHOD__.'audit log is not found');
                return false;
            }
        }catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }
}
