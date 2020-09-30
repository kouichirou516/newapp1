<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RecruitInfoOne extends Model
{
    protected $guarded = [
      'id', 'company_id', 'audition_border_image_delete'
    ];

    public function showColumns()
    {
      $role       = new RecruitInfoOne;
      $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
      foreach (\DB::select($sql) as $column) {
        if(in_array($column->Field, $this->guarded) === false){
          $columns[] = $column->Field;
        }
      }
      return $columns;
    }

    public function initialData(){
        $this->requirement_title_1 = "職種";
        $this->requirement_title_2 = "勤務地";
        $this->requirement_title_3 = "勤務時間";
        $this->welfare_title_1 = "給与";
        $this->welfare_title_2 = "諸手当";
        $this->welfare_title_3 = "昇給";
        $this->welfare_title_4 = "賞与";
        $this->welfare_title_5 = "休日休暇";
        $this->welfare_title_6 = "保険";
        $this->welfare_title_7 = "試用期間";
    }

}
