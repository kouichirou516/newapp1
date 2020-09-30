<?php

use Faker\Generator as Faker;

$factory->define(App\Models\GenkouSetsumeikai::class, function (Faker $faker) {
    return [
      'status' => 1,
      'setsumeikai1_name' => '説明会1',
      'setsumeikai1_period' => '20190315',
      'setsumeikai1_title' => 'タイトル',
      'setsumeikai1_text' => '本文',
      'setsumeikai2_name' => '説明会2',
      'setsumeikai2_period' => '20190315',
      'setsumeikai2_title' => 'タイトル',
      'setsumeikai2_text' => '本文',
      'setsumeikai3_name' => '説明会3',
      'setsumeikai3_period' => '20190315',
      'setsumeikai3_title' => 'タイトル',
      'setsumeikai3_text' => '本文',
      'setsumeikai4_name' => '説明会4',
      'setsumeikai4_period' => '20190315',
      'setsumeikai4_title' => 'タイトル',
      'setsumeikai4_text' => '本文',
      'setsumeikai5_name' => '説明会5',
      'setsumeikai5_period' => '20190315',
      'setsumeikai5_title' => 'タイトル',
      'setsumeikai5_text' => '本文',
    ];
});
