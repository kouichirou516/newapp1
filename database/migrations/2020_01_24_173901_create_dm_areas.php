<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDmAreas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('dm_areas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->string('name');
            $table->text('pref_keys');
            $table->boolean('is_editable')->default(1);
            $table->boolean('is_system')->default(0);
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
        Schema::dropIfExists('dm_areas');
    }
}
