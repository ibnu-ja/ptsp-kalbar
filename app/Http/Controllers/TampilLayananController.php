<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Layanan;

class TampilLayananController extends Controller
{
    // public function index($layanan)
    // {
    //     $layanans = Layanan::where('kategori', 'like', $layanan)->get();
    //     return response()->json(['data' => $layanans], 200);
    // }

    public function index(Request $request)
    {
        $layanans = Layanan::where([
            ['kategori', 'like', $request->kategori],
            ['subkategori', '=', $request->subkategori]
        ])->get();
        return response()->json(['data' => $layanans], 200);
    }

    public function kategori()
    {
        $kategoris = Layanan::select('kategori')->groupBy('kategori')->get();
        $kategori = array();
        foreach ($kategoris as $item) {
            $layanan[] = $item->kategori;
        }
        return response()->json(['kategori' => $layanan], 200);
    }
}
