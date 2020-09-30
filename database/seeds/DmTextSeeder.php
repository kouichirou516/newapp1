<?php

use Illuminate\Database\Seeder;

class DmTempSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\DmWes::class, 50)->create();
        factory(App\Models\DmOrid::class, 50)->create()->each(function ($orid) {
            $temp = factory(App\Models\DmTemp::class)->make();
            $temp->company_id = $orid->company_id;
            $orid->dm_temp()->save($temp);
        });
    }
}
