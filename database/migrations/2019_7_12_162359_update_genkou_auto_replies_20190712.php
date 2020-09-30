<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateGenkouAutoReplies20190712 extends Migration
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
            $table->text('tpl1_body');
            $table->text('tpl2_body');
            $table->text('tpl3_body');
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
            $table->dropColumn('tpl1_body');
            $table->dropColumn('tpl2_body');
            $table->dropColumn('tpl3_body');
        });
    }
}
