<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDmDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dm_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->string('name')->default('');
            $table->integer('status');
            $table->integer('dm_id');
            $table->integer('dmschool_id')->nullable();
            $table->integer('dmarea_id')->nullable();
            $table->integer('dmgyoshucategory_id')->nullable();
            $table->integer('dmaction_id')->nullable();
            $table->integer('dmaction_gyoshucategory_id')->nullable();
            $table->integer('dmaction_jiki_id')->nullable();
            $table->integer('dmtemp_id')->nullable();
            $table->integer('tsusu')->nullable();
            $table->integer('robo_dmid')->nullable()->comment('ロボからもらう：DMのID');
            $table->integer('robo_tsusu')->nullable()->comment('ロボからもらう：通数');
            $table->text('robo_kekka')->nullable()->comment('ロボからもらう：結果・エラー');
            $table->integer('haishintype_id')->comment('配信方法：通常配信、スペシャル配信、厳選表示オプション');
            $table->integer('jinzai_id')->nullable()->comment('人材要件　厳選表示のみ必須');
            $table->string('sotsunen_keys')->comment('卒年');
            $table->integer('senddate_id')->nullable();
            $table->integer('yoyakutype_id')->comment('予約方法：行動ターゲティング配信、オート差分配信');
            $table->boolean('koudo_honsha_id')->nullable();
            $table->boolean('koudo_gyoshu_id')->nullable();
            $table->integer('koudo_kibo_id')->nullable();
            $table->boolean('sabun_fukumu_flg')->nullable();
            $table->integer('sabun_finishdate_id')->nullable();
            $table->string('sabun_week_keys')->nullable();
            $table->integer('sabun_tsuchi_userid')->nullable()->comment('通知メールのユーザーID');
            $table->string('usg_haishistatus')->nullable();
            $table->string('usg_kaifuritsu')->nullable();
            $table->string('usg_haishinbi')->nullable();
            $table->integer('usg_haishinpoint')->nullable();
            $table->integer('usg_haishinninzu')->nullable();
            $table->integer('lastsetuser_id');
            $table->string('lastsetuser_name');
            $table->datetime('lastset_at');
            $table->datetime('robo_tsusu_export_at')->nullable();
            $table->datetime('robo_haishin_export_at')->nullable();
            $table->string('error_msg')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dm_details');
    }
}
