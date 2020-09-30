<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenkouKaishajouhou extends Model
{
    //
    protected $guarded = [
        'id', 'company_id'
    ];

    public function showColumns()
    {
      $role       = new GenkouKaishajouhou;
      $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
      foreach (\DB::select($sql) as $column) {
        if(in_array($column->Field, $this->guarded) === false){
          $columns[] = $column->Field;
        }
      }
      return $columns;
    }

    public function initialData(){
        $this->cdata1_title = "事業内容";
        $this->cdata2_title = "設立";
        $this->cdata3_title = "資本金";
        $this->cdata4_title = "従業員数";
        $this->cdata5_title = "売上高";
        $this->cdata6_title = "代表者";
        $this->cdata7_title = "事業所";
    }
}
