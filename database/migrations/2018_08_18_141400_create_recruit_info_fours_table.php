<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecruitInfoFoursTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('recruit_info_fours', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('status');
            $table->integer('company_id');

            for ($i = 1; $i <= 48; $i++) {
                if (isset(Config::get("const.PREFECTURES")[$i])) {
                    $table->boolean('job_place_' . $i);
                }
            }
            for ($i = 1; $i <= 80; $i++) {
                if (isset(Config::get("const.RECRUIT_INFO_JOB_CATEGORIES")[$i])) {
                    $table->boolean('job_category_' . $i);
                }
            }

            for ($i = 1; $i <= 200; $i++) {
                if (isset(Config::get("const.RECRUIT_INFO_RECRUITMENT_DEPARTMENTS")[$i])) {
                    $table->boolean('major_' . $i);
                }
            }

            for ($i = 1; $i <= 200; $i++) {
                if (isset(Config::get("const.RECRUIT_INFO_TECHNICAL_MAJORS")[$i])) {
                    $table->boolean('tech_major_' . $i);
                }
            }

            $table->boolean('how_to_recruit_course');
            $table->boolean('how_to_recruit_local');
            $table->boolean('system_mba');
            $table->boolean('system_year_pay');
            $table->boolean('system_license_backup');
            $table->boolean('system_flex');
            $table->boolean('system_stock_option');

            for ($i = 1; $i <= 20; $i++) {
                if (isset(Config::get("const.RECRUIT_INFO_EMPLOYMENTS")[$i])) {
                    $table->boolean('employment_status_' . $i);
                }
            }

            for ($i = 1; $i <= 10; $i++) {
                if (isset(Config::get("const.APPLICATION_QUALIFICATIONS")[$i])) {
                    $table->boolean('application_qualifications_' . $i);
                }
            }
            $table->boolean('application_qualifications_guraduated')->nullable();

            for ($i = 1; $i <= 5; $i++) {
                if (isset(Config::get("const.APPLICATION_QUALIFICATIONS")[$i])) {
                    $table->boolean('application_guraduated_qualifications_' . $i);
                }
            }

            $table->string('guraduated_start_year');
            $table->string('guraduated_start_month');
            $table->string('guraduated_end_year');
            $table->string('guraduated_end_month');

            $table->text('others_contents');

            for ($i = 1; $i <= 20; $i++) {
                if (isset(Config::get("const.RECRUIT_INFO_ACTIVE_RECRUITMENT_TARGETS")[$i])) {
                    $table->boolean('active_recruitment_targets_' . $i);
                }
            }

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
        Schema::dropIfExists('recruit_info_fours');
    }
}
