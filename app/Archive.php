<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Archive extends Model
{
    protected $fillable = ['nomor', 'asal', 'perihal', 'tgl_berkas'];
}
