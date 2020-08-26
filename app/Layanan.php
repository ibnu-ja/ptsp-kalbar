<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Layanan extends Model
{
    protected $fillable = ['name', 'kategori', 'subkategori', 'deskripsi', 'tingkat_layanan'];

    public function permohonan()
    {
        return $this->hasMany('App\Permohonan');
    }
}
