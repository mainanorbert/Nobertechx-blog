<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
// use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AuthController extends Controller
{


    public function register(Request $request){

        $this->validate($request,[
            'name'=>'required|min:5',
            'email'=>'required|email|unique:users,email',
            'password'=>['required','confirmed']
            // 'password'=>['required','confirmed',Password::min(5)->letters()->symbols()]
        ]);

        /** @var User $user */

        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
        ]);


        $token= $user->createToken('main')->plainTextToken;


        return response(compact('user','token'));
    }


    public function login(LoginRequest $request){
        $data = $request->validated();

        if(!Auth::attempt($data)){

            return response('credentials provided does not match with our records',566);
        }


        $user = auth()->user();

        /** @var User $user */
        $token=$user->createToken('main')->plainTextToken;

        return response(compact('user','token'));

    }
    public function logout(Request $request){
        $user = $request->user();

        /** @var User $user */

        $user->currentAccessToken()->delete;

        return response('',200);
    }

    public function getUser($id){
        $user = User::find($id);

        return response()->json($user);

    }
    public function user_id($id)
    {
        // return $id;
        $user=User::find($id);
        return response()->json($user);
        
    }
}