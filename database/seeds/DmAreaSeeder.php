<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DmAreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // factory(App\Models\DmArea::class)->create();
        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '北海道・東北',
            'area_type' => 1,
            'pref_keys' => json_encode(range(1, 7))
        ]);

        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '関東',
            'area_type' => 1,
            'pref_keys' => json_encode(range(8, 14))
        ]);

        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '北陸・甲信越',
            'area_type' => 1,
            'pref_keys' => json_encode(range(15, 20))
        ]);

        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '東海',
            'area_type' => 1,
            'pref_keys' => json_encode(range(21, 24))
        ]);

        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '近畿',
            'area_type' => 1,
            'pref_keys' => json_encode(range(25, 30))
        ]);

        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '中国・四国',
            'area_type' => 1,
            'pref_keys' => json_encode(range(31, 39))
        ]);

        DB::table('dm_areas')->insert([
            'company_id' => 47902,
            'name' => '九州・沖縄',
            'area_type' => 1,
            'pref_keys' => json_encode(range(40, 47))
        ]);
    }
}
