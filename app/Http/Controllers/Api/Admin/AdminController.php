<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Resources\Admin\UsersResource;
use App\Models\User;

class AdminController
{
    public function index(){
        $users = User::all();
        return UsersResource::collection($users);
    }
}
