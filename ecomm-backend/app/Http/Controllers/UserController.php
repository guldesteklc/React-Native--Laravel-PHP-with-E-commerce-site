<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash as FacadesHash;
use Illuminate\Support\Facedes\Hash;

class UserController extends Controller
{
    function register(Request $req)
    {
        $user=new User;
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password= FacadesHash::make($req->input('password'));
        $user->save();
        return $user;
    }
    function login(Request $req)
{
    $user=User::where('email',$req->email)->first();
    if($user|| FacadesHash::check($req->password,$user->password))
    {
            return["error"=>"Email or password is not matched!"];
    }
    return $user;
}
}
