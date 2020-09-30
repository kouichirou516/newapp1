<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateCompanies20200124 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('companies', function (Blueprint $table) {
            $table->boolean('is_agreed_dm');
            $table->integer('status_dm');
            $table->boolean('is_active_robo_4')->default(0);
            $table->integer('status_robo_4');

            $table->integer('point')->nullable()->comment('ロボ・USGからもらう');
            $table->string('point_dt')->nullable()->comment('ロボ・USGからもらう');
            $table->integer('point_muryo')->nullable()->comment('ロボ・USGからもらう');
            $table->integer('point_shohi')->nullable()->comment('ロボ・USGからもらう');

            $table->boolean('jinzaiyouken_flg')->default(0);
            $table->boolean('wes_flg')->default(0);
            $table->boolean('neo_kodorireki_flg')->nullable();
            $table->boolean('neo_shokumutekiouseidb_flg')->nullable();
            $table->boolean('neo_gensenhyoji_flg')->nullable();
            $table->boolean('neo_db_flg')->nullable();
            $table->boolean('neo_orid_flg')->nullable();

            $table->integer('dm_honsha_pref_id')->nullable();
            $table->integer('dm_main_gyoshu_id')->nullable();
            $table->integer('dm_sub_gyoshu_id')->nullable();
            $table->text('dm_signature')->nullable();
            $table->integer('dm_sendmail_userid')->nullable();
            $table->datetime('dm_last_send_dt')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
