<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Requests\Admin\User\StoreRequest;
use App\Http\Resources\Admin\UsersResource;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class AdminController
{
    public function index(){
        $users = User::all();
        return UsersResource::collection($users);
    }

    public function create(StoreRequest $request){

        $data = $request->validated();

        $password = Str::random(8);
        $data['password'] = Hash::make($password);

        User::create($data);

        return response([]);
    }
}
