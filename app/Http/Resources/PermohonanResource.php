<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PermohonanResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'layanan' => $this->layanan->makeHidden(['created_at','updated_at','column_n']),
            'pemohon' => $this->pemohon,
            'berkas' => $this->getMedia(),
            'keterangan' => $this->keterangan,  
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
        // return parent::toArray($request);
    }
}
