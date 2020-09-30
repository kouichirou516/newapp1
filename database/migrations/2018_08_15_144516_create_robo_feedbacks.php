<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRoboFeedbacks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('robo_feedbacks', function (Blueprint $table) {
            $table->increments('id');
            $table->date('open_date')->nullable();
            $table->string('scode', 10);
            $table->string('rid', 10);
            $table->string('name');
            $table->string('plan');
            $table->string('user_depname');
            $table->string('user_groupname');
            $table->string('user_name');
            $table->string('result1')->nullable();
            $table->string('result2')->nullable();
            $table->string('result3')->nullable();
            $table->string('result4')->nullable();
            $table->text('error')->nullable();
            $table->text('error_detail')->nullable();
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
        Schema::dropIfExists('robo_feedbacks');
    }
}
