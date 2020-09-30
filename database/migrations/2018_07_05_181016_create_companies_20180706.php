<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompanies20180706 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('scode', 10);
            $table->string('rid', 10);
            $table->date('open_date')->nullable();
            $table->boolean('is_agreed');
            $table->boolean('is_active_robo_1')->default(0);
            $table->boolean('is_active_robo_2')->default(0);
            $table->boolean('is_active_robo_3')->default(0);
            $table->boolean('is_confirmed_robo_1')->default(0);
            $table->boolean('is_confirmed_robo_2')->default(0);
            $table->boolean('is_confirmed_robo_3')->default(0);
            $table->string('plan');
            $table->integer('status');
            $table->string('user_depcd');
            $table->string('user_depname');
            $table->integer('user_group_id');
            $table->string('user_groupname');
            $table->string('user_name');
            $table->integer('user_id');
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
        Schema::dropIfExists('companies');
    }
}
