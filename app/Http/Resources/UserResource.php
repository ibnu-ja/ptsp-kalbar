<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        foreach ($this->getAllPermissions() as $item) {
            $permissions[] = $item->name;
        } //god plz really?
        if (empty($permissions)) {
            $permissions = [];
        }
        return [
            "id"=> $this->id,
            "name"=> $this->name,
            "telp"=> $this->telp,
            "alamat"=> $this->alamat,
            "nip"=> $this->nip,
            "email"=> $this->email,
            //really laravel?
            "jabatan"=> $this->when($this->jabatan, $this->jabatan),
            "kode_jabatan"=> $this->when($this->kode_jabatan, $this->kode_jabatan),
            "roles" => ["role" => $this->getRoleNames(), "permissions" => $permissions],
            "email_verified_at"=> $this->email_verified_at,
            "created_at"=> $this->created_at,
            "updated_at"=> $this->updated_at,
        ];
        // return parent::toArray($request);
    }
}


