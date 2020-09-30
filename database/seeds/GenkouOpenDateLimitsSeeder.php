<?php

use Illuminate\Database\Seeder;
use App\Models\GenkouOpenDateLimit;

class GenkouOpenDateLimitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        GenkouOpenDateLimit::truncate();
        $datas = [
            [
                'open_date' => "20190301",
                'limit_on' => "20190206",
            ],
            [
                'open_date' => "20190307",
                'limit_on' => "20190304",
            ],
            [
                'open_date' => "20190314",
                'limit_on' => "20190311",
            ],
            [
                'open_date' => "20190321",
                'limit_on' => "20190318",
            ],
            [
                'open_date' => "20190328",
                'limit_on' => "20190325",
            ],
            [
                'open_date' => "20190404",
                'limit_on' => "20190401",
            ],
            [
                'open_date' => "20190411",
                'limit_on' => "20190408",
            ],
            [
                'open_date' => "20190418",
                'limit_on' => "20190415"
            ]
        ];
        foreach($datas as $data) {
            DB::table('genkou_open_date_limits')->insert($data);
        }

    }
}
