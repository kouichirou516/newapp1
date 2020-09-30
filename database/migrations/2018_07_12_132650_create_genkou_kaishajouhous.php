<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGenkouKaishajouhous extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('genkou_kaishajouhous', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('status');
            $table->integer('company_id');
            $table->string('corp_name');
            $table->string('corp_name_note');
            $table->string('corp_name_kana');
            $table->string('search_corp1');
            $table->string('search_corp2');
            $table->string('search_corp3');
            $table->string('search_corp4');
            $table->string('search_corp5');
            $table->text('jigyo');
            $table->text('job');
            $table->string('cdata1_title');
            $table->string('cdata2_title');
            $table->string('cdata3_title');
            $table->string('cdata4_title');
            $table->string('cdata5_title');
            $table->string('cdata6_title');
            $table->string('cdata7_title');
            $table->string('cdata8_title');
            $table->string('cdata9_title');
            $table->string('cdata10_title');
            $table->string('cdata11_title');
            $table->string('cdata12_title');
            $table->string('cdata13_title');
            $table->string('cdata14_title');
            $table->string('cdata15_title');
            $table->text('cdata1');
            $table->text('cdata2');
            $table->text('cdata3');
            $table->text('cdata4');
            $table->text('cdata5');
            $table->text('cdata6');
            $table->text('cdata7');
            $table->text('cdata8');
            $table->text('cdata9');
            $table->text('cdata10');
            $table->text('cdata11');
            $table->text('cdata12');
            $table->text('cdata13');
            $table->text('cdata14');
            $table->text('cdata15');
            $table->boolean('is_stocked')->nullable();
            $table->string('employee_number');
            $table->integer('search_group_main')->nullable();
            $table->integer('search_industry_main')->nullable();
            $table->integer('search_group_sub1')->nullable();
            $table->integer('search_industry_sub1')->nullable();
            $table->integer('search_group_sub2')->nullable();
            $table->integer('search_industry_sub2')->nullable();
            $table->integer('search_group_sub3')->nullable();
            $table->integer('search_industry_sub3')->nullable();
            $table->integer('search_group_sub4')->nullable();
            $table->integer('search_industry_sub4')->nullable();
            $table->integer('head_office1');
            $table->integer('head_office2');
            $table->boolean('is_featured1')->default(0);
            $table->boolean('is_featured2')->default(0);
            $table->boolean('is_featured3')->default(0);
            $table->boolean('is_featured4')->default(0);
            $table->boolean('is_featured5')->default(0);
            $table->boolean('is_featured6')->default(0);
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
        Schema::dropIfExists('genkou_kaishajouhous');
    }
}
