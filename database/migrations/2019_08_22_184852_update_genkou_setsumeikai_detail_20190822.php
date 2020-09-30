<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateGenkouSetsumeikaiDetail20190822 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('genkou_setsumeikai_details', function (Blueprint $table) {
            $table->integer('style')->default(1);
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
        Schema::table('genkou_setsumeikai_details', function (Blueprint $table) {
            $table->dropColumn('style');
        });
    }
}
