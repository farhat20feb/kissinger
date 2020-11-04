<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::auth();

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'App\Http\Controllers\ApiAuthController@login');

Route::get('accounts', 'App\Http\Controllers\Superadmin\SuperAdminAccountController@viewAccountUsers')->name('accounts');
    
Route::resource('users','App\Http\Controllers\Superadmin\SuperAdminController');

Route::get('notification', 'App\Http\Controllers\Superadmin\NotificationController@index')->name('notification');

Route::get('getKaiauditlog/{id}', 'App\Http\Controllers\Superadmin\SuperAdminAuditLogController@getKaiauditlog')->name('getKaiauditlog');
Route::get('/editAccountUser/{id}', 'App\Http\Controllers\Superadmin\SuperAdminAccountController@editAccountUser')->name('editAccountUser');
Route::get('/editUser/{id}', 'App\Http\Controllers\Superadmin\SuperAdminController@edit')->name('editUser');

Route::post('status','App\Http\Controllers\Superadmin\SuperAdminAccountController@updateMultipleStatus');
Route::post('account_new', 'App\Http\Controllers\Superadmin\SuperAdminAccountController@newAccountForUser')->name('account_new');
Route::post('/updateAccountUser', 'App\Http\Controllers\Superadmin\SuperAdminAccountController@updateAccountUser')->name('updateAccountUser');
Route::post('/deleteAccountUser', 'App\Http\Controllers\Superadmin\SuperAdminAccountController@deleteAccountbyID')->name('deleteAccountUser');

Route::post('users_create', 'App\Http\Controllers\UserController@insertUser')->name('users_create');
Route::get('getAccountList', 'App\Http\Controllers\UserController@accountList')->name('getAccountList');
// ...