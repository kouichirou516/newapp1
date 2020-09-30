<?php

use Illuminate\Database\Seeder;

class DmDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\DmDetail::class, 50)->create()->each(function (App\Models\DmDetail $dm_detail) {
            $dm = factory(App\Models\Dms::class)->make();
            $dm->company_id = $dm_detail->company_id;
            $dm->save();

            $orid = factory(App\Models\DmOrid::class)->make();
            $orid->company_id = $dm_detail->company_id;
            $orid->save();

            $area = factory(App\Models\DmArea::class)->make();
            $area->company_id = $dm_detail->company_id;
            $area->save();

            $school = factory(App\Models\DmSchool::class)->make();
            $school->company_id = $dm_detail->company_id;
            $school->save();

            $dm_detail->dm()->associate($dm);
            $dm_detail->dm_orid()->associate($orid);
            $dm_detail->dm_area()->associate($area);
            $dm_detail->dm_school()->associate($school);
            $dm_detail->save();
        });
    }
}
