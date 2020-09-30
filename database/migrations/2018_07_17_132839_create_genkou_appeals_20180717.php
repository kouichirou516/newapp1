<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouAppeals20180717 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_appeals', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->integer('status');
            $table->string('category1');
            $table->string('category2');
            $table->string('category3');
            $table->string('catch1');
            $table->string('catch2');
            $table->string('catch3');
            $table->text('text1');
            $table->text('text2');
            $table->text('text3');
            $table->string('image1');
            $table->string('image2');
            $table->string('image3');
            $table->dateTime('robo_export_at')->nullable();
            $table->integer('answer_count');
            $table->integer('answer_allcount');
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
        Schema::dropIfExists('genkou_appeals');
    }
}
