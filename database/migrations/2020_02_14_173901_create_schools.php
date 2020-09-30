<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSchools extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('schools');
        //
        Schema::create('schools', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('shubetu_id')->comment('大学・大学院などの種別');
            $table->integer('kokushi_id')->comment('国公立などの国私種別');
            $table->string('school_cd');
            $table->string('school_name');
            $table->string('school_kananame');
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
        Schema::dropIfExists('schools');
    }
}
