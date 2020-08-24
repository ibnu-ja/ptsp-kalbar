<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Layanan extends Model
{
    
    public function permohonan()
    {
        return $this->hasMany('App\Permohonan');
    }
}
