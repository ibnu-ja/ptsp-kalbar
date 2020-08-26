<?php

namespace App\Http\Controllers;

use App\Http\Resources\LayananResource;
use App\Layanan;
use Illuminate\Http\Request;

class LayananController extends Controller
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
        return LayananResource::collection(Layanan::get());
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
            'name' => 'required',
            'kategori' => 'required',
            'subkategori' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        $layanan = Layanan::create($request->all());

        // $Layanan->addMultipleMediaFromRequest(['berkas'])
        //     ->each(function ($fileAdder, $key) use ($request) {
        //         $fileAdder
        //             ->withCustomProperties([
        //                 'surat' => [
        //                     'nomor' => $request->nomor_berkas[$key],
        //                     'asal' => $request->asal[$key],
        //                     'perihal' => $request->perihal[$key],
        //                     'tgl_berkas' => $request->tgl_berkas[$key],
        //                 ]
        //             ])
        //             ->toMediaCollection();
        //     });
        // return response()->json(['data' => $Layanan]);
        return new LayananResource($layanan);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $Layanan = Layanan::find($id)->first();
        return new LayananResource($Layanan);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Layanan $Layanan)

    {

        // check if currently authenticated user is the owner of the book

        // if ($request->user()->id !== $book->user_id) {

        //     return response()->json(['error' => 'You can only edit your own books.'], 403);
        // }



        $Layanan->update($request->all());



        return new LayananResource($Layanan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Layanan $Layanan)
    {
        // if ($request->user()->id != $book->user_id) {
        //     return response()->json(['error' => 'You can only delete your own books.'], 403);
        // }
        $Layanan->delete();
        return response()->json(null, 204);
    }
}
