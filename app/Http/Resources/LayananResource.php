<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class LayananResource extends JsonResource
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
            'name' => $this->name,
            'kategori' => $this->kategori,
            'subkategori' => $this->subkategori,
            'deskripsi' => $this->deskripsi,
            'permohonan_count' => $this->whenLoaded('permohonan', function() {
                return $this->permohonan->count();
            }),
            // 'permohonan_count' => PermohonanResource::collection($this->whenLoaded('permohonan')->count()),
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
        // return parent::toArray($request);
    }
}
