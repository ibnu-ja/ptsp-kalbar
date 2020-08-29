<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\LayananResource;
use App\Layanan;
use Illuminate\Http\Request;

class LayananController extends ApiController
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
        return LayananResource::collection(Layanan::with('permohonan')->get());
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
        $layanan = Layanan::with('permohonan')->find($id);
        if(empty($layanan)) {
            return response()->json(['data'=>[]], 200);
        }
        return new LayananResource($layanan);
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



        return LayananResource::collection($Layanan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, Layanan $layanan)
    {
        // if ($request->user()->id != $book->user_id) {
        //     return response()->json(['error' => 'You can only delete your own books.'], 403);
        // }
        $layanan->delete();
        // return $layanan;
        return response()->json(null, 204);
    }
}
