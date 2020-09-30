<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DmOrid extends Model
{
    protected $guarded = [];
    public function dm_temp()
    {
        return $this->hasOne('App\Models\DmTemp', 'orid_id');
    }
}
