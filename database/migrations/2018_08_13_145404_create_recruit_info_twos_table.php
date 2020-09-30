<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecruitInfoTwosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recruit_info_twos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('status');
            $table->integer('company_id');

            $table->boolean('is_insert_last_three_years_recruit_retire')->nullable();
            $table->string('last_year');
            $table->boolean('is_last_one_year_recruit_score');
            $table->string('last_one_year_recruit_score');
            $table->string('last_one_year_retire_score');
            $table->boolean('is_last_two_year_recruit_score');
            $table->string('last_two_year_recruit_score');
            $table->string('last_two_year_retire_score');
            $table->boolean('is_last_three_year_recruit_score');
            $table->string('last_three_year_recruit_score');
            $table->string('last_three_year_retire_score');
            $table->string('scoring_date_year');
            $table->string('scoring_date_month');
            $table->string('scoring_date_day');
            $table->text('recruit_others_content');
            $table->boolean('is_insert_last_three_years_fresh_recruit_retire')->nullable();
            $table->string('last_year_2');
            $table->boolean('is_last_one_year_recruit_score_2');
            $table->string('last_one_year_men');
            $table->string('last_one_year_women');
            $table->boolean('is_last_two_year_recruit_score_2');
            $table->string('last_two_year_men');
            $table->string('last_two_year_women');
            $table->boolean('is_last_three_year_recruit_score_2');
            $table->string('last_three_year_men');
            $table->string('last_three_year_women');
            $table->text('recruit_others_content_2');
            $table->boolean('is_insert_average_year')->nullable();
            $table->string('average_year');
            $table->boolean('not_average_year');
            $table->string('scoring_date_year_2');
            $table->string('scoring_date_month_2');
            $table->string('scoring_date_day_2');
            $table->text('recruit_others_content_3');
            $table->boolean('is_insert_average_age')->nullable();
            $table->string('average_age');
            $table->string('scoring_date_year_3');
            $table->string('scoring_date_month_3');
            $table->string('scoring_date_day_3');
            $table->text('recruit_others_content_4');
            $table->boolean('is_insert_training')->nullable();
            $table->boolean('is_exist_training');
            $table->text('training_content');
            $table->boolean('is_insert_self_enhance')->nullable();
            $table->boolean('is_insert_help');
            $table->text('help_content');
            $table->boolean('is_insert_mentor')->nullable();
            $table->boolean('is_insert_regulation')->nullable();
            $table->text('regulation_content');
            $table->boolean('is_insert_career_counsel')->nullable();
            $table->boolean('is_insert_regulation_2')->nullable();
            $table->text('regulation_content_2');
            $table->boolean('is_insert_license')->nullable();
            $table->boolean('is_insert_regulation_3')->nullable();
            $table->text('regulation_content_3');
            $table->boolean('is_insert_more_work')->nullable();
            $table->text('more_work');
            $table->boolean('is_insert_average_more_work');
            $table->string('last_year_3');
            $table->text('recruit_others_content_5');
            $table->boolean('is_insert_paid_holiday')->nullable();
            $table->string('average_paid_holiday');
            $table->boolean('is_insert_average_paid_holiday');
            $table->string('last_year_4');
            $table->text('recruit_others_content_6');
            $table->boolean('is_insert_raise_holiday')->nullable();
            $table->string('woman_raise_holiday_target');
            $table->string('woman_raise_holiday_get');
            $table->boolean('is_not_score_woman_raise');
            $table->string('man_raise_holiday_target');
            $table->string('man_raise_holiday_get');
            $table->boolean('is_not_score_man_raise');
            $table->string('last_year_5');
            $table->text('recruit_others_content_7');
            $table->boolean('is_insert_wonam_leader')->nullable();
            $table->string('woman_board_ratio');
            $table->string('woman_leader_ratio');
            $table->string('scoring_date_year_4');
            $table->string('scoring_date_month_4');
            $table->string('scoring_date_day_4');
            $table->text('recruit_others_content_8');
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
        Schema::dropIfExists('recruit_info_twos');
    }
}
