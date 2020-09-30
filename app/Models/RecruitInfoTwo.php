<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecruitInfoTwo extends Model
{
    protected $guarded = [
      'id', 'company_id'
    ];

    public function showColumns()
    {
      $role       = new RecruitInfoTwo;
      $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
      foreach (\DB::select($sql) as $column) {
        if(in_array($column->Field, $this->guarded) === false){
          $columns[] = $column->Field;
        }
      }
      return $columns;
    }
}
