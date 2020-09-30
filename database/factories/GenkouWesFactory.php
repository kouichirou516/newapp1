<?php

use Faker\Generator as Faker;

$factory->define(App\Models\GenkouWes::class, function (Faker $faker) {
    return [
      "status" => 1,
      "form_name" => "プレエントリーはこちらから！",
      "is_entry_accept" => 1,
      "limit" => "受付制限文",
      "note" => "◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇\n
\n
弊社に興味をお持ちいただき、ありがとうございます！\n
まずはプレエントリーをお願いいたします。\n
\n
◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇◆◇",
    ];
});
