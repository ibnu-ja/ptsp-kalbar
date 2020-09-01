<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class SuratKeluar extends Model implements HasMedia
{
    use InteractsWithMedia;
    //oh god
    protected $fillable = [
        'user_id',
        'jenis',
        'isi',
        'kode_satker',
        'tgl_surat',
        'asal',
        'tujuan',
        'nomor_urut_biasa',
        'nomor_urut_spd',
        'nomor_urut_sk',
        'nomor_surat'
    ];
}
