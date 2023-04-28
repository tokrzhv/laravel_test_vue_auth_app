<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('{page}', 'MainController')->where('page', '.*');

//Route::get('/{any}', function () {
//    return view('main');
//})->where('any', '^(?!api).*');
