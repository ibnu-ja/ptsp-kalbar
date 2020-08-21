<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permohonan extends Model
{
    public function comments()
    {
        return $this->hasMany('App\Layanan');
    }
}
