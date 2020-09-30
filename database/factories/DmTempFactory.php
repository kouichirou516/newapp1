<?php

use Faker\Generator as Faker;

$factory->define(App\Models\DmTemp::class, function (Faker $faker) {
    return [
      'company_id' => $faker->numberBetween($min=172127, $max=172545),
      'name' => $faker->name,
      'title' => $faker->name,
      'catch' => $faker->text,
      'body' => $faker->text,
      'wes_keys' => json_encode($faker->randomElements($array=range(1, 50), $count=5))
    ];
});
