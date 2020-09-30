<?php

use Faker\Generator as Faker;

$factory->define(App\Models\GenkouSetsumeikaiDetail::class, function (Faker $faker) {
    return [
      'code' => '00001',
      'type' => '1',
      'capacity' => '100',
      'is_unspecified_capacity' => 1,
      'place' => 1,
      'seminar_date' => '2018-10-10',
      'start_time' => '13:00',
      'end_time' => '15:00',
      'close_date' => '2018-09-10',
      'close_time' => '09:00',
      'cancel_date' => '2018-10-09',
      'cancel_time' => '13:00',
      'description' => '概要',
    ];
});
