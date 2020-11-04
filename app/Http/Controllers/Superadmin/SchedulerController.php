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
use App\NewScheduler;


/**
 * Class NotificationController
 * @package App\Http\Controllers
 */
class SchedulerController extends Controller {
    
    
    /**
     * Display a listing from of notification.
     * 
     * @return \Illuminate\View\View
     */
    public function index() {
        $getScheduler = DB::table('scheduler_list')->get()->toArray();
        return view('superadmin.scheduler.viewScheduler', compact('getScheduler'));
    }

    public function addScheduler() {
        $res = DB::table('new_notifications')->get()->toArray();
        return view('superadmin.notification.addscheduler', compact('res'));
    }
    
    /**
     * Show the form for creating a new notification.
     *
     * @return \Illuminate\View\View
     */
   

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function saveScheduler(Request $request) {
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required'
        ]);
        $data = array(
            'scheduler_name' => $request->input('name'),
            'scheduler_desc' => $request->input('description'),
        );
        try{
            if($data) {
                Log::info(__METHOD__ . 'Data Insert ');
                $modal = new NewScheduler();
                $modal->fill($data);
                $modal->save();
                
                return Redirect::to('/schedulerlist')->with('success', Lang::get('message.createSchedulr'));
            } else {
                Log::error(__METHOD__ . 'Not Insert');
                return false;
            }
        }catch(Exception $e){
            return redirect()->back()->with('error', Lang::get('message.accException'));
        }
    }


}
