<?php

use App\Orderan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Spatie\MediaLibrary\MediaCollections\Models\Media;


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

        Route::get('set-status/{orderan}', function (Orderan $orderan) {
            $orderan->setStatus($orderan);
        });

        Route::group(['middleware' => ['permission:view orderan']], function () {
            Route::get('unduh-berkas/{mediaItem}', function(Media $mediaItem){
                return response()->download($mediaItem->getPath(), $mediaItem->file_name);
            });
            Route::get('layanan/orderan', 'OrderanController@index');
            Route::get('layanan/orderan/{orderan}', 'OrderanController@show');
        });

        Route::post('layanan/{layanan}/orderan', 'OrderanController@store')->middleware(['permission:add orderan']);
        Route::patch('layanan/{layanan}/orderan/{orderan}', 'OrderanController@update')->middleware(['permission:add orderan']);
        Route::get('orderan/{orderan}/verifikasi', 'OrderanController@verifikasi')->middleware(['permission:edit status orderan']);
        Route::delete('orderan/{orderan}/delete-media/{index}', 'OrderanController@deleteMedia')->middleware(['permission:delete orderan']);
        Route::post('orderan/{orderan}/berkas', 'OrderanController@tambahBerkas')->middleware(['permission:delete orderan']);
        Route::get('orderan/{orderan}/selesai', 'OrderanController@selesai')->middleware(['permission:edit status orderan']);
        Route::post('orderan/{orderan}/disposisi', 'OrderanController@disposisi')->middleware(['permission:disposisi']);
        Route::get('jabatan', 'TampilJabatanController@index')->middleware(['role:pejabat|pimpinan|admin']);
        Route::get('jabatan-all', 'TampilJabatanController@indexTwo')->middleware(['role:pegawai|admin']);

        Route::group(['middleware' => ['permission:view layanan']], function () {
            Route::get('layanan', 'LayananController@index');
            Route::post('layanan', 'LayananController@store');
        });
        
        Route::get('layanan/{layanan}', 'LayananController@show')->middleware(['permission:view layanan']);
        Route::put('layanan/{layanan}', 'LayananController@update')->middleware(['permission:edit layanan']);
        Route::patch('layanan/{layanan}', 'LayananController@update')->middleware(['permission:edit layanan']);
        Route::delete('layanan/{layanan}', 'LayananController@destroy')->middleware(['permission:delete layanan']);

        // https://laravel.com/docs/7.x/controllers
        // Route::apiResource('surat-keluar', 'SuratKeluarController');        
        Route::get('surat-keluar', 'SuratKeluarController@index')->middleware(['permission:view surat keluar']);
        Route::get('surat-keluar/{suratKeluar}', 'SuratKeluarController@show')->middleware(['permission:view surat keluar']);
        Route::post('surat-keluar', 'SuratKeluarController@store')->middleware(['permission:add surat keluar']);
        Route::patch('surat-keluar/{suratKeluar}', 'SuratKeluarController@update')->middleware(['permission:edit surat keluar']);
        Route::put('surat-keluar/{suratKeluar}', 'SuratKeluarController@update')->middleware(['permission:edit surat keluar']);
        Route::delete('surat-keluar/{suratKeluar}', 'SuratKeluarController@destroy')->middleware(['permission:delete surat keluar']);

        Route::post('surat-keluar/{suratKeluar}/berkas', 'SuratKeluarController@tambahBerkas')->middleware(['permission:edit surat keluar']);
        Route::delete('surat-keluar/{suratKeluar}/berkas', 'SuratKeluarController@hapusBerkas')->middleware(['permission:delete surat keluar']);
    });
});

// Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
// });

Route::get('tampil-layanan', 'TampilLayananController@index');
Route::get('kategori', 'TampilLayananController@kategori');
