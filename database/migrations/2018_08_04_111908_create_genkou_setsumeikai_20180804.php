<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouSetsumeikai20180804 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_setsumeikais', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->integer('status');
            $table->string('setsumeikai1_name');
            $table->date('setsumeikai1_period')->nullable();
            $table->string('setsumeikai1_title');
            $table->text('setsumeikai1_text');
            $table->string('setsumeikai2_name');
            $table->date('setsumeikai2_period')->nullable();
            $table->string('setsumeikai2_title');
            $table->text('setsumeikai2_text');
            $table->string('setsumeikai3_name');
            $table->date('setsumeikai3_period')->nullable();
            $table->string('setsumeikai3_title');
            $table->text('setsumeikai3_text');
            $table->string('setsumeikai4_name');
            $table->date('setsumeikai4_period')->nullable();
            $table->string('setsumeikai4_title');
            $table->text('setsumeikai4_text');
            $table->string('setsumeikai5_name');
            $table->date('setsumeikai5_period')->nullable();
            $table->string('setsumeikai5_title');
            $table->text('setsumeikai5_text');
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
        Schema::dropIfExists('genkou_setsumeikais');
    }
}
