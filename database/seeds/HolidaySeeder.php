<?php

use Illuminate\Database\Seeder;
use App\Models\DmHolidaySchedule;

class HolidaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = new SplFileObject('database/csv/dm_holiday_schedules.csv');
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
              "today_date" => $line[0],
              "haishin_date" => $line[1],
            ];
          }
          $i++;
        }
        DB::table("dm_holiday_schedules")->insert($list);
    }
}
