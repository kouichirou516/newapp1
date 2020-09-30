<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecruitInfoThreesTable extends Migration {
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(){
    Schema::create('recruit_info_threes', function(Blueprint $table){
      $table->increments('id');
      $table->integer('status');
      $table->integer('company_id');

      $table->string('refer_title_1');
      $table->text('refer_description_1');
      $table->string('refer_title_2');
      $table->text('refer_description_2');
      $table->string('refer_title_3');
      $table->text('refer_description_3');
      $table->string('refer_title_4');
      $table->text('refer_description_4');
      $table->string('refer_title_5');
      $table->text('refer_description_5');
      $table->string('refer_title_6');
      $table->text('refer_description_6');
      $table->string('refer_title_7');
      $table->text('refer_description_7');
      $table->string('refer_title_8');
      $table->text('refer_description_8');
      $table->string('refer_title_9');
      $table->text('refer_description_9');
      $table->string('refer_title_10');
      $table->text('refer_description_10');
      $table->text('from_school');
      $table->text('from_school_free_word');
      $table->text('contact');
      $table->string('human_division_picture');
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
  public function down(){
    Schema::dropIfExists('recruit_info_threes');
  }
}
