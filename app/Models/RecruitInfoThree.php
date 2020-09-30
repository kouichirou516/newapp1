<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecruitInfoThree extends Model
{
    protected $guarded = [
      'id', 'company_id', 'human_division_picture_delete'
    ];

    public function showColumns()
    {
      $role       = new RecruitInfoThree;
      $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
      foreach (\DB::select($sql) as $column) {
        if(in_array($column->Field, $this->guarded) === false){
          $columns[] = $column->Field;
        }
      }
      return $columns;
    }
}
