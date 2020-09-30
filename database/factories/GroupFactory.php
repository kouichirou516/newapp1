<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Group::class, function (Faker $faker) {
    $dep = $faker->regexify('[0-9]{10}');
    return [
        'name' => $faker->word,
        'groupcd' => $faker->regexify('[0-9]{10}'),
        'depname' => $dep,
        'depcd' => 123,
    ];
});
