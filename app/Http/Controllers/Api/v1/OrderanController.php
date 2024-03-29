<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Resources\OrderanResource;
use App\Layanan;
use Illuminate\Http\Request;
use App\Orderan;
use Illuminate\Support\Facades\Auth;

class OrderanController extends ApiController
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
    public function index(Request $request)
    {
        // $orderan = Orderan::with('layanan')
        //     ->when($request->layanan_id, function ($query) use ($request) {
        //         $query->where('layanan_id', '=', $request->layanan_id);
        //     })
        //     ->get();
        // return OrderanResource::collection($orderan);
        $orderan = Orderan::with('layanan')
            ->when($request->layanan_id, function ($query) use ($request) {
                $query->where('layanan_id', '=', $request->layanan_id);
            });

        $user = Auth::user();
        // return $user->getRoleNames();
        // return 'asd';
        if (Auth::user()->hasRole('admin')) {
            return OrderanResource::collection($orderan->get());
        } else if (Auth::user()->hasRole('operator')) {
            return OrderanResource::collection($orderan->currentStatus('pending')->get());
        } else if (Auth::user()->hasRole('pegawai')) {
            return OrderanResource::collection($orderan->currentStatus($user->kode_jabatan)->get());
        }

        return OrderanResource::collection($orderan->where('user_id', '=', $user->id));
    }
    public function verifikasi(Orderan $orderan)
    {
        $orderan->setStatus('Kw.14');
        return new OrderanResource($orderan);
    }
    public function selesai(Orderan $orderan)
    {
        $orderan->setStatus('selesai');
        return new OrderanResource($orderan);
    }
    public function disposisi(Request $request, Orderan $orderan)
    {
        $validation = validator(
            $request->all(),
            ['tujuan' => 'required']
        );

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        $orderan->setStatus($request->tujuan, $request->keterangan);
        return new OrderanResource($orderan);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, Layanan $layanan)
    {
        $validation = validator($request->all(), [
            'keterangan' => 'required',
            'pemohon' => 'required',
            'keterangan' => 'required'
        ]);

        if ($validation->fails()) {
            return response()->json($validation->errors(), 400);
        }

        $orderan = $layanan->orderan()->create([
            'user_id' => auth()->user()->id,
            'no_surat_masuk' => $request->no_surat_masuk,
            'keterangan' => $request->keterangan,
            'pemohon' => $request->pemohon,
        ]);

        if ($request->berkas) {
            $orderan->addMultipleMediaFromRequest(['berkas'])
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
                        ->toMediaCollection('berkas');
                });
        }
        $orderan->setStatus('pending');
        // return response()->json(['data' => $orderan]);
        return new OrderanResource($orderan);
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Orderan $orderan)
    {
        if (empty($orderan)) {
            return response()->json(['data' => []], 200);
        }
        return new OrderanResource($orderan);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function tambahBerkas(Request $request, Orderan $orderan)
    {
        if ($request->berkas) {
            $orderan->addMultipleMediaFromRequest(['berkas'])
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
                        ->toMediaCollection('berkas');
                });
        }
        return new OrderanResource($orderan);
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $layanan, Orderan $orderan)
    {
        $orderan->update($request->all());
        return new OrderanResource($orderan);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Orderan $orderan)
    {
        $orderan->delete();
        return response()->json(null, 204);
    }
    public function deleteMedia(Orderan $orderan, $index)
    {
        $media = $orderan->getMedia('berkas');
        $media[$index]->delete();
        return response()->json(null, 204);
    }
    public function unduhMedia(Orderan $orderan, $index)
    {
        $mediaItem = $orderan->getMedia('berkas');
        // return $mediaItem[$index]->getPath();
        return response()->download($mediaItem[$index]->getPath(), $mediaItem[$index]->file_name);
    }
}
