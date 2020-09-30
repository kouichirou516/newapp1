<?php

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Company;
use App\Models\UserCompany;
use App\Models\GenkouKaishajouhou;
use App\Models\GenkouAppeal;
use App\Models\RecruitInfoOne;
use App\Models\RecruitInfoTwo;
use App\Models\RecruitInfoThree;
use App\Models\RecruitInfoFour;
use App\Models\GenkouWes;
use App\Models\GenkouSetsumeikai;
use App\Models\GenkouSetsumeikaiDetail;
use App\Models\GenkouSetsumeikaiGenkouSetsumeikaiDetail;
use App\Models\Group;

class CompaniesSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){

        GenkouKaishajouhou::truncate();
        GenkouAppeal::truncate();
        RecruitInfoOne::truncate();
        RecruitInfoTwo::truncate();
        RecruitInfoThree::truncate();
        RecruitInfoFour::truncate();
        GenkouWes::truncate();
        Company::truncate();
        UserCompany::truncate();
        GenkouSetsumeikai::truncate();
        GenkouSetsumeikaiDetail::truncate();
        GenkouSetsumeikaiGenkouSetsumeikaiDetail::truncate();

        $file = new SplFileObject('database/csv/companies.csv');
        $file->setFlags(
            \SplFileObject::READ_CSV |
            \SplFileObject::READ_AHEAD |
            \SplFileObject::SKIP_EMPTY |
            \SplFileObject::DROP_NEW_LINE
        );
        $list = [];
        $i = 0;
        foreach($file as $line) {
            if($i != 0) {
                $list[] = [
                    "id" => $line[0],
                    "name" => $line[1],
                    "scode" => $line[2],
                    "rid" => $line[3],
                    "open_date" => $line[4] ? $line[4] : null,
                    "is_agreed" => $line[5],
                    "plan" => $line[6],
                    "user_depcd" => $line[7],
                    "user_depname" => $line[8],
                    "user_groupname" => $line[9],
                    "user_group_id" => $line[10],
                    "user_name" => $line[11],
                    "user_id" => $line[12],
                    "status" => 1,
                    "status_dm" => 1
                ];
//                factory(GenkouKaishajouhou::class, 1)->create(['company_id' => $line[0]]);
//                factory(GenkouAppeal::class, 1)->create(['company_id' => $line[0]]);
//                factory(RecruitInfoOne::class, 1)->create(['company_id' => $line[0]]);
//                factory(RecruitInfoTwo::class, 1)->create(['company_id' => $line[0]]);
//                factory(RecruitInfoThree::class, 1)->create(['company_id' => $line[0]]);
//                factory(RecruitInfoFour::class, 1)->create(['company_id' => $line[0]]);
//                factory(GenkouWes::class, 1)->create(['company_id' => $line[0]]);
//                factory(GenkouSetsumeikai::class, 1)->create(['company_id' => $line[0]])->each(function($setsumeikai) use ($line){
//                    for($j = 1; $j <= 15; $j++) {
//                        factory(GenkouSetsumeikaiDetail::class, 1)->create(['company_id' => $line[0]])->each(function($detail) use ($setsumeikai, $j){
////                DB::table('genkou_setsumeikai_genkou_setsumeikai_details')->insert([
////                  'genkou_setsumeikai_id' => $setsumeikai->id,
////                  'genkou_setsumeikai_no' => $j,
////                  'genkou_setsumeikai_detail_id' => $detail->id,
////                ]);
//                        });
//                    }
//                });
            }
            $i++;
        }
        DB::table("companies")->insert($list);


        $file = new SplFileObject('database/csv/user_companies.csv');
        $file->setFlags(
            \SplFileObject::READ_CSV |
            \SplFileObject::READ_AHEAD |
            \SplFileObject::SKIP_EMPTY |
            \SplFileObject::DROP_NEW_LINE
        );
        $list = [];
        $i = 0;
        foreach($file as $line) {
            if($i != 0) {
                $list[] = [
                    "user_id" => $line[1],
                    "company_id" => $line[2],
                    "is_received" => 0,
                ];
            }
            $i++;
        }
        DB::table("user_companies")->insert($list);
    }
}
