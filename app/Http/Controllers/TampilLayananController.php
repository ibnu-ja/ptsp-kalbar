<?php

namespace App\Http\Controllers;

use App\Http\Resources\LayananResource;
use Illuminate\Http\Request;
use App\Layanan;

class TampilLayananController extends Controller
{
    public function index(Request $request)
    {
        $layanans = Layanan::where([
            ['kategori', 'like', $request->kategori],
            ['subkategori', '=', $request->subkategori]
        ])
            ->orWhere('kategori', 'like', $request->kategori)
            ->get();
        return LayananResource::collection($layanans);
    }

    public function kategori()
    {
        $kategoris = Layanan::select('kategori')->groupBy('kategori')->get();
        // $kategori = array();

        foreach ($kategoris as $item) {
            $layanan[] = $item->kategori;
        }
        if (empty($layanan)) {
            return response()->json(null, 204);
        }
        return response()->json(['kategori' => $layanan], 200);
    }
}
