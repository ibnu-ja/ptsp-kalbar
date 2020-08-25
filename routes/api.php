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
    Route::get('permission/{permissionName}', function ($permissionName) {
        if(!auth()->user()->can($permissionName)) {
            abort(403);
        }
        return response()->json(true, 204);
    });
    // Users
    Route::get('testing', function () {

        auth()->user()->syncRoles(['pimpinan']);
        // auth()->user()->syncRoles(['operator', 'admin']);
        // return auth()->user()->can(['add permohonan','view permohonan']);
        // $role = auth()->user()->getRoleNames();
        // return auth()->user()->can('add permohonan');
        // return response()->json(['roles' => $role]);
        // return auth()->user()->hasAnyRole(['operator']);
        // return response()->json(['roles' => $role]);
    });

    Route::group(['middleware' => ['permission:add permohonan|view permohonan']], function () {
        Route::get('layanan/permohonan', 'PermohonanController@index');
        Route::post('layanan/{id}/permohonan', 'PermohonanController@store');
        Route::get('layanan/permohonan/{id}', 'PermohonanController@show');

        Route::get('layanan/permohonan/{id}/berkas', 'PermohonanController@medialibrary');
    });
});

Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('layanan', 'TampilLayananController@index');
Route::get('kategori', 'TampilLayananController@kategori');
