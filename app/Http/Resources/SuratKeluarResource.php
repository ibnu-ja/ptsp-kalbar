<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SuratKeluarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $berkas = $this->getMedia()->makeHidden(['created_at','updated_at', 'model_type', 'model_id', 'id']);
        return [
            'id' => $this->id,
            'nomor_urut' => $this->nomor_urut,
            'jenis' => $this->jenis,
            'tgl_surat' => $this->tgl_surat,
            'asal' => $this->asal,
            'kode_asal' => $this->kode_asal,
            'berkas' => $this->when(!$berkas->isEmpty(), $berkas),
            // 'permohonan_count' => PermohonanResource::collection($this->whenLoaded('permohonan')->count()),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
        // return parent::toArray($request);
    }
}
