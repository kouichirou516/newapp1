<?php

use Illuminate\Database\Seeder;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = new SplFileObject('database/csv/schools.csv');
        $file->setFlags(
          \SplFileObject::READ_CSV |
          \SplFileObject::READ_AHEAD |
          \SplFileObject::SKIP_EMPTY |
          \SplFileObject::DROP_NEW_LINE
        );
        $i = 0;
        foreach ($file as $line) {
            $list = [];
            if (0 != $i) {
                $list[] = [
              'id' => $line[0],
              'shubetu_id' => $line[1],
              'kokushi_id' => $line[2],
              'school_cd' => $line[3],
              'school_name' => $line[4],
              'school_kananame' => $line[5],
            ];
                DB::table('schools')->insert($list);
            }
            ++$i;
        }

        $file = new SplFileObject('database/csv/school_gakubus.csv');
        $file->setFlags(
          \SplFileObject::READ_CSV |
          \SplFileObject::READ_AHEAD |
          \SplFileObject::SKIP_EMPTY |
          \SplFileObject::DROP_NEW_LINE
        );
        $i = 0;
        foreach ($file as $line) {
            $list = [];
            if (0 != $i) {
                $list[] = [
              'id' => $line[0],
              'shubetu_id' => $line[1],
              'kokushi_id' => $line[2],
              'school_cd' => $line[3],
              'gakubu_cd' => $line[4],
              'bunri_type' => $line[5],
              'school_name' => $line[6],
              'school_kananame' => $line[7],
              'gakubu_name' => $line[8],
            ];
                DB::table('school_gakubus')->insert($list);
            }
            ++$i;
        }

        $file = new SplFileObject('database/csv/school_gakkas.csv');
        $file->setFlags(
          \SplFileObject::READ_CSV |
          \SplFileObject::READ_AHEAD |
          \SplFileObject::SKIP_EMPTY |
          \SplFileObject::DROP_NEW_LINE
        );
        $i = 0;
        foreach ($file as $line) {
            $list = [];
            if (0 != $i) {
                $list[] = [
              'id' => $line[0],
              'shubetu_id' => $line[1],
              'kokushi_id' => $line[2],
              'school_cd' => $line[3],
              'gakubu_cd' => $line[4],
              'gakka_cd' => $line[5],
              'bunri_type' => $line[6],
              'school_name' => $line[7],
              'school_kananame' => $line[8],
              'gakubu_name' => $line[9],
              'gakka_name' => $line[10],
            ];
                DB::table('school_gakkas')->insert($list);
            }
            ++$i;
        }
    }
}
