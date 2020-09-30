<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouSetsumeikaiDetail20180804 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_setsumeikai_details', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->string('code');
            $table->string('type');
            $table->string('capacity');
            $table->boolean('is_unspecified_capacity')->default(0);
            $table->integer('place')->nullable();
            $table->date('seminar_date')->nullable();
            $table->time('start_time')->nullable();
            $table->time('end_time')->nullable();
            $table->date('close_date')->nullable();
            $table->time('close_time')->nullable();
            $table->date('cancel_date')->nullable();
            $table->time('cancel_time')->nullable();
            $table->text('description');
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
        Schema::dropIfExists('genkou_setsumeikai_details');
    }
}
