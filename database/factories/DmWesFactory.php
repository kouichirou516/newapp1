<?php

use Faker\Generator as Faker;

$factory->define(App\Models\DmWes::class, function (Faker $faker) {
    return [
      'company_id' => $faker->numberBetween($min=172127, $max=172545),
      'name' => $faker->name,
      'wescd' => $faker->text
    ];
});
