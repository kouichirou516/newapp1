<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddInputfinishedAtColumn20181108 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('genkou_appeals', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
        Schema::table('genkou_kaishajouhous', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
        Schema::table('genkou_wess', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
        Schema::table('recruit_info_fours', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
        Schema::table('recruit_info_ones', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
        Schema::table('recruit_info_threes', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
        Schema::table('recruit_info_twos', function (Blueprint $table) {
            $table->dateTime('inputfinished_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('genkou_appeals', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
        Schema::table('genkou_kaishajouhous', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
        Schema::table('genkou_wess', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
        Schema::table('recruit_info_fours', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
        Schema::table('recruit_info_ones', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
        Schema::table('recruit_info_threes', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
        Schema::table('recruit_info_twos', function (Blueprint $table) {
            $table->dropColumn('inputfinished_at');
        });
    }
}
