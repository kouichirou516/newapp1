<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Dms::class, function (Faker $faker) {
  $arr = [
    'type' => 11,
    'sotsunen_keys' => json_encode([1, 2])
  ];
  for ($i=1; $i<=12; $i++) {
    $arr['shokuteki_' . $i] = $faker->randomElement($array = [2, 3]);
  }
  return $arr;
});
