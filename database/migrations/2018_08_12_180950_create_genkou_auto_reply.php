<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouAutoReply extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_auto_replies', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('company_id');
            $table->integer('status');
            $table->integer('tpl1_message_type');
            $table->string('tpl1_template_id');
            $table->string('tpl1_template_name');
            $table->integer('tpl1_is_original_design');
            $table->string('tpl1_title');
            $table->text('tpl1_body');
            $table->integer('tpl1_is_barcode_show');
            $table->integer('tpl1_is_reply');
            $table->integer('tpl1_is_openes_submit');
            $table->date('tpl1_entry_date_start');
            $table->date('tpl1_entry_date_end');
            $table->string('tpl1_reply_weekday');
            $table->string('tpl1_reply_time1');
            $table->string('tpl1_reply_time2');
            $table->string('tpl1_reply_time3');
            $table->string('tpl1_is_running');
            $table->integer('tpl2_message_type');
            $table->string('tpl2_template_id');
            $table->string('tpl2_template_name');
            $table->integer('tpl2_is_original_design');
            $table->string('tpl2_title');
            $table->text('tpl2_body');
            $table->integer('tpl2_is_barcode_show');
            $table->integer('tpl2_is_reply');
            $table->integer('tpl2_is_openes_submit');
            $table->date('tpl2_entry_date_start');
            $table->date('tpl2_entry_date_end');
            $table->string('tpl2_reply_weekday');
            $table->string('tpl2_reply_time1');
            $table->string('tpl2_reply_time2');
            $table->string('tpl2_reply_time3');
            $table->string('tpl2_is_running');
            $table->integer('tpl3_message_type');
            $table->string('tpl3_template_id');
            $table->string('tpl3_template_name');
            $table->integer('tpl3_is_original_design');
            $table->string('tpl3_title');
            $table->text('tpl3_body');
            $table->integer('tpl3_is_barcode_show');
            $table->integer('tpl3_is_reply');
            $table->integer('tpl3_is_openes_submit');
            $table->date('tpl3_entry_date_start');
            $table->date('tpl3_entry_date_end');
            $table->string('tpl3_reply_weekday');
            $table->string('tpl3_reply_time1');
            $table->string('tpl3_reply_time2');
            $table->string('tpl3_reply_time3');
            $table->string('tpl3_is_running');
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
        Schema::dropIfExists('genkou_auto_replies');
    }
}
