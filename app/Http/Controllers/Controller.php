<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use App\Models\GenkouKaishajouhou;
use App\Models\GenkouAppeal;
use App\Models\GenkouWes;
use App\Models\RecruitInfoOne;
use App\Models\RecruitInfoTwo;
use App\Models\RecruitInfoThree;
use App\Models\RecruitInfoFour;
use App\Models\GenkouSetsumeikai;
use App\Models\GenkouAutoReply;
use App\Models\Company;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
    
    public function setRobo1status($data, $company, $recruit_flg = false) {
      $genkou_1 = GenkouKaishajouhou::firstOrNew(["company_id" => $company->id]);
      $genkou_2 = GenkouAppeal::firstOrNew(["company_id" => $company->id]);
      $genkou_3 = GenkouWes::firstOrNew(["company_id" => $company->id]);
      $recruit_info1 = RecruitInfoOne::firstOrNew(["company_id" => $company->id]);
      $recruit_info2 = RecruitInfoTwo::firstOrNew(["company_id" => $company->id]);
      $recruit_info3 = RecruitInfoThree::firstOrNew(["company_id" => $company->id]);
      $recruit_info4 = RecruitInfoFour::firstOrNew(["company_id" => $company->id]);
      
      $status = 0;
      if ($genkou_1['status'] == 1 && $genkou_2['status'] == 1 && $genkou_3['status'] == 1 && $recruit_info1['status'] == 1 && $recruit_info2['status'] == 1 && $recruit_info3['status'] == 1 && $recruit_info4['status'] == 1) {
        $status = 1;
      }

      if ($company['is_active_robo_1'] == 1 ) {
        if ($status == 1 && $company->status_robo_1 < 5) {
          $company->status_robo_1 = 5;
          $company->save();
        } elseif ($status != 1 && $company->status_robo_1 < 4) {
          $company->status_robo_1 = 4;
          $company->save();
        } elseif ($status == 1 && $company->status_robo_1 > 5) {
          $company->status_robo_1 = 8;
          $company->save();
        } elseif ($status != 1 && $company->status_robo_1 > 5) {
          $company->status_robo_1 = 7;
          $company->save();
        }
      } else {
        $company->status_robo_1 = 0;
        $company->save();
      }

      $message = "";
      if (isset($data['status'])) {
        $message = $data['status'] == 1 ? '原稿を入力完了しました' : '原稿を一時保存しました';
      }

      if ($recruit_flg) {
        //CSVを再度吐き出せるようにnullにする
        $recruit_info1->robo_export_at = null;
        $recruit_info1->save();
      }
      return $message;
    }

    public function setRobo2status($company) {
      $genkou = GenkouSetsumeikai::where("company_id", $company->id)->first();
      if ($company['is_active_robo_2'] == 1 ) {
        if (!isset($genkou)) {
          $company->status_robo_2 = 3;
          $company->save();
        } elseif ($genkou['status'] == 1 && $company->status_robo_2 < 5) {
          $company->status_robo_2 = 5;
          $company->save();
        } elseif ($genkou['status'] != 1 && $company->status_robo_2 < 5) {
          $company->status_robo_2 = 4;
          $company->save();
        } elseif ($genkou['status'] == 1 && $company->status_robo_2 > 5) {
          $company->status_robo_2 = 8;
          $company->save();
        } elseif ($genkou['status'] != 1 && $company->status_robo_2 > 5) {
          $company->status_robo_2 = 7;
          $company->save();
        }
      } else {
        $company->status_robo_2 = 0;
        $company->save();
      }
    }

    public function setRobo3status($company) {
      $genkou = GenkouAutoReply::where("company_id", $company->id)->first();
      if ($company['is_active_robo_3'] == 1 ) {
        if (!isset($genkou)) {
          $company->status_robo_3 = 3;
          $company->save();
        } elseif ($genkou['status'] == 1 && $company->status_robo_3 < 5) {
          $company->status_robo_3 = 5;
          $company->save();
        } elseif ($genkou['status'] != 1 && $company->status_robo_3 < 5) {
          $company->status_robo_3 = 4;
          $company->save();
        } elseif ($genkou['status'] == 1 && $company->status_robo_3 > 5) {
          $company->status_robo_3 = 8;
          $company->save();
        } elseif ($genkou['status'] != 1 && $company->status_robo_3 > 5) {
          $company->status_robo_3 = 7;
          $company->save();
        }
      } else {
        $company->status_robo_3 = 0;
        $company->save();
      }
    }

    public function check404($is_editable){
      if ($is_editable <> 1) { return abort(404); }
    }
    public function checklimitcount404($is_over){
      if ($is_over) { return abort(404); }
    }

}
