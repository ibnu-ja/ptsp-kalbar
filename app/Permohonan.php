<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permohonan extends Model
{

    protected $fillable = ['user_id', 'keterangan', 'pemohon'];

    public function layanan()
    {
        return $this->belongsTo('App\Layanan');
    }
    public function archive()
    {
        return $this->hasMany('App\Archive');
    }
}
