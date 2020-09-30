<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateGenkouAutoReplies20181201 extends Migration
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
            $table->boolean('tpl1_disabled');
            $table->boolean('tpl2_disabled');
            $table->boolean('tpl3_disabled');
            $table->string('signature');
            $table->dropColumn('tpl1_message_type');
            $table->dropColumn('tpl1_template_id');
            $table->dropColumn('tpl1_template_name');
            $table->dropColumn('tpl1_is_original_design');
            $table->dropColumn('tpl1_body');
            $table->dropColumn('tpl1_is_barcode_show');
            $table->dropColumn('tpl1_is_reply');
            $table->dropColumn('tpl1_is_openes_submit');
            $table->dropColumn('tpl1_entry_date_start');
            $table->dropColumn('tpl1_entry_date_end');
            $table->dropColumn('tpl1_reply_weekday');
            $table->dropColumn('tpl1_reply_time1');
            $table->dropColumn('tpl1_reply_time2');
            $table->dropColumn('tpl1_reply_time3');
            $table->dropColumn('tpl1_is_running');
            $table->dropColumn('tpl2_message_type');
            $table->dropColumn('tpl2_template_id');
            $table->dropColumn('tpl2_template_name');
            $table->dropColumn('tpl2_is_original_design');
            $table->dropColumn('tpl2_body');
            $table->dropColumn('tpl2_is_barcode_show');
            $table->dropColumn('tpl2_is_reply');
            $table->dropColumn('tpl2_is_openes_submit');
            $table->dropColumn('tpl2_entry_date_start');
            $table->dropColumn('tpl2_entry_date_end');
            $table->dropColumn('tpl2_reply_weekday');
            $table->dropColumn('tpl2_reply_time1');
            $table->dropColumn('tpl2_reply_time2');
            $table->dropColumn('tpl2_reply_time3');
            $table->dropColumn('tpl2_is_running');
            $table->dropColumn('tpl3_message_type');
            $table->dropColumn('tpl3_template_id');
            $table->dropColumn('tpl3_template_name');
            $table->dropColumn('tpl3_is_original_design');
            $table->dropColumn('tpl3_body');
            $table->dropColumn('tpl3_is_barcode_show');
            $table->dropColumn('tpl3_is_reply');
            $table->dropColumn('tpl3_is_openes_submit');
            $table->dropColumn('tpl3_entry_date_start');
            $table->dropColumn('tpl3_entry_date_end');
            $table->dropColumn('tpl3_reply_weekday');
            $table->dropColumn('tpl3_reply_time1');
            $table->dropColumn('tpl3_reply_time2');
            $table->dropColumn('tpl3_reply_time3');
            $table->dropColumn('tpl3_is_running');
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
            $table->dropColumn('tpl1_disabled');
            $table->dropColumn('tpl2_disabled');
            $table->dropColumn('tpl3_disabled');
            $table->dropColumn('signature');

            $table->integer('tpl1_message_type');
            $table->string('tpl1_template_id');
            $table->string('tpl1_template_name');
            $table->integer('tpl1_is_original_design');
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
        });
    }
}
