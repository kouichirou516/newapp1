<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Company::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'scode' => $faker->text($maxNbChars=10),
        'rid' => $faker->text($maxNbChars=10),
        'is_agreed' => $faker->boolean,
        'is_active_robo_1' => $faker->boolean,
        'is_active_robo_2' => $faker->boolean,
        'is_active_robo_3' => $faker->boolean,
        'is_confirmed_robo_1' => $faker->boolean,
        'is_confirmed_robo_2' => $faker->boolean,
        'is_confirmed_robo_3' => $faker->boolean,
        'plan' => $faker->text,
        'status' => 1,
        'user_depcd' => $faker->text,
        'user_depname' => $faker->text,
        'user_group_id' => 1,
        'user_groupname' => $faker->name,
        'user_name' => $faker->name,
        'user_id' => 1,
        'raemail' => $faker->email,
        'raname' => $faker->name,
        'status_robo_1' => 1,
        'status_robo_2' => 1,
        'status_robo_3' => 1,
        'is_active_robo_4' => $faker->boolean,
        'status_robo_4' => 1,
        'jinzaiyouken_flg' => $faker->boolean,
        'wes_flg' => $faker->boolean
    ];
});

