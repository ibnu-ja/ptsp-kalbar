<?php

namespace App\Http\Controllers;

use App\Http\Resources\PermohonanResource;
use App\Layanan;
use Illuminate\Http\Request;
use App\Permohonan;

class PermohonanController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->except(['index', 'show']);
    }

    /**
     * Display all books that have been added
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PermohonanResource::collection(Permohonan::paginate(25));
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $request->validate([
            'keterangan' => 'required',
            'pemohon' => 'required',
            'keterangan' => 'required'
        ]);

        $permohonan = Layanan::find($id)->permohonan()->create([
            'user_id' => auth()->user()->id,
            'no_surat_masuk' => $request->no_surat_masuk,
            'keterangan' => $request->keterangan,
            'pemohon' => $request->pemohon,
        ]);

        foreach ($request->nomor_berkas as $key => $n) {
            $asal = $request->asal;
            $perihal = $request->perihal;
            $tgl_berkas = $request->tgl_berkas;
            $permohonan
                ->archive()
                ->create([
                    'nomor' => $n,
                    'asal' => $asal[$key],
                    'perihal' => $perihal[$key],
                    'tgl_berkas' => $tgl_berkas[$key],
                ]);
        }
        return new PermohonanResource($permohonan->with('archives'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Permohonan $permohonan)
    {
        return new PermohonanResource($permohonan);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permohonan $permohonan)

    {

        // check if currently authenticated user is the owner of the book

        // if ($request->user()->id !== $book->user_id) {

        //     return response()->json(['error' => 'You can only edit your own books.'], 403);
        // }



        $permohonan->update($request->all());



        return new PermohonanResource($permohonan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Permohonan $permohonan)
    {
        // if ($request->user()->id != $book->user_id) {
        //     return response()->json(['error' => 'You can only delete your own books.'], 403);
        // }
        $permohonan->delete();
        return response()->json(null, 204);
    }
}
