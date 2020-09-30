<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenkouSetsumeikai extends Model
{
    //
    public function genkou_setsumeikai_details()
    {
        return $this->belongsToMany('App\Models\GenkouSetsumeikaiDetail', 'genkou_setsumeikai_genkou_setsumeikai_details')->withPivot('genkou_setsumeikai_no');
    }

    public function detail1(){
        return $this->belongsToMany('App\Models\GenkouSetsumeikaiDetail', 'genkou_setsumeikai_genkou_setsumeikai_details')->where('genkou_setsumeikai_no', 1);
    }
    public function detail2(){
      return $this->belongsToMany('App\Models\GenkouSetsumeikaiDetail', 'genkou_setsumeikai_genkou_setsumeikai_details')->where('genkou_setsumeikai_no', 2);
    }
    public function detail3(){
      return $this->belongsToMany('App\Models\GenkouSetsumeikaiDetail', 'genkou_setsumeikai_genkou_setsumeikai_details')->where('genkou_setsumeikai_no', 3);
    }
    public function detail4(){
      return $this->belongsToMany('App\Models\GenkouSetsumeikaiDetail', 'genkou_setsumeikai_genkou_setsumeikai_details')->where('genkou_setsumeikai_no', 4);
    }
    public function detail5(){
      return $this->belongsToMany('App\Models\GenkouSetsumeikaiDetail', 'genkou_setsumeikai_genkou_setsumeikai_details')->where('genkou_setsumeikai_no', 5);
    }

    public function showColumns()
    {
        $role       = new GenkouSetsumeikai;
        $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
        foreach (\DB::select($sql) as $column) {
            if(in_array($column->Field, $this->guarded) === false){
                $columns[] = $column->Field;
            }
        }
        return $columns;
    }

    public function initialData(){
        $this->setsumeikai1_name = "説明会のご予約はこちらから！";
        $this->setsumeikai1_title = "";
        $this->setsumeikai1_text = "◆予約方法
下記よりご都合の良い日程を選び、ご予約ください！

皆様にお会いできることを楽しみにしています！";

    }

    protected $guarded = [
        'id',
        'company_id',
        'genkou_setsumeikai_details1',
        'genkou_setsumeikai_details2',
        'genkou_setsumeikai_details3',
        'genkou_setsumeikai_details4',
        'genkou_setsumeikai_details5',
        'tmp_link',
    ];
}
