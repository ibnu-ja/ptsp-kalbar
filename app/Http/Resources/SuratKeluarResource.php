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
        $berkas = $this->getMedia('berkas')->makeHidden(['created_at','updated_at', 'model_type', 'model_id', 'id']);
        if ($this->jenis == 0) $nomor_urut = $this->nomor_urut_biasa;
        if ($this->jenis == 1) $nomor_urut = $this->nomor_urut_spd;
        if ($this->jenis == 2) $nomor_urut = $this->nomor_urut_sk;
        return [
            'id' => $this->id,
            'nomor_urut' => $nomor_urut,
            'jenis' => $this->jenis,
            'tgl_surat' => $this->tgl_surat,
            'asal' => $this->asal,
            'isi' => $this->isi,
            'kode_satker' => $this->kode_satker,
            'berkas' => $this->when(!$berkas->isEmpty(), $berkas),
            // 'berkas' => $this->when(!$berkas->isEmpty(), $berkas),
            // 'permohonan_count' => PermohonanResource::collection($this->whenLoaded('permohonan')->count()),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
        // return parent::toArray($request);
    }
}
