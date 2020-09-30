<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GenkouAppeal extends Model
{
    //
    protected $guarded = [
        'id', 'company_id', 'image1_delete', 'image2_delete', 'image3_delete',
    ];

    public function showColumns()
    {
      $role       = new GenkouAppeal;
      $sql        = 'SHOW COLUMNS FROM ' . $role->getTable();
      foreach (\DB::select($sql) as $column) {
        if(in_array($column->Field, $this->guarded) === false){
          $columns[] = $column->Field;
        }
      }
      return $columns;
    }
}
