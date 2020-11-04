<?php

namespace App\Helper;

use App\Notifications\KissingerNotifications;
use App\Configuration;
use Notification;
use App\User;
use DB;
use log;
use Illuminate\Support\Facades\Lang;

class Helper {

    /**
     * Get information from curl for status check
     * 
     * @param type $url
     * @param type $headers
     */
    public static function curlStatusCheck($url, $headers = []) {
        try {
            $header = ['Accept: application/json', 'Content-Type: application/json'];
            $header = array_merge($header, $headers);
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
            curl_setopt($ch, CURLOPT_URL, $url);
            $added_output = curl_exec($ch);
            return $added_output;
        } catch (Exception $e) {
            return json_encode($e);
        }
    }

    /**
     * Get audit log details from difference database
     * 
     * @param type $request
     * @return responce
     */
    public static function auditLog($request) {
        $id = $request->id;
        //get account_id from session
        $accountsId = $request->all();
        $limit = $accountsId['iDisplayLength'];
        $search_terms = $accountsId['sSearch'];
        $data = DB::table('new_accounts')->select('username', 'port', 'database_name', 'server', 'password')->where('id', '=', $id)->get();
        $data = json_decode(json_encode($data), true);
        $server = $data[0]['server'];
        $username = $data[0]['username'];
        $password = $data[0]['password'];
        $database_name = $data[0]['database_name'];
        $port = $data[0]['port'];
        $con = mysqli_connect($server, $username, $password, $database_name, $port);
        $query = "SELECT * FROM kaiauditlogdetail";
        if ($search_terms) {
            $query = "SELECT * FROM kaiauditlogdetail WHERE logtype LIKE '%" . $search_terms . "%' OR logcategory LIKE '%" . $search_terms . "%' OR logmessage LIKE '%" . $search_terms . "%' OR created LIKE '%" . $search_terms . "%'";
        }
        $total_pages = mysqli_query($con, $query);
        $numRows = mysqli_num_rows($total_pages);
        $qry = "SELECT * FROM kaiauditlogdetail  order by id desc LIMIT " . $limit . " offset " . $accountsId['iDisplayStart'] . " ";
        if ($search_terms) {
            $qry = "SELECT * FROM kaiauditlogdetail WHERE logtype LIKE '%" . $search_terms . "%' OR logcategory LIKE '%" . $search_terms . "%' OR logmessage LIKE '%" . $search_terms . "%' OR created LIKE '%" . $search_terms . "%' LIMIT " . $limit . " offset " . $accountsId['iDisplayStart'] . " ";
        }
        $pages = mysqli_query($con, $qry);
        $num = mysqli_num_rows($pages);
        $getData = [];
        // loop
        while ($row = mysqli_fetch_array($pages)) {
            // store data in an array
            $getData[] = $row;
        }
        $response = [
            'iTotalRecords' => $numRows,
            'iTotalDisplayRecords' => $num,
            'sEcho' => $accountsId['sEcho'],
            'aaData' => $getData
        ];
        return $response;
    }

    /**
     * Get information of account user
     * 
     * @return int $roleId
     * @return string $getCompanyName, $getAccountName, $userName
     */
    public static function navData() {
        $username = session()->get('username');
        $getRoleId = DB::table('users')->select('role_id', 'name', 'id')->where('email', '=', $username)->get();
        $getRoleId = json_decode(json_encode($getRoleId), true);
        $userName = $getRoleId[0]['name'];
        $roleId = [];
        if (!empty($getRoleId)) {
            $roleId = $getRoleId[0]['role_id'];
            $userName = $getRoleId[0]['name'];
        }
        $id = session()->get('id');
        $data = DB::table('new_accounts')->select('name', 'username')->where('id', '=', $id)->get()->toArray();
        $data = json_decode(json_encode($data), true);
        if (!empty($data)) {
            $getCompanyName = $data[0]['name'];
            $getAccountName = $data[0]['username'];
        }
        return ['getCompanyName' => $getCompanyName, 'getAccountName' => $getAccountName, 'roleId' => $roleId, 'userName' => $userName, 'getRoleId' => $getRoleId];
    }

    /**
     * Get details of notification from database
     * 
     * @param type $request
     */
    public static function testConfigNotification($request) {
        $info = $request->all();
        $notificationId = $info['id'];
        $recipentEmail = $info['recipeint_email_list'];
        $getDetails = DB::table('new_notifications')->select('name', 'email_body', 'description', 'email_subject')->where('id', $notificationId)->get()->toArray();
        $name = $getDetails[0]->name;
        $email_body = $getDetails[0]->email_body;
        $body = strip_tags($email_body);
        $email_subject = $getDetails[0]->email_subject;
        $getSql = DB::table('configure_parameters')->select('parameter', 'parameter_type', 'parameter_value')->where('notification_id', $notificationId)->get()->toArray();
        $getDetail = DB::table('new_notifications')->select('email_subject', 'email_body', 'notification_condition')->where('id', $notificationId)->get()->toArray();
        $getAuditAccId = Configuration::select('account_id')->where('notification_id', $notificationId)->get()->toArray();
        if (!empty($getSql)) {
            foreach ($getDetail as $value) {
                $subject = $value->email_subject;
                $email_body = $value->email_body;
                $body = strip_tags($email_body);
                $notifiCondition = $value->notification_condition;
                $explode = explode('$', $notifiCondition);
                $getQry = explode('from', $explode[0]);
                $getAudit = explode('where', $getQry[1]);
                $getQryVal = explode('.', $getAudit[0]);
                $db = trim($getQryVal[0]);
                if ($db === "db") {
                    $username = "root";
                    $password = "Micro@123";
                    $server = "127.0.0.1";
                    $port = "3306";
                    $database_name = "kissinger";
                    $conn = mysqli_connect($server, $username, $password, $database_name, $port);
                    if ($conn) {
                        $qryCondition = DB::table('new_notifications')->select('notification_condition')->where('id', $notificationId)->get()->toArray();
                        foreach ($getAuditAccId as $accId) {
                            $account_id = $accId['account_id'];
                            $qryCondition = DB::table('new_notifications')->select('notification_condition')->where('id', $notificationId)->get()->toArray();
                            $rowdata = "";
                            if (strpos($body, 'Notification_results')) {
                                $explodeQry = explode('db.', $qryCondition[0]->notification_condition);
                                $implodeQry = implode('', $explodeQry);
                                $getInformation = static::getParameter($notificationId, $implodeQry, $conn);
                                while ($row = mysqli_fetch_array($getInformation)) {
                                    $rowdata = $rowdata . '   ' . $row['log_message'];
                                }
                                $body = str_replace('[Notification_results]', '', $body);
                            }
                            $accQry = DB::table('new_accounts')->select('disable_monitoring', 'status')->where('id', $account_id)->get()->toArray();
                            if ($accQry[0]->disable_monitoring == 0 && $accQry[0]->status == 1) {
                                $notification = static::sendMailNotification($email_subject, $body, $recipentEmail, $rowdata);
                                $res = [
                                    'success' => true,
                                    'result' => $notification,
                                    'message' => 'Notification Send Successfully.'
                                ];
                                return $res;
                            }
                        }
                    }
                }
                if ($db === "ws") {
                    $qryCondition = DB::table('new_notifications')->select('notification_condition')->where('id', $notificationId)->get()->toArray();
                    foreach ($getAuditAccId as $accId) {
                        $account_id = $accId['account_id'];
                        $getConn = DB::table('new_accounts')->select('username', 'password', 'server', 'port', 'database_name')->where('id', $account_id)->get()->toArray();
                        foreach ($getConn as $conn) {
                            $username = $conn->username;
                            $password = $conn->password;
                            $server = $conn->server;
                            $port = $conn->port;
                            $database_name = $conn->database_name;
                            $conn = mysqli_connect($server, $username, $password, $database_name, $port);
                            if ($conn) {

                                $qryCondition = DB::table('new_notifications')->select('notification_condition')->where('id', $notificationId)->get()->toArray();
                                $rowdata = "";
                                if (strpos($body, 'Notification_results')) {
                                    $explodeQry = explode('ws.', $qryCondition[0]->notification_condition);
                                    $implodeQry = implode('', $explodeQry);
                                    $getInformation = static::getParameter($notificationId, $implodeQry, $conn);
                                    $rowdata = mysqli_fetch_assoc($getInformation);
                                    $body = str_replace('[Notification_results]', '', $body);
                                }
                                $accQry = DB::table('new_accounts')->select('disable_monitoring', 'status')->where('id', $account_id)->get()->toArray();
                                if ($accQry[0]->disable_monitoring == 0 && $accQry[0]->status == 1) {
                                    $notification = static::sendMailNotification($email_subject, $body, $recipentEmail, $rowdata);
                                    $res = [
                                        'success' => true,
                                        'result' => $notification,
                                        'message' => 'Notification Send Successfully.'
                                    ];
                                    return $res;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Send notification on configure email 
     * if disable monitoring is equal to zero
     *
     * @param  $email_subject, $body, $recipentEmail, $rowdata
     */
    public static function sendMailNotification($email_subject, $body, $recipentEmail, $rowdata) {
        $details = [
            'body' => $rowdata,
            'data' => html_entity_decode($body),
            'subject' => $email_subject
        ];
        foreach ($recipentEmail as $email) {
            $user = User::first();
            $user->email = $email;
            $notification = Notification::send($user, new KissingerNotifications($details));
        }
    }

    /**
     * Get parameter value from table
     *
     * @param  $notificationId, $implodeQry, $conn
     */
    public static function getParameter($notificationId, $implodeQry, $conn) {
        $getSql = DB::table('configure_parameters')->select('parameter', 'parameter_type', 'parameter_value', 'account_id')->where('notification_id', $notificationId)->get()->toArray();
        foreach ($getSql as $getParameter) {
            $checkAccid = $getParameter->account_id;
            if ($checkAccid == "") {
                $parameters[] = $getParameter->parameter;
                $parametercount = count($getSql);
                $parameterValue[] = $getParameter->parameter_value;
                $arrCombine = array_combine($parameters, $parameterValue);
            }
            if (!empty($checkAccid)) {
                $parameters[] = $getParameter->parameter;
                $parametercount = count($getSql);
                $parameterValue[] = $getParameter->parameter_value;
                $arrCombine = array_combine($parameters, $parameterValue);
            }
            foreach ($arrCombine as $key => $qryVal) {
                $implodeQry = str_replace($key, $qryVal, $implodeQry);
            }
        }
        return mysqli_query($conn, $implodeQry);
    }
}
