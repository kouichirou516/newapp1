<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchoolGakkas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('school_gakkas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('shubetu_id')->comment('大学・大学院などの種別');
            $table->integer('kokushi_id')->comment('国公立などの国私種別');
            $table->string('school_cd');
            $table->string('gakubu_cd');
            $table->string('gakka_cd');
            $table->integer('bunri_type')->comment('文系理系');
            $table->string('school_name');
            $table->string('school_kananame');
            $table->string('gakubu_name');
            $table->string('gakka_name');
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
        Schema::dropIfExists('school_gakkas');
    }
}
