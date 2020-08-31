<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\SuratKeluarResource;
use Illuminate\Http\Request;
use App\SuratKeluar;

class SuratKeluarController extends ApiController
{
    /**
     * Display all books that have been added
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return SuratKeluarResource::collection(SuratKeluar::get());
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = validator($request->all(), [
            'jenis' => 'required',
            'tgl_surat' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        if (SuratKeluar::get()->isEmpty()) {
            $nomor_urut = 0;
        }

        $suratkeluar = SuratKeluar::create([

        ]);

        return new SuratKeluarResource($suratkeluar);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(SuratKeluar $suratkeluar)
    {
        if (empty($suratkeluar)) {
            return response()->json(null, 204);
        }
        return new SuratKeluarResource($suratkeluar);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SuratKeluar $suratkeluar)
    {
        $suratkeluar->update($request->all());
        return new SuratKeluarResource($suratkeluar);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, SuratKeluar $suratkeluar)
    {
        $suratkeluar->delete();
        return response()->json(null, 204);
    }
}
