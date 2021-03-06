<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateGenkouAutoReplies20190328 extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('genkou_auto_replies', function (Blueprint $table) {
            //データ型の変更
            $table->text('signature')->change();
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
        Schema::table('genkou_auto_replies', function (Blueprint $table) {
           $table->string('signature')->change(); 
        });
    }
}
