<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Gakka::class, function (Faker $faker) {
    return [
      'school_id' => $faker->numberBetween($min=1, $max=1506),
      'gakubuname' => $faker->name,
      'gakkaname' => $faker->name
    ];
});
