<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $berkas = $this->getMedia('berkas')->makeHidden(['created_at','updated_at', 'model_type', 'model_id', 'id']);
        return [
            'id' => $this->id,
            'layanan' => $this->layanan->makeHidden(['created_at','updated_at']),
            'pemohon' => $this->pemohon,
            'status' => $this->status()->makeHidden(['created_at','updated_at', 'model_type', 'model_id', 'id']),
            'berkas' => $this->when(!$berkas->isEmpty(), $berkas),
            'keterangan' => $this->keterangan,  
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
        // return parent::toArray($request);
    }
}
