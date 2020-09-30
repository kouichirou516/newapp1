<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'workerno' => $faker->regexify('[0-9]{10}'),
        'role' => 1,
        'password' => 'password',
        'kananame' => $faker->kanaName,
        'misslogincount' => 0,
        'is_disabled' => 0,
        'login_token' => "",
        'remember_token' => "",
    ];
});
