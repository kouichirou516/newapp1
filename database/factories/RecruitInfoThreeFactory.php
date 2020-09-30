<?php

use Faker\Generator as Faker;

$factory->define(App\Models\RecruitInfoThree::class, function (Faker $faker) {
    return [
      "status" => 1,
      "refer_title_1" => "タイトル",
      "refer_description_1" => "本文",
      "refer_title_2" => "タイトル",
      "refer_description_2" => "本文",
      "refer_title_3" => "タイトル",
      "refer_description_3" => "本文",
      "refer_title_4" => "タイトル",
      "refer_description_4" => "本文",
      "refer_title_5" => "タイトル",
      "refer_description_5" => "本文",
      "refer_title_6" => "タイトル",
      "refer_description_6" => "本文",
      "refer_title_7" => "タイトル",
      "refer_description_7" => "本文",
      "refer_title_8" => "タイトル",
      "refer_description_8" => "本文",
      "refer_title_9" => "タイトル",
      "refer_description_9" => "本文",
      "refer_title_10" => "タイトル",
      "refer_description_10" => "本文",
      "from_school" => "001:東京大学;002:早稲田大学",
      "from_school_free_word" => "フリーワード",
      "contact" => "人事部　人事採用グループ\n
所在地：東京都港区新橋1-2-3 かもめビル4F\n
TEL：03-1234-5678（直通）",
      "human_division_picture" => "",
    ];
});
