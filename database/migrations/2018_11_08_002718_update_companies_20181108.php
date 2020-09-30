<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateCompanies20181108 extends Migration
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
            //データ型の変更
            $table->string('raemail');
            $table->string('raname');
            $table->integer('status_robo_1');
            $table->integer('status_robo_2');
            $table->integer('status_robo_3');
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
        Schema::table('companies', function (Blueprint $table) {
            $table->dropColumn('raemail');
            $table->dropColumn('raname');
            $table->dropColumn('status_robo_1');
            $table->dropColumn('status_robo_2');
            $table->dropColumn('status_robo_3');
        });
    }
}
