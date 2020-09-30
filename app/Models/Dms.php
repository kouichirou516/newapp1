<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\DmHaishinSchedule;

class Dms extends Model
{
    protected $guarded = [];
    public function dm_details()
    {
        return $this->hasMany('App\Models\DmDetail', 'dm_id');
    }

    public function recent_dm_detail()
    {
        $today = DmHaishinSchedule::where('haishin_date', date('Y-m-d'))->first();
        return $this->hasOne('App\Models\DmDetail', 'dm_id')->where("senddate_id", ">=", $today->id)->orderBy("senddate_id", "asc");
    }

    public function dmdetailData($company_id)
    {
        $dms_results = [];
        $dms_senddate = "-";
        $dm_haishin_schedule_alls = DmHaishinSchedule::pluck('haishin_date', 'id')->all();
        foreach ($this->where('company_id', $company_id)->get() as $dms) :
            foreach ($dms->dm_details()->where('dm_id', $dms->id)->get() as $dmdetail) :
                $dms_results[$dms->id]['counts'][$dmdetail->status] = (isset($dms_results[$dms->id]['counts'][$dmdetail->status]) ? $dms_results[$dms->id]['counts'][$dmdetail->status]+1 : 1);
                if ( $dmdetail->senddate_id && $dm_haishin_schedule_alls[$dmdetail->senddate_id] > date('Y-m-d') && ($dms_senddate == "-" || $dms_senddate < $dm_haishin_schedule_alls[$dmdetail->senddate_id])) {
                    $dms_senddate = $dm_haishin_schedule_alls[$dmdetail->senddate_id];
                }
            endforeach;
            $dms_results[$dms->id]['senddate'] = $dms_senddate;
        endforeach;
        return $dms_results;
    }



}
