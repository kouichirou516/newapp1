<?php

use Faker\Generator as Faker;

$factory->define(App\Models\GenkouAppeal::class, function (Faker $faker) {
    return [
        'status' => 1,
        'category1' => rand(1, 7),
        'category2' => rand(1, 7),
        'category3' => rand(1, 7),
        'catch1' => "作業服・医療用白衣・各種サービス用ユニフォームなどを販売。",
        'catch2' => "一言で作業服・作業用品と言っても様々なお客様が来店します。春には山菜採りに着る服や道具を求める方もいれば、一般的に想像する作業服を求める方、警備に着るベストや警棒などの小物を求める方、レストランの白衣、農家で使う手袋や帽子などの様々な仕事に対応する商品を取り扱っています。専門的な商品を多数取り扱っているのが当社の強みです。",
        'catch3' => "事業・商品の特徴",
        'text1' => "一言で作業服・作業用品と言っても様々なお客様が来店します。春には山菜採りに着る服や道具を求める方もいれば、一般的に想像する作業服を求める方、警備に着るベストや警棒などの小物を求める方、レストランの白衣、農家で使う手袋や帽子などの様々な仕事に対応する商品を取り扱っています。専門的な商品を多数取り扱っているのが当社の強みです。",
        'text2' => "事業・商品の特徴",
        'text3' => "作業服・医療用白衣・各種サービス用ユニフォームなどを販売。",
        'image1' => "",
        'image2' => "",
        'image3' => "",
    ];
});
