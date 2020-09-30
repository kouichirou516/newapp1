<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDmSchools extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('dm_schools', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->string('name');
            $table->integer('schoolgun_type');
            $table->integer('schoolgunschool_type');
            $table->text('school_keys')->nullable();
            $table->text('schoolgakubu_keys')->nullable();
            $table->text('schoolgakka_keys')->nullable();
            $table->text('gakkakeitou_0_keys')->nullable();
            $table->text('gakkakeitou_1_keys')->nullable();
            $table->text('gakkakeitou_2_keys')->nullable();
            $table->text('gakkakeitou_3_keys')->nullable();
            $table->text('gakkakeitou_4_keys')->nullable();
            $table->boolean('is_editable')->default(1);
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
        Schema::dropIfExists('dm_schools');
    }
}
