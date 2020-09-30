<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenkouSetsumeikaiDetail extends Model
{
    //
    public function genkou_setsumeikais()
    {
        return $this->belongsToMany('App\Models\GenkouSetsumeikai', 'genkou_setsumeikai_genkou_setsumeikai_details');
    }

    public function showColumns()
    {
        $role       = new GenkouSetsumeikaiDetail;
        $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
        foreach (\DB::select($sql) as $column) {
            if(in_array($column->Field, $this->guarded) === false){
                $columns[] = $column->Field;
            }
        }
        return $columns;
    }
    
    public function initialData(){
        $this->style = 1;
    }

    protected $guarded = [
        'id'
    ];
}
