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

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});

Route::group(['middleware' => 'auth:api'], function () {
    // Users
    // Route::get('users', 'UserController@index')->middleware('isAdmin');
    // Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');

    Route::get('testing', function () {
        
        auth()->user()->syncRoles(['operator']);
        // auth()->user()->syncRoles(['operator', 'admin']);
        // return auth()->user()->can(['add permohonan','view permohonan']);
        // $role = auth()->user()->getRoleNames();
        // return auth()->user()->can('add permohonan');
        // return response()->json(['roles' => $role]);
        // return auth()->user()->hasAnyRole(['operator']);
        // return response()->json(['roles' => $role]);
    });

    Route::group(['middleware' => ['permission:add permohonan|view permohonan']], function () {
        Route::get('permohonan', 'PermohonanController@index');
        Route::post('permohonan/{id}', 'PermohonanController@store');
    });
});

Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('layanan', 'TampilLayananController@index');
Route::get('kategori', 'TampilLayananController@kategori');
