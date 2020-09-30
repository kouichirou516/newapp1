<?php

use Illuminate\Database\Seeder;

class MastersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {


        //sm_bcd_categories
        DB::table('sm_bcd_categories')->truncate();
        $file = new SplFileObject('database/csv/sm_bcd_categories.csv');
        $file->setFlags(
            \SplFileObject::READ_CSV |
            \SplFileObject::READ_AHEAD |
            \SplFileObject::SKIP_EMPTY |
            \SplFileObject::DROP_NEW_LINE
        );
        $list = [];
        foreach($file as $line) {
            $list[] = [
                "id" => $line[0],
                "name" => $line[1],
            ];
        }
        DB::table("sm_bcd_categories")->insert($list);

        //sm_bcds
        DB::table('sm_bcds')->truncate();
        $file = new SplFileObject('database/csv/sm_bcds.csv');
        $file->setFlags(
            \SplFileObject::READ_CSV |
            \SplFileObject::READ_AHEAD |
            \SplFileObject::SKIP_EMPTY |
            \SplFileObject::DROP_NEW_LINE
        );
        $list = [];
        foreach($file as $line) {
            $list[] = [
                "id" => $line[0],
                "sm_bcd_category_id" => $line[1],
                "name" => $line[2],
            ];
        }
        DB::table("sm_bcds")->insert($list);

    }
}
