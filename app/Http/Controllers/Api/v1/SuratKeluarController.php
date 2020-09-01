<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\SuratKeluarResource;
use Illuminate\Http\Request;
use App\SuratKeluar;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;

class SuratKeluarController extends ApiController
{
    /**
     * Display all books that have been added
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::user()->hasRole('admin')) {
            return SuratKeluarResource::collection(SuratKeluar::get());
        } else if (Auth::user()->hasAnyRole(['pejabat', 'pimpinan', 'petugas'])) {
            return SuratKeluarResource::collection(SuratKeluar::where('kode_satker', 'like', Auth::user()->kode_jabatan . "%")->get());
        } else return response()->json(null, 204);
        // return SuratKeluarResource::collection(SuratKeluar::get());
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
            'nomor_surat' => 'required',
            'jenis' => 'required',
            'tgl_surat' => 'required',
            'isi' => 'required',
            'berkas' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        if (date('z') === '0') {
            $nomor_urut_biasa = 0;
            $nomor_urut_sk = 0;
            $nomor_urut_spd = 0;
        } else {
            //WHAT IN TARNATION!!!
            $surat = SuratKeluar::orderBy('id', 'desc')->first();
            if (!$surat) {
                $nomor_urut_biasa = 0;
                $nomor_urut_sk = 0;
                $nomor_urut_spd = 0;
            } else {
                $nomor_urut_biasa = $surat->nomor_urut_biasa;
                $nomor_urut_spd = $surat->nomor_urut_spd;
                $nomor_urut_sk = $surat->nomor_urut_sk;
            }
            if ($request->jenis == 0) $nomor_urut_biasa++;
            else if ($request->jenis == 1) $nomor_urut_spd++;
            else if ($request->jenis == 2) $nomor_urut_sk++;
            else (abort(404));
        }
        // return [$nomor_urut_biasa, $nomor_urut_spd, $nomor_urut_sk];

        $suratKeluar = SuratKeluar::create([
            'user_id' => Auth::user()->id,
            'nomor_urut_biasa' => $nomor_urut_biasa,
            'nomor_urut_spd' => $nomor_urut_spd,
            'nomor_urut_sk' => $nomor_urut_sk,
            'nomor_surat' => $request->nomor_surat,
            'tgl_surat' => $request->tgl_surat,
            'jenis' => $request->jenis,
            'isi' => $request->isi,
            'kode_satker' => Auth::user()->kode_jabatan,
            'asal' => Auth::user()->jabatan,
        ]);

        $suratKeluar->addMediaFromRequest('berkas')
            ->toMediaCollection('berkas');

        return new SuratKeluarResource($suratKeluar);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(SuratKeluar $suratKeluar)
    {
        if (empty($suratKeluar)) {
            return response()->json(null, 204);
        }
        return new SuratKeluarResource($suratKeluar);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SuratKeluar $suratKeluar)
    {
        $suratKeluar->update($request->all());
        return new SuratKeluarResource($suratKeluar);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(SuratKeluar $suratKeluar)
    {
        $suratKeluar->delete();
        return response()->json(null, 204);
    }
    /**
     * Hapus berkas lama, tambah berkas baru
     * @param Request $request
     * @param int $suratKeluar
     * @return Response
     * 
     */
    public function tambahBerkas(Request $request, SuratKeluar $suratKeluar)
    {
        //dear god
        $suratKeluar->clearMediaCollection('berkas');
        $suratKeluar->addMediaFromRequest('berkas')->toMediaCollection('berkas');
        return new SuratKeluarResource($suratKeluar);
    }
    /**
     * Hapus semua berkas dari model
     * 
     * @param int $id
     * @return Response
     */
    public function hapusBerkas(SuratKeluar $suratKeluar)
    {
        $suratKeluar->clearMediaCollection('berkas');
        return response()->json(null, 204);
    }
}
