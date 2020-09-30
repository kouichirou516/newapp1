<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DmTemp extends Model
{
    protected $guarded = [];

    public function dm_orid()
    {
        return $this->belongsTo('App\Models\DmOrid', 'orid_id');
    }
}
