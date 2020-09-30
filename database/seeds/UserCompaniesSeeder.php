<?php

use Illuminate\Database\Seeder;

class UserCompaniesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Models\Company::class, 10)->create()->each(function ($company) {
            $company->users()->save(factory(App\Models\User::class)->make());
        });
    }
}
