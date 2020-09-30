<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUserCompanies20180710 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('user_companies', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('company_id');
            $table->boolean('is_received'); //ログインメールを一度でも送ると1
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
        Schema::dropIfExists('user_companies');
    }
}
