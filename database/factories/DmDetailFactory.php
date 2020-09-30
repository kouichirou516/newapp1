<?php

use Faker\Generator as Faker;

$factory->define(App\Models\DmDetail::class, function (Faker $faker) {
  return [
    'status' => 1,
    'company_id' => $faker->numberBetween($min=172127, $max=172545),
    'dmaction_id' => 1,
    'dmaction_jyoken_id' => 1,
    'dmaction_gyoshu_id' => 1,
    'dmaction_honsha_area_id' => 1,
    'dmaction_jiki_id' => 1,
    'jinzaiyouken_id' => 1,
    'yuusen_honsha_flg' => 1,
    'yuusen_gyoshu_flg' => 1,
    'yuusen_kibo_flg' => 1,
    'yuusen_kibo_id' => 1,
    'title' => $faker->name,
    'catch' => $faker->name,
    'body' => $faker->text,
    'shomei' => $faker->text,
    'haishintype_id' => 1,
    'lastsetuser_id' => 1,
    'lastsetuser_name' => $faker->text
  ];
});
