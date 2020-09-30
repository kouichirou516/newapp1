<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    //
    public function users()
    {
        return $this->belongsToMany('App\Models\User', 'user_companies')->withPivot('is_received');
    }

    public function dmusers()
    {
        return $this->belongsToMany('App\Models\User', 'user_companies')->where('is_rms_dm', 1)->withPivot('is_received_dm');
    }

    public function eigyo(){
        return $this->belongsTo('App\Models\User');
    }

    public function deps(){
      return $this->belongsTo('App\Models\Group', 'user_depcd', 'depcd');
    }

    public function group(){
      return $this->belongsTo('App\Models\Group', 'user_group_id');
    }

    public function genkou_kaishajouhou()
    {
        return $this->hasOne('App\Models\GenkouKaishajouhou');
    }
    public function genkou_appeal()
    {
        return $this->hasOne('App\Models\GenkouAppeal');
    }
    public function recruit_info_1()
    {
        return $this->hasOne('App\Models\RecruitInfoOne');
    }
    public function recruit_info_2()
    {
      return $this->hasOne('App\Models\RecruitInfoTwo');
    }
    public function recruit_info_3()
    {
      return $this->hasOne('App\Models\RecruitInfoThree');
    }
    public function recruit_info_4()
    {
      return $this->hasOne('App\Models\RecruitInfoFour');
    }
    public function genkou_wes()
    {
        return $this->hasOne('App\Models\GenkouWes');
    }
    public function genkou_setsumeikai()
    {
      return $this->hasOne('App\Models\GenkouSetsumeikai');
    }
    public function genkou_setsumeikai_details()
    {
      return $this->hasMany('App\Models\GenkouSetsumeikaiDetail');
    }
    public function genkou_auto_reply()
    {
        return $this->hasOne('App\Models\GenkouAutoReply');
    }
    public function dm_areas()
    {
        return $this->hasMany('App\Models\DmArea');
    }
    public function dm_schools()
    {
        return $this->hasMany('App\Models\DmSchool');
    }
    public function dms()
    {
        return $this->hasMany('App\Models\Dms');
    }
    public function dm_temps()
    {
        return $this->hasMany('App\Models\DmTemp');
    }
    public function dm_orids()
    {
        return $this->hasMany('App\Models\DmOrid');
    }
    public function dm_jinzais()
    {
        return $this->hasMany('App\Models\DmJinzai');
    }
    public function dm_wess()
    {
        return $this->hasMany('App\Models\DmWes');
    }
    public function dm_details()
    {
        return $this->hasMany('App\Models\DmDetail');
    }
    public function dm_detail_tsusus()
    {
        return $this->hasMany('App\Models\DmDetail')->whereIn('status', [1,2,3]);
    }
    public function dm_detail_haishins()
    {
        return $this->hasMany('App\Models\DmDetail')->whereIn('status', [4,5,6]);
    }


    protected $dates = ['open_date'];
    protected $guarded = [];
}
