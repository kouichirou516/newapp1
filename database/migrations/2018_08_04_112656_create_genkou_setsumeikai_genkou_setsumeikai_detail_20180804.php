<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouSetsumeikaiGenkouSetsumeikaiDetail20180804 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_setsumeikai_genkou_setsumeikai_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('genkou_setsumeikai_id');
            $table->integer('genkou_setsumeikai_no');
            $table->integer('genkou_setsumeikai_detail_id');
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
        //
        Schema::dropIfExists('genkou_setsumeikai_genkou_setsumeikai_details');
    }
}
