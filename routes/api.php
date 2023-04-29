<?php

use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => 'auth:sanctum'], function (){

    Route::group(['prefix' => 'profile'], function(){
        Route::get('/', [UserController::class, 'index']);
        Route::patch('/{user}', [UserController::class, 'update']);
        Route::delete('/{user}', [UserController::class, 'destroy']);
        Route::get('/check-email/{email}', [UserController::class, 'checkEmail']);
    });

    Route::group(['prefix' => 'admin'], function(){
        Route::get('/users', [\App\Http\Controllers\Api\Admin\AdminController::class , 'index']);
    });

});

Route::get('/check-reg-email/{email}', [UserController::class, 'checkRegEmail']);

