<?php

namespace app\Library;

class CustomValidator extends \Illuminate\Validation\Validator
{
    public function __construct($translator, $data, $rules, $messages = [])
    {
        parent::__construct($translator, $data, $rules, $messages);

        // 暗黙の拡張に追加
        $this->implicitRules[] = 'RequiredImageIf';
        $this->implicitRules[] = 'RequiredImageIfWith';
        $this->implicitRules[] = 'RequiredIfAll';
        $this->implicitRules[] = 'RequiredIfAllWithoutAll';
        $this->implicitRules[] = 'RequiredIfAllWithoutAll2';
        $this->implicitRules[] = 'RequiredIfAndUnless';
        $this->implicitRules[] = 'RequiredUnlessZ';
        $this->implicitRules[] = 'ScheduleSelect';
    }

    public function validateAlphaCheck($attribute, $value, $parameters)
    {
        return preg_match('/^[A-Za-z 　]+$/', $value);
    }

    public function validateAlphaNumCheck($attribute, $value, $parameters)
    {
        return preg_match('/^[ 　A-Za-z\d]+$/', $value);
    }

    public function validateAlphaDashCheck($attribute, $value, $parameters)
    {
        return preg_match('/^[A-Za-z\d_-]+$/', $value);
    }

    //すべてひらがなチェック
    public function validateHiragana($attribute, $value, $parameters)
    {
        if (0 !== preg_match('/[^ぁ-んー 　]/u', $value)) {
            return false;
        }

        return true;
    }

    //すべてカタカナチェック
    public function validateKatakana($attribute, $value, $parameters)
    {
        if (0 !== preg_match('/[^ァ-ヶー 　]/u', $value)) {
            return false;
        }

        return true;
    }

    //画像未アップ時は必須チェック
    //required_image_if:model,field
    public function validateRequiredImageIf($attribute, $value, $parameters)
    {
        $data = \DB::table($parameters[0])->where('company_id', \Request::route('company')->id)->first();
        if (isset($data->{$parameters[1]}) && $data->{$parameters[1]}) { //既に入っていれば非必須
            return true;
        } else { //新規
            if (! $value) { //空ならNG
                return false;
            } else {
                return true;
            }
        }
    }

    public function validateRequiredImageIfWith($attribute, $value, $parameters)
    {
        $data = \DB::table($parameters[0])->where('company_id', \Request::route('company')->id)->first();
        if (isset($data->{$parameters[1]}) && $data->{$parameters[1]}) { //既に入っていれば非必須
            return true;
        } else { //新規
            if (! $value) { //空ならNG
                $other_fields = array_slice($parameters, 2);
                $require_flg = false;
                foreach ($other_fields as $v) {
                    if ($this->data[$v]) {
                        $require_flg = true;
                    }
                }
                if ($require_flg) {
                    return false;
                } else {
                    return true;
                }
            } else {
                return true;
            }
        }
    }

    //すべての指定フィールドと値を満たした場合必須チェック
    //required_if_all:指定フィールド1,値1,指定フィールド2,値2,...
    public function validateRequiredIfAll($attribute, $value, $parameters)
    {
        $columns = array_chunk($parameters, 2);
        //条件マッチしたものだけ返す
        $results = array_filter($columns, function ($column) {
            if (! isset($this->data[$column[0]])) {
                return true;
            }

            return $this->data[$column[0]] == $column[1];
        });

        if (count($results) != count($columns) && ! empty($results)) {
            return true;
        } else {
            if ('' != $value) {
                return true;
            }
        }

        return false;
    }

    //投稿権限チェック
    //
    public function validateRequiredRoles($attribute, $value, $parameters)
    {
        if (1 == $value && false === in_array(\Auth::user()->role, $parameters)) {
            return false;
        }

        return true;
    }

    //マルチカラム日付チェック
    public function validateMultiDate($attribute, $value, $parameters)
    {
        $year = $this->data[$parameters[0]];
        $month = $this->data[$parameters[1]];
        $zeroMonth = $month < 10 ? '0'.$month : $month;
        $day = $this->data[$parameters[2]];
        $zeroDay = $day < 10 ? '0'.$day : $day;
        $today = date('Ymd');
        if ($year && $month && $day) {
            if (checkdate($month, $day, $year) && strtotime($year.$zeroMonth.$zeroDay) <= strtotime($today)) {
                return true;
            } else {
                return false;
            }
        } elseif ($year && $month && ! $day) {
            if (strtotime($year.$zeroMonth) <= strtotime(date('Ym'))) {
                return true;
            } else {
                return false;
            }
        } elseif ($year && ! $month && ! $day) {
            if ($year <= date('Y')) {
                return true;
            } else {
                return false;
            }
        }

        return false;
    }

    //ある条件を満たす場合、指定フィールドがすべて0の場合NGチェック
    public function validateRequiredIfAllWithoutAll($attribute, $value, $parameters)
    {
        if (isset($this->data[$parameters[0]]) && $this->data[$parameters[0]] == $parameters[1]) {
            array_splice($parameters, 0, 2);
            $result = array_filter($parameters, function ($v) {
                return 0 != $this->data[$v];
            });
            if (! empty($result)) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    }

    //ある条件を満たす場合、指定フィールドがすべて0の場合NGチェック
    //採用1モデル2用
    public function validateRequiredIfAllWithoutAll2($attribute, $value, $parameters)
    {
        if (1 == $this->data['is_model_2'] && isset($this->data[$parameters[0]]) && $this->data[$parameters[0]] == $parameters[1]) {
            array_splice($parameters, 0, 2);
            $result = array_filter($parameters, function ($v) {
                return 0 != $this->data[$v];
            });
            if (! empty($result)) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    }

    //待遇データ その他用
    public function validateSaiyo1Treatment($attribute, $value, $parameters)
    {
        $columns = ['others_three_year_ninety',
            'others_average_fifteen',
            'others_paid_vacation',
            'others_all_holiday',
            'others_no_more_work',
            'others_less_than_twenty_more_work',
            'others_more_than_two_week_vacation',
            'others_raise_holiday_ninety',
            'others_raise_nursing_holiday_fifty',
            'others_woman_boss_twenty',
            'others_woman_board_member',
            'others_remote_work',
            'others_no_moving',
            'others_oversea_work',
            'others_using_english',
            'others_more_than_thirty_fresh_worker',
            'others_thirty_years_boss',
            'others_new_ring',
            'others_side_work',
            'others_rent_money',
            'others_get_license',
            'others_family_money',
            'others_flexible_change_division',
            'others_variable_division',
            'others_help_startup', ];
        $results = array_filter($columns, function ($cplumn) {
            return 1 == $this->data[$cplumn];
        });
        if (count($results) > 5) {
            return false;
        }

        return true;
    }

    //モデル2 待遇データ その他用
    public function validateSaiyo1Treatment2($attribute, $value, $parameters)
    {
        $columns = ['others_three_year_ninety_2',
            'others_average_fifteen_2',
            'others_paid_vacation_2',
            'others_all_holiday_2',
            'others_no_more_work_2',
            'others_less_than_twenty_more_work_2',
            'others_more_than_two_week_vacation_2',
            'others_raise_holiday_ninety_2',
            'others_raise_nursing_holiday_fifty_2',
            'others_woman_boss_twenty_2',
            'others_woman_board_member_2',
            'others_remote_work_2',
            'others_no_moving_2',
            'others_oversea_work_2',
            'others_using_english_2',
            'others_more_than_thirty_fresh_worker_2',
            'others_thirty_years_boss_2',
            'others_new_ring_2',
            'others_side_work_2',
            'others_rent_money_2',
            'others_get_license_2',
            'others_family_money_2',
            'others_flexible_change_division_2',
            'others_variable_division_2',
            'others_help_startup_2', ];
        $results = array_filter($columns, function ($cplumn) {
            return 1 == $this->data[$cplumn];
        });
        if (count($results) > 5) {
            return false;
        }

        return true;
    }

    //required_ifとrequired_unless条件の組み合わせ
    public function validateRequiredIfAndUnless($attribute, $value, $parameters)
    {
        if ($this->data[$parameters[0]] == $parameters[1] && $this->data[$parameters[2]] != $parameters[3]) {
            if ($value) {
                return true;
            } else {
                return false;
            }
        }

        return true;
    }

    //勤務地チェック どれか一つチェック必須
    public function validateJobPlace($attribute, $value, $parameters)
    {
        $columns = [];
        for ($i = 1; $i <= 48; ++$i) {
            if (isset(\Config::get('const.PREFECTURES')[$i])) {
                $columns[] = 'job_place_'.$i;
            }
        }

        $results = array_filter($columns, function ($column) {
            return 1 == $this->data[$column];
        });
        if (count($results) >= 1) {
            return true;
        }

        return false;
    }

    //採用予定学科 どれか一つチェック必須
    public function validateMajorCheck($attribute, $value, $parameters)
    {
        $columns = [];
        for ($i = 1; $i <= 200; ++$i) {
            if (isset(\Config::get('const.RECRUIT_INFO_RECRUITMENT_DEPARTMENTS')[$i])) {
                $columns[] = 'major_'.$i;
            }
        }

        $results = array_filter($columns, function ($column) {
            return 1 == $this->data[$column];
        });
        if (count($results) >= 1) {
            return true;
        }

        return false;
    }

    //雇用形態 どれか一つチェック必須
    public function validateEmploymentStatus($attribute, $value, $parameters)
    {
        $columns = [];
        for ($i = 1; $i <= 20; ++$i) {
            if (isset(\Config::get('const.RECRUIT_INFO_EMPLOYMENTS')[$i])) {
                $columns[] = 'employment_status_'.$i;
            }
        }

        $results = array_filter($columns, function ($column) {
            return 1 == $this->data[$column];
        });
        if (count($results) >= 1) {
            return true;
        }

        return false;
    }

    //応募資格 どれか一つチェック必須
    public function validateApplicationQualifications($attribute, $value, $parameters)
    {
        $columns = [];
        for ($i = 1; $i <= 10; ++$i) {
            if (isset(\Config::get('const.APPLICATION_QUALIFICATIONS')[$i])) {
                $columns[] = 'application_qualifications_'.$i;
            }
        }

        $results = array_filter($columns, function ($column) {
            return 1 == $this->data[$column];
        });
        if (count($results) >= 1) {
            return true;
        }

        return false;
    }

    public function validateDemicalCheck($attribute, $value, $parameters)
    {
        if ('.' == mb_substr($value, -1)) {
            return false;
        }
        $valueSlice = explode('.', (float) $value);
        if (1 == count($valueSlice)) {//小数なし
            return true;
        } elseif (count($valueSlice) > 2) {
            return false;
        }
        if (strlen($valueSlice[1]) <= $parameters[0]) {
            return true;
        }

        return false;
    }

    public function validateDemicalBetween($attribute, $value, $parameters)
    {
        if ($value >= $parameters[0] && $value <= $parameters[1]) {
            return true;
        }

        return false;
    }

    public function validateFewTarget($attribute, $value, $parameters)
    {
        if ($value > $this->data[$parameters[0]]) {
            return false;
        }

        return true;
    }

    public function validateTargetInputed($attribute, $value, $parameters)
    {
        $results = array_filter($parameters, function ($val) {
            return isset($this->data[$val]) && $this->data[$val] ? false : true;
        });
        if ($value && count($results) > 0) {
            return false;
        }

        return true;
    }

    public function validateUnless($attribute, $value, $parameters)
    {
        if (! $this->data[$parameters[0]] && $value) {
            return false;
        }

        return true;
    }

    public function validateGuraduatedTerm($attribute, $value, $parameters)
    {
        $start_month = $this->data['guraduated_start_month'] < 10 ? '0'.$this->data['guraduated_start_month'] : $this->data['guraduated_start_month'];
        $end_month = $this->data['guraduated_end_month'] < 10 ? '0'.$this->data['guraduated_end_month'] : $this->data['guraduated_end_month'];
        $start = $this->data['guraduated_start_year'].$start_month;
        $end = $this->data['guraduated_end_year'].$end_month;
        if ($start > '202003' || $end > '202003') {
            return false;
        }
        if ($start < '201104' || $end < '201104') {
            return false;
        }
        if ($start >= $end) {
            return false;
        }

        return true;
    }

    public function validateCheckDateValid($attribute, $value, $parameters)
    {
        list($Y, $m, $d) = explode('-', $value);
        if (true === checkdate($m, $d, $Y)) {
            return true;
        } else {
            return false;
        }
    }

    public function validateCheckBeforeSeminarDate($attribute, $value, $parameters)
    {
        if (isset($this->data['seminar_date']) && isset($this->data['start_time'])) {
            $seminar_date = $this->data['seminar_date'].' '.$this->data['start_time'];
            list($Y, $m, $d) = explode('-', $value);
            if (true === checkdate($m, $d, $Y)) {
                if (strtotime($seminar_date) >= strtotime($value.' '.$this->data[$parameters[0]])) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;
    }

    public function validateCheckBeforeSeminarDateOnly($attribute, $value, $parameters)
    {
        if (isset($this->data['seminar_date']) && isset($this->data['start_time'])) {
            $seminar_date = $this->data['seminar_date'];
            list($Y, $m, $d) = explode('-', $value);
            if (true === checkdate($m, $d, $Y)) {
                if (strtotime($seminar_date) >= strtotime($value)) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }

        return true;
    }

    public function validateCheckBeforeOpenDate($attribute, $value, $parameters)
    {
        $company = \DB::table('companies')->find(\Request::route('company')->id);
        $open_date = $company->open_date;
        if (strtotime($open_date) <= strtotime($value)) {
            return true;
        } else {
            return false;
        }
    }

    public function validateCheckBeforeCancelDate($attribute, $value, $parameters)
    {
        if ('' == ! $this->data['cancel_date'] && '' == ! $this->data['cancel_time']) {
            if (isset($this->data['cancel_date']) && isset($this->data['cancel_time'])) {
                $seminar_date = $this->data['cancel_date'].' '.$this->data['cancel_time'];
                list($Y, $m, $d) = explode('-', $value);
                if (true === checkdate($m, $d, $Y)) {
                    if (strtotime($seminar_date) >= strtotime($value.' '.$this->data[$parameters[0]])) {
                        return true;
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    public function validateCompanyUnique($attribute, $value, $parameters)
    {
        if (\Request::route('schedule')) {
            $result = \DB::table('genkou_setsumeikai_details')->whereNotIn('id', [\Request::route('schedule')->id])->where('company_id', \Request::route('company')->id)->where('code', $value)->first();
            if ($result) {
                return false;
            }
        } else {
            $result = \DB::table('genkou_setsumeikai_details')->where('company_id', \Request::route('company')->id)->where('code', strtoupper($value))->first();
            if ($result) {
                return false;
            }
        }

        return true;
    }

    public function validateDmschoolgakkakeitouchk($attribute, $value, $parameters)
    {
        $count = 0;
        if (isset($this->data['gakkakeitou_0_keys'])) {
            $count += count($this->data['gakkakeitou_0_keys']);
        }
        if (isset($this->data['gakkakeitou_1_keys'])) {
            $count += count($this->data['gakkakeitou_1_keys']);
        }
        if (isset($this->data['gakkakeitou_2_keys'])) {
            $count += count($this->data['gakkakeitou_2_keys']);
        }
        if (isset($this->data['gakkakeitou_3_keys'])) {
            $count += count($this->data['gakkakeitou_3_keys']);
        }
        if (isset($this->data['gakkakeitou_4_keys'])) {
            $count += count($this->data['gakkakeitou_4_keys']);
        }
        if ($count > 0) {
            return true;
        }

        return false;
    }

    public function validateCompanyDmschoolUnique($attribute, $value, $parameters)
    {
        return $this->validateCompanyDmUnique('dm_schools', 'school', $attribute, $value, $parameters);
    }

    public function validateCompanyDmareaUnique($attribute, $value, $parameters)
    {
        return $this->validateCompanyDmUnique('dm_areas', 'area', $attribute, $value, $parameters);
    }

    public function validateCompanyDmtempUnique($attribute, $value, $parameters)
    {
        return $this->validateCompanyDmUnique('dm_temps', 'temp', $attribute, $value, $parameters);
    }

    public function validateCompanyDmdetailUnique($attribute, $value, $parameters)
    {
        return $this->validateCompanyDmUnique('dm_details', 'dm_detail', $attribute, $value, $parameters);
    }

    private function validateCompanyDmUnique($db_name, $type, $attribute, $value, $parameters)
    {
        if (\Request::route($type)) {
            $result = \DB::table($db_name)->whereNotIn('id', [\Request::route($type)->id])->where('company_id', \Request::route('company')->id)->where('name', $value)->first();
            if ($result) {
                return false;
            }
        } else {
            $result = \DB::table($db_name)->where('company_id', \Request::route('company')->id)->where('name', $value)->first();
            if ($result) {
                return false;
            }
        }

        return true;
    }

    public function validateBeforeTime($attribute, $value, $parameters)
    {
        if (strtotime($value) < strtotime($this->data[$parameters[0]])) {
            return true;
        }

        return false;
    }

    public function validateAfterTime($attribute, $value, $parameters)
    {
        if (strtotime($value) > strtotime($this->data[$parameters[0]])) {
            return true;
        }

        return false;
    }

    public function validateRequiredUnlessZ($attribute, $value, $parameters)
    {
        if (isset($this->data['code'])) {
            if ('Z' == substr($this->data['code'], 0, 1) || 'z' == substr($this->data['code'], 0, 1)) {
                return true;
            } else {
                if ('' !== $value) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    public function validateRequiredUnlessZWith($attribute, $value, $parameters)
    {
        if (isset($this->data['code'])) {
            if ('Z' == substr($this->data['code'], 0, 1) || 'z' == substr($this->data['code'], 0, 1)) {
                if ('' !== $this->data[$parameters[0]] && '' === $value) {
                    return false;
                }

                return true;
            } else {
                if ('' !== $value) {
                    return true;
                } else {
                    return false;
                }
            }
        }

        return true;
    }

    public function validateExtCheck($attribute, $value, $parameters)
    {
        if (pathinfo($value->getClientOriginalName(), PATHINFO_EXTENSION) == $parameters[0]) {
            return true;
        }

        return false;
    }

    public function validateColormodeCheck($attribute, $value, $parameters)
    {
        $colormode = getimagesize($value)['channels'];
        if (4 == $colormode) {
            return false;
        } else {
            return true;
        }
    }

    public function validateSetsumeikaiMax($attribute, $value, $parameters)
    {
        $count = 0;
        if (isset($this->data['genkou_setsumeikai_details1'])) {
            $count = $count + count($this->data['genkou_setsumeikai_details1']);
        }
        if (isset($this->data['genkou_setsumeikai_details2'])) {
            $count = $count + count($this->data['genkou_setsumeikai_details2']);
        }
        if (isset($this->data['genkou_setsumeikai_details3'])) {
            $count = $count + count($this->data['genkou_setsumeikai_details3']);
        }
        if (isset($this->data['genkou_setsumeikai_details4'])) {
            $count = $count + count($this->data['genkou_setsumeikai_details4']);
        }
        if (isset($this->data['genkou_setsumeikai_details5'])) {
            $count = $count + count($this->data['genkou_setsumeikai_details5']);
        }
        if ($count > 15) {
            return false;
        }

        return true;
    }

    public function validateRequiredLastYear5($attribute, $value, $parameters)
    {
        if ($this->data['is_insert_raise_holiday']) {
            if ($this->data['is_not_score_woman_raise'] && $this->data['is_not_score_man_raise']) {
                return true;
            } else {
                if (! $value) {
                    return false;
                } else {
                    return true;
                }
            }
        }

        return true;
    }

    public function validateCheckByte($attribute, $value, $parameters)
    {
        $byte = strlen(bin2hex($value)) / 2;
        if ($byte <= $parameters[0]) {
            return true;
        }

        return false;
    }

    public function validateRequiredApplicationQualificationsField($attribute, $value, $parameters)
    {
        if (1 == $value) {
            if (isset($this->data['application_qualifications_'.$parameters[0]]) && 1 == $this->data['application_qualifications_'.$parameters[0]] ||
                isset($this->data['application_guraduated_qualifications_'.$parameters[0]]) && 1 == $this->data['application_guraduated_qualifications_'.$parameters[0]]) {
                return true;
            }

            return false;
        }

        return true;
    }

    public function validateFromSchoolMax($attribute, $value, $parameters)
    {
        $arr = explode(';', $value);
        if (count($arr) > $parameters[0]) {
            return false;
        }
        if (count($arr) > 0) {
            $error = false;
            foreach ($arr as $v) {
                $school = explode(':', $v);
                if (0 == count($school) || \Config::get('const_school.FROM_SCHOOLS')[$school[0]] != $school[1]) {
                    $error = true;
                    break;
                }
            }
            if ($error) {
                return false;
            }
        }

        return true;
    }

    public function validateMaxByte($attribute, $value, $parameters)
    {
        $byte = mb_strwidth($value);
        if ($byte <= $parameters[0]) {
            return true;
        }

        return false;
    }

    public function validateScheduleSelect($attribute, $value, $parameters)
    {
        $count = 0;
        if (isset($this->data['genkou_setsumeikai_details1'])) {
            $count += count($this->data['genkou_setsumeikai_details1']);
        }
        if (isset($this->data['genkou_setsumeikai_details2'])) {
            $count += count($this->data['genkou_setsumeikai_details2']);
        }
        if (isset($this->data['genkou_setsumeikai_details3'])) {
            $count += count($this->data['genkou_setsumeikai_details3']);
        }
        if (isset($this->data['genkou_setsumeikai_details4'])) {
            $count += count($this->data['genkou_setsumeikai_details4']);
        }
        if (isset($this->data['genkou_setsumeikai_details5'])) {
            $count += count($this->data['genkou_setsumeikai_details5']);
        }
        \Debugbar::debug($count);
        if ($count > 15) {
            return false;
        }

        return true;
    }

    public function validateOridtmp($attribute, $value, $parameters)
    {
        $dm_temp = \DB::table('dm_temps')->find($value);
        if ($dm_temp->orid_id) {
            return true;
        }
        return false;
    }

    public function validateRobotsusu($attribute, $value, $parameters)
    {
        if ($value <= $this->data['robo_tsusu']) {
            return true;
        }

        return false;
    }

    // オート差分用
    public function validateRobotsusu2($attribute, $value, $parameters)
    {
        if ($value > $this->data['robo_tsusu']) {
            return true;
        }

        return false;
    }
}
