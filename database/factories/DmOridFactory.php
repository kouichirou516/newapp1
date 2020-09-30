<?php

use Faker\Generator as Faker;

$factory->define(App\Models\DmOrid::class, function (Faker $faker) {
    return [
      'company_id' => $faker->numberBetween($min=172127, $max=172545),
      'name' => $faker->name,
      'oridcd' => $faker->text
    ];
});
