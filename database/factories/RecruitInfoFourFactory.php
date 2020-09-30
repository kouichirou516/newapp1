<?php

use Faker\Generator as Faker;

$factory->define(App\Models\RecruitInfoFour::class, function (Faker $faker) {
    $data = [];
    $data["status"] = 1;;

    for ($i = 1; $i <= 48; $i++) {
      if (isset(Config::get("const.PREFECTURES")[$i])) {
        $data['job_place_' . $i] = 1;
      }
    }
    for ($i = 1; $i <= 80; $i++) {
      if (isset(Config::get("const.RECRUIT_INFO_JOB_CATEGORIES")[$i])) {
        $data['job_category_' . $i] = 1;
      }
    }

    for ($i = 1; $i <= 200; $i++) {
      if (isset(Config::get("const.RECRUIT_INFO_RECRUITMENT_DEPARTMENTS")[$i])) {
        $data['major_' . $i] = 1;
      }
    }

    for ($i = 1; $i <= 200; $i++) {
      if (isset(Config::get("const.RECRUIT_INFO_TECHNICAL_MAJORS")[$i])) {
        $data['tech_major_' . $i] = 1;
      }
    }

    $data['how_to_recruit_course'] = 1;
    $data['how_to_recruit_local'] = 1;
    $data['system_mba'] = 1;
    $data['system_year_pay'] = 1;
    $data['system_license_backup'] = 1;
    $data['system_flex'] = 1;
    $data['system_stock_option'] = 1;

    for ($i = 1; $i <= 20; $i++) {
      if (isset(Config::get("const.RECRUIT_INFO_EMPLOYMENTS")[$i])) {
        $data['employment_status_' . $i] = 1;
      }
    }

    for ($i = 1; $i <= 10; $i++) {
      if (isset(Config::get("const.APPLICATION_QUALIFICATIONS")[$i])) {
        $data['application_qualifications_' . $i] = 1;
      }
    }
    $data['application_qualifications_guraduated'] = 1;

    for ($i = 1; $i <= 5; $i++) {
      if (isset(Config::get("const.APPLICATION_QUALIFICATIONS")[$i])) {
        $data['application_guraduated_qualifications_' . $i] = 1;
      }
    }

    $data['guraduated_start_year'] = "2017";
    $data['guraduated_start_month'] = "4";
    $data['guraduated_end_year'] = "2018";
    $data['guraduated_end_month'] = "3";

    $data['others_contents'] = "補足";

    for ($i = 1; $i <= 20; $i++) {
      if (isset(Config::get("const.RECRUIT_INFO_ACTIVE_RECRUITMENT_TARGETS")[$i])) {
        $data['active_recruitment_targets_' . $i] = 1;
      }
    }

    return $data;
});
