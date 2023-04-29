<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\UpdateRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function index(): UserResource
    {
        if (Auth::check()) {
            $user = Auth::user();
        }
        return new UserResource($user);
    }

    public function update(UpdateRequest $request, User $user)
    {
        $data = $request->validated();
        $user->update($data);
        return response([]);
    }
    public function destroy(User $user){
        $user->delete();
        return response([]);
    }

    public function checkEmail($email): JsonResponse
    {
        $user = Auth::user();
        $isUnique = !User::where('id', 'not like', $user->id)
            ->where('email', $email)
            ->exists();
        return response()->json($isUnique);
    }
    public function checkRegEmail($email): JsonResponse
    {
        $isUnique = !User::where('email', $email)->exists();
        return response()->json($isUnique);
    }
}
