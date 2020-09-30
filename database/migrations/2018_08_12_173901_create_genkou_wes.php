<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouWes extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_wess', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->integer('status');
            $table->string('form_name');
            $table->boolean('is_entry_accept')->nullable();
            $table->string('limit');
            $table->text('note');
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
        Schema::dropIfExists('genkou_wess');
    }
}
