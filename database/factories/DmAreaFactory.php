<?php

use Faker\Generator as Faker;

$factory->define(App\Models\DmArea::class, function (Faker $faker) {
    return [
      'company_id' => 172525,
      'name' => $faker->name,
      'area_type' => $faker->word,
      'pref_keys' => json_encode($faker->randomElements($array = [
        'hokkaido', 'aomorik', 'iwate', 'miyagi', 'akita',
        'yamagata', 'hukushima', 'ibaraki', 'tochigi'
      ]))
    ];
});
