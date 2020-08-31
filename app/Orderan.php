<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\ModelStatus\HasStatuses;


class Orderan extends Model implements HasMedia
{
    use InteractsWithMedia, HasStatuses;

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
