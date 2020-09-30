<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DmHaishinSchedule extends Model
{
    protected $guarded = [];

    public function getHaishinschedules($start_date)
    {
        if (false === strpos($_SERVER['SERVER_NAME'], 'rpadm.dande-lion')) {
            return $this->where('haishin_date', '>=', date('Y/m/d', strtotime($start_date)))->where('haishin_date', '<', date('Y/m/d', strtotime('30 day')))->pluck('haishin_date', 'id')->all();
        } else {
            return $this->where('haishin_date', '>=', date('Y/m/d', strtotime($start_date)))->where('haishin_date', '<', date('Y/m/d', strtotime('75 day')))->pluck('haishin_date', 'id')->all();
        }
    }

    public function getHaishinfinishschedules($start_date)
    {
        if (false === strpos($_SERVER['SERVER_NAME'], 'rpadm.dande-lion')) {
            return $this->where('haishin_date', '>', date('Y/m/d', strtotime($start_date)))->where('haishin_date', '<', date('Y/m/d', strtotime('60 day')))->pluck('haishin_date', 'id')->all();
        } else {
            return $this->where('haishin_date', '>', date('Y/m/d', strtotime($start_date)))->where('haishin_date', '<', date('Y/m/d', strtotime('115 day')))->pluck('haishin_date', 'id')->all();
        }
    }
}
