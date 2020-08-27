<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\PermohonanResource;
use App\Layanan;
use Illuminate\Http\Request;
use App\Permohonan;

class PermohonanController extends ApiController
{
    public function __construct()
    {
        // $this->middleware('auth:api')->except(['index', 'show']);
    }

    /**
     * Display all books that have been added
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return PermohonanResource::collection(Permohonan::get());
    }
    // public function medialibrary($id)
    // {
    //     // $mediaItems = $permohonan->getMedia();
    //     $permohonan = Permohonan::find(1)->first();
    //     return response()->json(['data' => $permohonan->getMedia()]); //returns empty array;

    // }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $id)
    {
        $validation = validator($request->all(), [
            'keterangan' => 'required',
            'pemohon' => 'required',
            'keterangan' => 'required'
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        $permohonan = Layanan::find($id)->permohonan()->create([
            'user_id' => auth()->user()->id,
            'no_surat_masuk' => $request->no_surat_masuk,
            'keterangan' => $request->keterangan,
            'pemohon' => $request->pemohon,
        ]);

        $permohonan->addMultipleMediaFromRequest(['berkas'])
            ->each(function ($fileAdder, $key) use ($request) {
                $fileAdder
                    ->withCustomProperties([
                        'surat' => [
                            'nomor' => $request->nomor_berkas[$key],
                            'asal' => $request->asal[$key],
                            'perihal' => $request->perihal[$key],
                            'tgl_berkas' => $request->tgl_berkas[$key],
                        ]
                    ])
                    ->toMediaCollection();
            });
        // return response()->json(['data' => $permohonan]);
        return new PermohonanResource($permohonan);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $permohonan = Permohonan::find($id);
        if(empty($permohonan)) {
            return response()->json(['data'=>[]], 200);
        }
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



        return PermohonanResource::collection($permohonan);
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
