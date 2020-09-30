<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DmDetail extends Model
{
    protected $guarded = [];
    public function dm()
    {
        return $this->belongsTo('App\Models\Dms', 'dm_id');
    }
    public function dm_area()
    {
        return $this->belongsTo('App\Models\DmArea', 'dmarea_id');
    }
    public function dm_school()
    {
        return $this->belongsTo('App\Models\DmSchool', 'dmschool_id');
    }
    public function dm_temp()
    {
        return $this->belongsTo('App\Models\DmTemp', 'dmtemp_id');
    }
    public function company()
    {
        return $this->belongsTo('App\Models\Company', 'company_id');
    }

    public function scopeFindStatusIn($query, $status) {
        \Debugbar::debug($query);
        return $query->where(function($q) use ($status) {
            $q->whereIn('status', $status);
        });
    }

    public function scopeFindLatestUpdated($query) {
        return $query->orderBy("updated_at", "desc");
    }
}
