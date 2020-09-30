<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenkouWes extends Model
{
    //
    protected $table = 'genkou_wess';
    protected $guarded = [
        'id', 'company_id'
    ];

    public function showColumns()
    {
      $role       = new GenkouWes;
      $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
      foreach (\DB::select($sql) as $column) {
        if(in_array($column->Field, $this->guarded) === false){
          $columns[] = $column->Field;
        }
      }
      return $columns;
    }

    public function initialData(){
        $this->form_name = "プレエントリーはこちらから！";
        $this->note = "◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆

弊社に興味をお持ちいただき、ありがとうございます！
まずはプレエントリーをお願いいたします。

◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆";
    }
}
