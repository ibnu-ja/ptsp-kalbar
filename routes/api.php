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
Route::group(['prefix' => 'v1', 'namespace' => 'Api\v1'], function () {
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
        Route::get('grant/{permission}', function ($role) {
            auth()->user()->syncRoles([$role]);
            return response('', 204);
        });

        Route::group(['middleware' => ['permission:view permohonan']], function () {
            Route::get('layanan/permohonan', 'PermohonanController@index');
            Route::get('layanan/permohonan/{id}', 'PermohonanController@show');
        });

        Route::post('layanan/{id}/permohonan', 'PermohonanController@store')->middleware(['permission:add permohonan']);

        Route::group(['middleware' => ['permission:view layanan']], function () {
            Route::get('layanan', 'LayananController@index');
            Route::post('layanan', 'LayananController@store');
        });

        Route::get('layanan/{id}', 'LayananController@show')->middleware(['permission:sho permohonan']);
    });
});

// Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
// });

Route::get('tampil-layanan', 'TampilLayananController@index');
Route::get('kategori', 'TampilLayananController@kategori');
