import $ from 'jquery'
import _ from 'lodash'

import base from './recruit_info_two/base'

window.recruitInfoTwo = _.merge(base, {
  mounted: function () {
    $(window).on('beforeunload', () => {return 'このページから移動しますか？入力したデータは保存されません。'})
    this.is_last_one_year_recruit_score = ~~(this.is_last_one_year_recruit_score == 1)
    this.is_last_two_year_recruit_score = ~~(this.is_last_two_year_recruit_score == 1)
    this.is_last_three_year_recruit_score = ~~(this.is_last_three_year_recruit_score == 1)
    this.is_last_one_year_recruit_score_2 = ~~(this.is_last_one_year_recruit_score_2 == 1)
    this.is_last_two_year_recruit_score_2 = ~~(this.is_last_two_year_recruit_score_2 == 1)
    this.is_last_three_year_recruit_score_2 = ~~(this.is_last_three_year_recruit_score_2 == 1)
    this.is_insert_average_more_work = ~~(this.is_insert_average_more_work == 1)
    this.not_average_year = ~~(this.not_average_year == 1)
    this.is_insert_average_paid_holiday = ~~(this.is_insert_average_paid_holiday == 1)
    this.is_not_score_woman_raise = ~~(this.is_not_score_woman_raise == 1)
    this.is_not_score_man_raise = ~~(this.is_not_score_man_raise == 1)
  },
  
  computed: {
    block1_valid: function() {
      if(this.is_insert_last_three_years_recruit_retire == 0 && this.is_insert_last_three_years_fresh_recruit_retire == 0 && this.is_insert_average_year == 0) {
        return false
      }
      return true
    },
    block2_valid: function() {
      if(this.is_insert_training == 0 && this.is_insert_self_enhance == 0 && this.is_insert_mentor == 0 && this.is_insert_career_counsel == 0 && this.is_insert_license == 0) {
        return false
      }
      return true
    },
    block3_valid: function() {
      if(this.is_insert_more_work ==0 && this.is_insert_paid_holiday == 0 && this.is_insert_raise_holiday == 0 && this.is_insert_wonam_leader == 0) {
        return false
      }
      return true
    },
    
    //募集・採用に関する状況
    //過去3年間の新卒採用者数・離職者数
    requiredCountGenko1() {
      if (this.is_insert_last_three_years_recruit_retire && this.errors.is_insert_last_three_years_recruit_retire_error.length == 0) return 1
      return 0
    },
    //前年度
    requiredCountGenko2() {
      if (this.last_year && this.errors.last_year_error.length == 0) return 1
      return 0
    },
    requiredCountGenko3() {
      if (this.last_one_year_recruit_score && this.errors.last_one_year_recruit_score_error.length == 0) return 1
      return 0
    },
    requiredCountGenko4() {
      if (this.last_one_year_retire_score && this.errors.last_one_year_retire_score_error.length == 0) return 1
      return 0
    },
    //2年前
    requiredCountGenko5() {
      if (this.last_two_year_recruit_score && this.errors.last_two_year_recruit_score_error.length == 0) return 1
      return 0
    },
    requiredCountGenko6() {
      if (this.last_two_year_retire_score && this.errors.last_two_year_retire_score_error.length == 0) return 1
      return 0
    },
    //3年前
    requiredCountGenko7() {
      if (this.last_three_year_recruit_score && this.errors.last_three_year_recruit_score_error.length == 0) return 1
      return 0
    },
    requiredCountGenko8() {
      if (this.last_three_year_retire_score && this.errors.last_three_year_retire_score_error.length == 0) return 1
      return 0
    },
    //実績日
    requiredCountGenko9() {
      if (this.scoring_date_year && this.errors.scoring_date_year_error.length == 0) return 1
      return 0
    },
    requiredCountGenko10() {
      if (this.scoring_date_month && this.errors.scoring_date_month_error.length == 0) return 1
      return 0
    },
    requiredCountGenko11() {
      if (this.scoring_date_day && this.errors.scoring_date_day_error.length == 0) return 1
      return 0
    },
    
    //過去3年間の男女別新卒採用者数を入力する
    requiredCountGenko12() {
      if (this.is_insert_last_three_years_fresh_recruit_retire && this.errors.is_insert_last_three_years_fresh_recruit_retire_error.length == 0) return 1
      return 0
    },
    //前年度
    requiredCountGenko13() {
      if (this.last_year_2 && this.errors.last_year_2_error.length == 0) return 1
      return 0
    },
    requiredCountGenko14() {
      if (this.last_one_year_men && this.errors.last_one_year_men_error.length == 0) return 1
      return 0
    },
    requiredCountGenko15() {
      if (this.last_one_year_women && this.errors.last_one_year_women_error.length == 0) return 1
      return 0
    },
    //2年前
    requiredCountGenko16() {
      if (this.last_two_year_men && this.errors.last_two_year_men_error.length == 0) return 1
      return 0
    },
    requiredCountGenko17() {
      if (this.last_two_year_women && this.errors.last_two_year_women_error.length == 0) return 1
      return 0
    },
    //3年前
    requiredCountGenko18() {
      if (this.last_three_year_men && this.errors.last_three_year_men_error.length == 0) return 1
      return 0
    },
    requiredCountGenko19() {
      if (this.last_three_year_women && this.errors.last_three_year_women_error.length == 0) return 1
      return 0
    },
    
    //平均勤務年数を入力する
    requiredCountGenko20() {
      if (this.is_insert_average_year && this.errors.is_insert_average_year_error.length == 0) return 1
      return 0
    },
    
    //平均年齢（参考入力欄）を入力する
    requiredCountGenko57() {
      if (this.is_insert_average_age && this.errors.is_insert_average_age_error.length == 0) return 1
      return 0
    },
    
    //平均勤続年数
    requiredCountGenko21() {
      if (this.average_year && this.errors.average_year_error.length == 0) return 1
      return 0
    },
    //実績日
    requiredCountGenko22() {
      if (this.scoring_date_year_2 && this.errors.scoring_date_year_2_error.length == 0) return 1
      return 0
    },
    requiredCountGenko23() {
      if (this.scoring_date_month_2 && this.errors.scoring_date_month_2_error.length == 0) return 1
      return 0
    },
    requiredCountGenko24() {
      if (this.scoring_date_day_2 && this.errors.scoring_date_day_2_error.length == 0) return 1
      return 0
    },
    
    //平均年齢（参考入力欄）を入力する
    //平均年齢
    requiredCountGenko25() {
      if (this.average_age && this.errors.average_age_error.length == 0) return 1
      return 0
    },
    //実績日
    requiredCountGenko26() {
      if (this.scoring_date_year_3 && this.errors.scoring_date_year_3_error.length == 0) return 1
      return 0
  
      if (this.scoring_date_month_3 && this.errors.scoring_date_month_3_error.length == 0) return 1
      return 0
    },
    requiredCountGenko28() {
      if (this.scoring_date_day_3 && this.errors.scoring_date_day_3_error.length == 0) return 1
      return 0
    },
    
    //職業能力の開発・向上に関する状況
    //研修
    //研修を入力する
    requiredCountGenko29() {
      if (this.is_insert_training && this.errors.is_insert_training_error.length == 0) return 1
      return 0
    },
    //研修有無
    requiredCountGenko30() {
      if (this.is_exist_training && this.errors.is_exist_training_error.length == 0) return 1
      return 0
    },
    //自己啓発支援
    //自己啓発支援を入力する
    requiredCountGenko31() {
      if (this.is_insert_self_enhance && this.errors.is_insert_self_enhance_error.length == 0) return 1
      return 0
    },
    //支援有無
    requiredCountGenko32() {
      if (this.is_insert_help && this.errors.is_insert_help_error.length == 0) return 1
      return 0
    },
    //メンター制度
    //メンター制度を入力する
    requiredCountGenko33() {
      if (this.is_insert_mentor && this.errors.is_insert_mentor_error.length == 0) return 1
      return 0
    },
    //メンター制度有無
    requiredCountGenko34() {
      if (this.is_insert_regulation && this.errors.is_insert_regulation_error.length == 0) return 1
      return 0
    },
    //キャリアコンサルティング制度
    //キャリアコンサルティング制度を入力する
    requiredCountGenko35() {
      if (this.is_insert_career_counsel && this.errors.is_insert_career_counsel_error.length == 0) return 1
      return 0
    },
    //キャリアコンサルティング制度有無
    requiredCountGenko36() {
      if (this.is_insert_regulation_2 && this.errors.is_insert_regulation_2_error.length == 0) return 1
      return 0
    },
    //社内検定等の制度
    //社内検定等の制度を入力する
    requiredCountGenko37() {
      if (this.is_insert_license && this.errors.is_insert_license_error.length == 0) return 1
      return 0
    },
    //社内検定等の制度有無
    requiredCountGenko38() {
      if (this.is_insert_regulation_3 && this.errors.is_insert_regulation_3_error.length == 0) return 1
      return 0
    },
    
    //雇用管理に関する状況
    //月平均所定外労働時間i
    //月平均所定外労働時間を入力する
    requiredCountGenko39() {
      if (this.is_insert_more_work && this.errors.is_insert_more_work_error.length == 0) return 1
      return 0
    },
    //月平均所定外労働時間
    requiredCountGenko40() {
      if (this.more_work && this.errors.more_work_error.length == 0) return 1
      return 0
    },
    //実績年度
    requiredCountGenko41() {
      if (this.last_year_3 && this.errors.last_year_3_error.length == 0) return 1
      return 0
    },
    //有給休暇の平均取得日数を入力する
    requiredCountGenko42() {
      if (this.is_insert_paid_holiday && this.errors.is_insert_paid_holiday_error.length == 0) return 1
      return 0
    },
    //有給休暇の平均取得日数
    requiredCountGenko43() {
      if (this.average_paid_holiday && this.errors.average_paid_holiday_error.length == 0) return 1
      return 0
    },
    //実績年度
    requiredCountGenko44() {
      if (this.last_year_4 && this.errors.last_year_4_error.length == 0) return 1
      return 0
    },
    //育児休業取得者数（男女別)
    //育児休業取得者数（男女別）を入力する
    requiredCountGenko45() {
      if (this.is_insert_raise_holiday && this.errors.is_insert_raise_holiday_error.length == 0) return 1
      return 0
    },
    //女性
    requiredCountGenko46() {
      if (this.woman_raise_holiday_target && this.errors.woman_raise_holiday_target_error.length == 0) return 1
      return 0
    },
    requiredCountGenko47() {
      if (this.woman_raise_holiday_get && this.errors.woman_raise_holiday_get_error.length == 0) return 1
      return 0
    },
    //男性
    requiredCountGenko48() {
      if (this.man_raise_holiday_target && this.errors.man_raise_holiday_target_error.length == 0) return 1
      return 0
    },
    requiredCountGenko49() {
      if (this.man_raise_holiday_get && this.errors.man_raise_holiday_get_error.length == 0) return 1
      return 0
    },
    //実績年度
    requiredCountGenko50() {
      if (this.last_year_5 && this.errors.last_year_5_error.length == 0) return 1
      return 0
    },
    //役員・管理職の女性比率
    //役員・管理職の女性比率を入力する
    requiredCountGenko51() {
      if (this.is_insert_wonam_leader && this.errors.is_insert_wonam_leader_error.length == 0) return 1
      return 0
    },
    //役員の女性比率
    requiredCountGenko52() {
      if (this.woman_board_ratio && this.errors.woman_board_ratio_error.length == 0) return 1
      return 0
    },
    //管理職の女性比率
    requiredCountGenko53() {
      if (this.woman_leader_ratio && this.errors.woman_leader_ratio_error.length == 0) return 1
      return 0
    },
    //実績日
    requiredCountGenko54() {
      if (this.scoring_date_year_4 && this.errors.scoring_date_year_4_error.length == 0) return 1
      return 0
    },
    requiredCountGenko55() {
      if (this.scoring_date_month_4 && this.errors.scoring_date_month_4_error.length == 0) return 1
      return 0
    },
    requiredCountGenko56() {
      if (this.scoring_date_day_4 && this.errors.scoring_date_day_4_error.length == 0) return 1
      return 0
    },
    
    
    
    
    
    
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1, this.requiredCountGenko12, this.requiredCountGenko20,  
        this.requiredCountGenko29, this.requiredCountGenko31, this.requiredCountGenko33,  
        this.requiredCountGenko35, this.requiredCountGenko37, this.requiredCountGenko39,  
        this.requiredCountGenko42,  this.requiredCountGenko45,  this.requiredCountGenko51, this.requiredCountGenko57,  
      ]
      //過去3年間の新卒採用者数・離職者数
      if(this.is_insert_last_three_years_recruit_retire == 1){
        //前年度
        if (this.is_insert_last_three_years_recruit_retire == 1 && !this.is_last_one_year_recruit_score) {
          targetRequired.push(
            this.requiredCountGenko3, this.requiredCountGenko4
          )
        }
        //2年前
        if (this.is_insert_last_three_years_recruit_retire == 1 && !this.is_last_two_year_recruit_score) {
          targetRequired.push(
            this.requiredCountGenko5, this.requiredCountGenko6
          )
        }
        //3年前
        if (this.is_insert_last_three_years_recruit_retire == 1 && !this.is_last_three_year_recruit_score) {
          targetRequired.push(
            this.requiredCountGenko7, this.requiredCountGenko8
          )
        }
      }
      
      
      //過去3年間の男女別新卒採用者数を入力する
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1) {
        //前年度
        if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && !this.is_last_one_year_recruit_score_2) {
          targetRequired.push(
            this.requiredCountGenko14, this.requiredCountGenko15
          )
        }
        //2年前
        if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && !this.is_last_two_year_recruit_score_2) {
          targetRequired.push(
            this.requiredCountGenko16, this.requiredCountGenko17
          )
        }
        //3年前
        if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && !this.is_last_three_year_recruit_score_2) {
          targetRequired.push(
            this.requiredCountGenko18, this.requiredCountGenko19
          )
        }
      }

      
      //平均年齢を入力する
      if (this.is_insert_average_age == 1) {
        targetRequired.push(
          this.requiredCountGenko25, this.requiredCountGenko26, 
          
        )
      }
      
      //平均勤務年数を入力する
      if (this.is_insert_average_year == 1 && !this.not_average_year) {
        targetRequired.push(
          this.requiredCountGenko21, this.requiredCountGenko22
        )
      }
      
      //研修を入力する
      if (this.is_insert_training == 1) {
        targetRequired.push(
          this.requiredCountGenko30
        )
      }
      //自己啓発支援を入力する
      if (this.is_insert_self_enhance == 1) {
        targetRequired.push(
          this.requiredCountGenko32
        )
      }
      //メンター制度を入力する
      if (this.is_insert_mentor == 1) {
        targetRequired.push(
          this.requiredCountGenko34
        )
      }
      //キャリアコンサルティング制度を入力する
      if (this.is_insert_career_counsel == 1) {
        targetRequired.push(
          this.requiredCountGenko36
        )
      }
      //社内検定等の制度を入力する
      if (this.is_insert_license == 1) {
        targetRequired.push(
          this.requiredCountGenko38
        )
      }
      //月平均所定外労働時間を入力する
      if (this.is_insert_more_work == 1 && !this.is_insert_average_more_work) {
        targetRequired.push(
          this.requiredCountGenko40, this.requiredCountGenko41
        )
      }
      //有給休暇の平均取得日数を入力する
      if (this.is_insert_paid_holiday == 1 && !this.is_insert_average_paid_holiday) {
        targetRequired.push(
          this.requiredCountGenko43, this.requiredCountGenko44
        )
      }
      
      //女性
      if (this.is_insert_raise_holiday == 1 && !this.is_not_score_woman_raise) {
        targetRequired.push(
          this.requiredCountGenko46, this.requiredCountGenko47
        )
      }
      //男性
      if (this.is_insert_raise_holiday == 1 && !this.is_not_score_man_raise) {
        targetRequired.push(
          this.requiredCountGenko48, this.requiredCountGenko49
        )
      }
      //実績年度
      if (this.is_insert_raise_holiday == 1) {
        if (!this.is_not_score_woman_raise || !this.is_not_score_man_raise) {
          targetRequired.push(
            this.requiredCountGenko50
          )
        }
      }
      
      //役員・管理職の女性比率を入力する
      if (this.is_insert_wonam_leader == 1) {
        targetRequired.push(
          this.requiredCountGenko52, this.requiredCountGenko53, this.requiredCountGenko54,
        )
      }
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
})