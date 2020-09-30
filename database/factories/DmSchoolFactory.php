<?php

use Faker\Generator as Faker;

$factory->define(App\Models\DmSchool::class, function (Faker $faker) {
  return [
    'name' => $faker->name,
    'schoolgun_type' => $faker->name,
    'school_keys' => '[]',
    'schoolgakka_keys' => '[]',
    'gakkakeitou_keys' => '[]'
  ];
});
