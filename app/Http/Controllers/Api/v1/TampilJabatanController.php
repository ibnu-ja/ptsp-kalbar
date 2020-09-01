<?php

namespace App\Http\Controllers\Api\v1;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TampilJabatanController extends ApiController
{
    /**
     * tampilkan pejabat untuk di disposisi
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->hasRole('pimpinan')) {
            // return 'pimpinan';
            $jabatan = User::whereHas("roles", function ($q) {
                $q->where("name", "pejabat");
            })->select('jabatan', 'kode_jabatan')->get();
        } else if (Auth::user()->hasRole('pejabat')) {
            // return 'pejabat';
            $jabatan = User::whereHas("roles", function ($q) {
                $q->where("name", "petugas");
            })
                ->where("kode_jabatan", "like", Auth::user()->kode_jabatan . ".%")
                ->select('jabatan', 'kode_jabatan')->get();
        }
        return response()->json(['data' => $jabatan]);
    }
    public function indexTwo()
    {
        //god please dont kill me
        $jabatan = User::role('pegawai')->groupBy('jabatan', 'kode_jabatan')->select('jabatan', 'kode_jabatan')->orderBy('kode_jabatan')->get();
        return response()->json(['data' => $jabatan]);
    }
}
