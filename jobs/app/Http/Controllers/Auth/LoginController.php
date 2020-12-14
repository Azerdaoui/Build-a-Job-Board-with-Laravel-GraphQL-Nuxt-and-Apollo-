<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Auth\AuthenticationException;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        if (Auth::attempt($request->only('email', 'password'))) 
        {
            $request->session()->regenerate();

            return Auth::user();
        }

        throw new AuthenticationException();
    }
}
