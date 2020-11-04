<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ApiAuthController extends Controller
{
    public function login(Request $request)
{
    $age = array("Peter"=>35, "Ben"=>37, "Joe"=>43);

echo json_encode($age);
}
}