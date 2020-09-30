<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateUserCompanies20200127 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('user_companies', function (Blueprint $table) {
            $table->boolean('is_received_dm');
            $table->boolean('is_rms_dm');
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
        Schema::table('user_companies', function (Blueprint $table) {
            $table->dropColumn('is_received_dm');
        });
    }
}
