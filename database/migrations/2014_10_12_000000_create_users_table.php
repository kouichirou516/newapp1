<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('workerno', 11);
            $table->integer('role');
            $table->integer('group_id')->nullable();
            $table->string('group_ids')->nullable();
            $table->string('email')->unique();
            $table->string('password');
            $table->string('name');
            $table->string('kananame');
            $table->datetime('last_login_at')->nullable();
            $table->integer('misslogincount')->default(0);
            $table->boolean('is_disabled')->default(0);
            $table->string('login_token')->default("");
            $table->datetime('login_token_expired_at')->nullable();
            $table->softDeletes();
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
