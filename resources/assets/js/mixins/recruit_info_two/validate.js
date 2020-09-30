import Validation from '../../validation'
import { commonValid } from './common'
import _ from 'lodash'

const validation = new Validation()

export default function() {
  return {
    is_block1_valid: () => {
      this.errors.is_block1_valid_error = []
      if(this.is_insert_last_three_years_recruit_retire == 0 && this.is_insert_last_three_years_fresh_recruit_retire == 0 && this.is_insert_average_year == 0)  this.errors.is_block1_valid_error.push('必須項目')
    },
    is_block2_valid: () => {
      this.errors.is_block2_valid_error = []
      if(this.is_insert_training == 0 && this.is_insert_self_enhance == 0 && this.is_insert_mentor == 0 && this.is_insert_career_counsel == 0 && this.is_insert_license == 0)  this.errors.is_block2_valid_error.push('必須項目')
    },
    is_block3_valid: () => {
      this.errors.is_block3_valid_error = []
      if(this.is_insert_more_work ==0 && this.is_insert_paid_holiday == 0 && this.is_insert_raise_holiday == 0 && this.is_insert_wonam_leader == 0)  this.errors.is_block3_valid_error.push('必須項目')
    },
    //過去3年間の新卒採用者数・離職者数
    //年度
    is_insert_last_three_years_recruit_retire: () => {
      this.errors.is_insert_last_three_years_recruit_retire_error = []
      if (this.is_insert_last_three_years_recruit_retire == '') this.errors.is_insert_last_three_years_recruit_retire_error.push('必須項目です。')
    },
    last_year: () => {
      this.errors.last_year_error = []
      if (this.is_insert_last_three_years_recruit_retire == 1 && this.last_year == 0) this.errors.last_year_error.push('必須項目です。')
    },
    //前年度採用者数
    last_one_year_recruit_score: () => {
      commonValid.recruit_score.apply(this, ['last_one_year_recruit_score', 'last_one_year_retire_score', (this.is_insert_last_three_years_recruit_retire == 1 && this.is_last_one_year_recruit_score == false)])
    },
    last_one_year_retire_score: () => {
      commonValid.retire_score.apply(this, ['last_one_year_retire_score', 'last_one_year_recruit_score', (this.is_insert_last_three_years_recruit_retire == 1 && this.is_last_one_year_recruit_score == false)])
    },
    is_last_one_year_recruit_score: () => {
      const target = this.is_last_one_year_recruit_score
      if (target == true) {
        this.errors.last_one_year_recruit_score_error = []
        this.errors.last_one_year_retire_score_error = []
      }
    },
    //2年前採用者数
    last_two_year_recruit_score: () => {
      commonValid.recruit_score.apply(this, ['last_two_year_recruit_score', 'last_two_year_retire_score', (this.is_insert_last_three_years_recruit_retire == 1 && this.is_last_two_year_recruit_score == false)])
    },
    last_two_year_retire_score: () => {
      commonValid.retire_score.apply(this, ['last_two_year_retire_score', 'last_two_year_recruit_score', (this.is_insert_last_three_years_recruit_retire == 1 && this.is_last_two_year_recruit_score == false)])
    },
    is_last_two_year_recruit_score: () => {
      const target = this.is_last_two_year_recruit_score
      if (target == true) {
        this.errors.last_two_year_recruit_score_error = []
        this.errors.last_two_year_retire_score_error = []
      }
    },
    //3年前採用者数
    last_three_year_recruit_score: () => {
      commonValid.recruit_score.apply(this, ['last_three_year_recruit_score', 'last_three_year_retire_score', (this.is_insert_last_three_years_recruit_retire == 1 && this.is_last_three_year_recruit_score == false)])
    },
    last_three_year_retire_score: () => {
      commonValid.retire_score.apply(this, ['last_three_year_retire_score', 'last_three_year_recruit_score', (this.is_insert_last_three_years_recruit_retire == 1 && this.is_last_three_year_recruit_score == false)])
    },
    is_last_three_year_recruit_score: () => {
      if (this.is_last_three_year_recruit_score) {
        this.errors.last_three_year_recruit_score_error = []
        this.errors.last_three_year_retire_score_error = []
      }
    },
    //補足
    recruit_others_content: () => {
      this.errors.recruit_others_content_error = []
      if (validation.banWords(this.recruit_others_content)) this.errors.recruit_others_content_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.recruit_others_content, 1000)) this.errors.recruit_others_content_error.push('500文字以下にしてください。')
    },

    //過去3年間の男女別新卒採用者数
    is_insert_last_three_years_fresh_recruit_retire: () => {
      this.errors.is_insert_last_three_years_fresh_recruit_retire_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == '') {
        this.errors.is_insert_last_three_years_fresh_recruit_retire_error.push('必須項目です。')
      }
    },

    //年度
    last_year_2: () => {
      this.errors.last_year_2_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1) {
        if (this.last_year_2 == 0) this.errors.last_year_2_error.push('必須項目です。')
      }
    },
    //前年度採用者数
    last_one_year_men: () => {
      const target = this.last_one_year_men
      this.errors.last_one_year_men_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && this.is_last_one_year_recruit_score_2 == false) {
        if (validation.require(target)) this.errors.last_one_year_men_error.push('必須項目です。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_one_year_men_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.last_one_year_men_error.push('正しい数値を入力してください。')
        if(this.last_one_year_men === '0' && this.last_one_year_women === '0') {
          this.errors.last_one_year_men_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }else {
          _.pull(this.errors.last_one_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
          _.pull(this.errors.last_one_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }
      }
    },
    last_one_year_women: () => {
      const target = this.last_one_year_women
      this.errors.last_one_year_women_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && this.is_last_one_year_recruit_score_2 == false) {
        if (validation.require(target)) this.errors.last_one_year_women_error.push('必須項目です。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_one_year_women_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.last_one_year_women_error.push('正しい数値を入力してください。')
        if(this.last_one_year_men === '0' && this.last_one_year_women === '0') {
          this.errors.last_one_year_women_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }else {
          _.pull(this.errors.last_one_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
          _.pull(this.errors.last_one_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }
      }
    },
    is_last_one_year_recruit_score_2: () => {
      const target = this.is_last_one_year_recruit_score_2
      if (target == true) {
        this.errors.last_one_year_men_error = []
        this.errors.last_one_year_women_error = []
      }
    },
    //2年前採用者数
    last_two_year_men: () => {
      const target = this.last_two_year_men
      this.errors.last_two_year_men_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && this.is_last_two_year_recruit_score_2 == false) {
        if (validation.require(target)) this.errors.last_two_year_men_error.push('必須項目です。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_two_year_men_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.last_two_year_men_error.push('正しい数値を入力してください。')
        if(this.last_two_year_men === '0' && this.last_two_year_women === '0') {
          this.errors.last_two_year_men_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }else {
          _.pull(this.errors.last_two_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
          _.pull(this.errors.last_two_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }
      }
    },
    last_two_year_women: () => {
      const target = this.last_two_year_women
      this.errors.last_two_year_women_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && this.is_last_two_year_recruit_score_2 == false) {
        if (validation.require(target)) this.errors.last_two_year_women_error.push('必須項目です。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_two_year_women_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.last_two_year_women_error.push('正しい数値を入力してください。')
        if(this.last_two_year_men === '0' && this.last_two_year_women === '0') {
          this.errors.last_two_year_women_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }else {
          _.pull(this.errors.last_two_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
          _.pull(this.errors.last_two_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }
      }
    },
    is_last_two_year_recruit_score_2: () => {
      const target = this.is_last_two_year_recruit_score_2
      if (target == true) {
        this.errors.last_two_year_men_error = []
        this.errors.last_two_year_women_error = []
      }
    },
    //3年前採用者数
    last_three_year_men: () => {
      const target = this.last_three_year_men
      this.errors.last_three_year_men_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && this.is_last_three_year_recruit_score_2 == false) {
        if (validation.require(target)) this.errors.last_three_year_men_error.push('必須項目です。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_three_year_men_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.last_three_year_men_error.push('正しい数値を入力してください。')
        if(this.last_three_year_men === '0' && this.last_three_year_women === '0') {
          this.errors.last_three_year_men_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }else {
          _.pull(this.errors.last_three_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
          _.pull(this.errors.last_three_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }
      }
    },
    last_three_year_women: () => {
      const target = this.last_three_year_women
      this.errors.last_three_year_women_error = []
      if (this.is_insert_last_three_years_fresh_recruit_retire == 1 && this.is_last_three_year_recruit_score_2 == false) {
        if (validation.require(target)) this.errors.last_three_year_women_error.push('必須項目です。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_three_year_women_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.last_three_year_women_error.push('正しい数値を入力してください。')
        if(this.last_three_year_men === '0' && this.last_three_year_women === '0') {
          this.errors.last_three_year_women_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }else {
          _.pull(this.errors.last_three_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
          _.pull(this.errors.last_three_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        }
      }
    },
    is_last_three_year_recruit_score_2: () => {
      const target = this.is_last_three_year_recruit_score_2
      if (target == true) {
        this.errors.last_three_year_men_error = []
        this.errors.last_three_year_women_error = []
      }
    },

    //実績日
    scoring_date_year: () => commonValid.scoring_date_day.apply(this, ['', (this.is_insert_last_three_years_recruit_retire == 1)]),
    scoring_date_month: () => commonValid.scoring_date_day.apply(this, ['', (this.is_insert_last_three_years_recruit_retire == 1)]),
    scoring_date_day: () => commonValid.scoring_date_day.apply(this, ['', (this.is_insert_last_three_years_recruit_retire == 1)]),

    //補足
    recruit_others_content_2: () => {
      const target = this.recruit_others_content_2
      this.errors.recruit_others_content_2_error = []
      if (validation.banWords(this.recruit_others_content_2)) this.errors.recruit_others_content_2_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.recruit_others_content_2_error.push('500文字以下にしてください。')
    },

    //平均勤務年数
    is_insert_average_year: () => {
      this.errors.is_insert_average_year_error = []
      if (this.is_insert_average_year == '') {
        this.errors.is_insert_average_year_error.push('必須項目です。')
      }
    },

    average_year: () => {
      commonValid.inputNumeric.apply(this, ['average_year', (this.is_insert_average_year == 1 && this.not_average_year == false)])
    },
    not_average_year: () => {
      const target = this.not_average_year
      if (target == true) {
        this.errors.average_year_error = []
        this.errors.scoring_date_year_2_error = []
      }
    },
    //実績日
    scoring_date_year_2: () => {
      commonValid.scoring_date_day.apply(this, ['_2', (this.is_insert_average_year == 1 && this.not_average_year == false)])
    },
    scoring_date_month_2: () => {
      commonValid.scoring_date_day.apply(this, ['_2', (this.is_insert_average_year == 1 && this.not_average_year == false)])
    },
    scoring_date_day_2: () => {
      commonValid.scoring_date_day.apply(this, ['_2', (this.is_insert_average_year == 1 && this.not_average_year == false)])
    },

    recruit_others_content_3: () => {
      const target = this.recruit_others_content_3
      this.errors.recruit_others_content_3_error = []
      if (validation.banWords(this.recruit_others_content_3)) this.errors.recruit_others_content_3_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.recruit_others_content_3_error.push('500文字以下にしてください。')
    },

    //平均年齢（参考入力欄）
    is_insert_average_age: () => {
      this.errors.is_insert_average_age_error =[]
      if (this.is_insert_average_age == '') {
        this.errors.is_insert_average_age_error.push('必須項目です。')
      }
    },
    average_age: () => {
      commonValid.inputNumeric.apply(this, ['average_age', (this.is_insert_average_age == 1)])
    },
    recruit_others_content_4: () => {
      const target = this.recruit_others_content_4
      this.errors.recruit_others_content_4_error = []
      if (validation.banWords(this.recruit_others_content_4)) this.errors.recruit_others_content_4_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.recruit_others_content_4_error.push('500文字以下にしてください。')
    },
    //実績日
    scoring_date_year_3: () => {
      commonValid.scoring_date_day.apply(this, ['_3', (this.is_insert_average_age == 1)])
    },
    scoring_date_month_3: () => {
      commonValid.scoring_date_day.apply(this, ['_3', (this.is_insert_average_age == 1)])
    },
    scoring_date_day_3: () => {
      commonValid.scoring_date_day.apply(this, ['_3', (this.is_insert_average_age == 1)])
    },

    //研修
    is_insert_training: () => {
      this.errors.is_insert_training_error = []
      if (this.is_insert_training == '') {
        this.errors.is_insert_training_error.push('必須項目です。')
      }
    },

    training_content: () => {
      const target = this.training_content
      this.errors.training_content_error = []
      if (validation.banWords(this.training_content)) this.errors.training_content_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.training_content_error.push('500文字以下にしてください。')
      if (this.is_exist_training == true) {
        if (validation.require(target)) this.errors.training_content_error.push('必須項目です。')
      }
    },
    is_exist_training: () => {
      this.errors.is_exist_training_error = []
      if (this.is_insert_training == '1') {
        if (!this.is_exist_training || this.is_exist_training == '0') {
          this.errors.is_exist_training_error.push('必須項目です。')
        }
      }
      if (this.is_exist_training == '1') {
        if (validation.require(this.training_content)) this.errors.training_content_error.push('必須項目です。')
      } else {
        this.errors.training_content_error = []
      }
    },

    //自己啓発支援
    is_insert_self_enhance: () => {
      this.errors.is_insert_self_enhance_error = []
      if (this.is_insert_self_enhance == '') {
        this.errors.is_insert_self_enhance_error.push('必須項目です。')
      }
    },

    help_content: () => {
      const target = this.help_content
      this.errors.help_content_error = []
      if (validation.banWords(this.help_content)) this.errors.help_content_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.help_content_error.push('500文字以下にしてください。')
      if (this.is_insert_help == true) {
        if (validation.require(target)) this.errors.help_content_error.push('必須項目です。')
      }
    },
    is_insert_help: () => {
      this.errors.is_insert_help_error = []
      if (this.is_insert_self_enhance == '1') {
        if (!this.is_insert_help || this.is_insert_help == '0') {
          this.errors.is_insert_help_error.push('必須項目です。')
        }
      }
      if (this.is_insert_help == '1') {
        //if (validation.require(this.help_content)) this.errors.help_content_error.push('必須項目です。')
      } else {
        this.errors.help_content_error = []
      }
    },

    //メンター制度
    is_insert_mentor: () => {
      this.errors.is_insert_mentor_error = []
      if (this.is_insert_mentor == '') {
        this.errors.is_insert_mentor_error.push('必須項目です。')
      }
    },
    is_insert_regulation: () => {
      this.errors.is_insert_regulation_error = []
      if (this.is_insert_mentor == '1') {
        if (!this.is_insert_regulation || this.is_insert_regulation == '0') {
          this.errors.is_insert_regulation_error.push('必須項目です。')
        }
      }
    },

    regulation_content: () => {
      const target = this.regulation_content
      this.errors.regulation_content_error = []
      if (validation.banWords(this.regulation_content)) this.errors.regulation_content_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.regulation_content_error.push('500文字以下にしてください。')
    },

    //キャリアコンサルティング制度
    is_insert_career_counsel: () => {
      this.errors.is_insert_career_counsel_error = []
      if (this.is_insert_career_counsel == '') {
        this.errors.is_insert_career_counsel_error.push('必須項目です。')
      }
    },

    regulation_content_2: () => {
      const target = this.regulation_content_2
      this.errors.regulation_content_2_error = []
      if (validation.banWords(this.regulation_content_2)) this.errors.regulation_content_2_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.regulation_content_2_error.push('500文字以下にしてください。')
      if (this.is_insert_regulation_2 == true) {
        if (validation.require(target)) this.errors.regulation_content_2_error.push('必須項目です。')
      }
    },
    is_insert_regulation_2: () => {
      this.errors.is_insert_regulation_2_error = []
      if (this.is_insert_career_counsel=='1') {
        if (!this.is_insert_regulation_2 || this.is_insert_regulation_2 == '0') {
          this.errors.is_insert_regulation_2_error.push('必須項目です。')
        }
      }
      if (this.is_insert_regulation_2 == '1') {
        //if (validation.require(this.regulation_content_2)) this.errors.regulation_content_2_error.push('必須項目です。')
      } else {
        this.errors.regulation_content_2_error = []
      }
    },

    //社内検定等の制度
    is_insert_license: () => {
      this.errors.is_insert_license_error = []
      if (this.is_insert_license == '') {
        this.errors.is_insert_license_error.push('必須項目です。')
      }
    },
    regulation_content_3: () => {
      const target = this.regulation_content_3
      this.errors.regulation_content_3_error = []
      if (validation.banWords(this.regulation_content_3)) this.errors.regulation_content_3_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.regulation_content_3_error.push('500文字以下にしてください。')
      if (this.is_insert_regulation_3 == true) {
        if (validation.require(target)) this.errors.regulation_content_3_error.push('必須項目です。')
      }
    },
    is_insert_regulation_3: () => {
      this.errors.is_insert_regulation_3_error = []
      if (this.is_insert_license == '1') {
        if (!this.is_insert_regulation_3 || this.is_insert_regulation_3 == '0') {
          this.errors.is_insert_regulation_3_error.push('必須項目です。')
        }
      }
      if (this.is_insert_regulation_3 == '1') {
        //if (validation.require(this.regulation_content_3)) this.errors.regulation_content_3_error.push('必須項目です。')
      } else {
        this.errors.regulation_content_3_error = []
      }
    },

    //月平均所定外労働時間
    is_insert_more_work: () => {
      this.errors.is_insert_more_work_error = []
      if (this.is_insert_more_work == '') {
        this.errors.is_insert_more_work_error.push('必須項目です。')
      }
    },
    //実績年度
    last_year_3: () => {
      this.errors.last_year_3_error = []
      if (this.is_insert_more_work == 1 && !this.is_insert_average_more_work) {
        if (this.last_year_3 == 0) this.errors.last_year_3_error.push('必須項目です。')
      }
    },
    more_work: () => {
      commonValid.inputNumeric.apply(this, ['more_work', (this.is_insert_more_work == 1 && !this.is_insert_average_more_work)])
    },
    recruit_others_content_5: () => {
      const target = this.recruit_others_content_5
      this.errors.recruit_others_content_5_error = []
      if (validation.banWords(this.recruit_others_content_5)) this.errors.recruit_others_content_5_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.recruit_others_content_5_error.push('500文字以下にしてください。')
    },
    is_insert_average_more_work: () => {
      const target = this.is_insert_average_more_work
      if (target == true) {
        this.errors.more_work_error = []
        this.errors.last_year_3_error = []
      }
    },

    //有給休暇の平均取得日数
    is_insert_paid_holiday: () => {
      this.errors.is_insert_paid_holiday_error = []
      if (this.is_insert_paid_holiday == '') {
        this.errors.is_insert_paid_holiday_error.push('必須項目です。')
      }
    },
    last_year_4: () => {
      this.errors.last_year_4_error = []
      if (this.is_insert_paid_holiday == 1 && !this.is_insert_average_paid_holiday) {
        if (this.last_year_4 == 0) this.errors.last_year_4_error.push('必須項目です。')
      }
    },
    average_paid_holiday: () => {
      commonValid.inputNumeric.apply(this, ['average_paid_holiday', (this.is_insert_paid_holiday == 1 && !this.is_insert_average_paid_holiday)])
    },
    recruit_others_content_6: () => {
      const target = this.recruit_others_content_6
      this.errors.recruit_others_content_6_error = []
      if (validation.banWords(this.recruit_others_content_6)) this.errors.recruit_others_content_6_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.recruit_others_content_6_error.push('500文字以下にしてください。')
    },
    is_insert_average_paid_holiday: () => {
      const target = this.is_insert_average_paid_holiday
      if (target == true) {
        this.errors.average_paid_holiday_error = []
        this.errors.last_year_4_error = []
      }
    },

    //育児休業取得者数（男女別）
    is_insert_raise_holiday: () => {
      this.errors.is_insert_raise_holiday_error = []
      if (this.is_insert_raise_holiday == '') {
        this.errors.is_insert_raise_holiday_error.push('必須項目です。')
      }
    },
    //女性育休取得対象者数
    woman_raise_holiday_target: () => {
      const target = this.woman_raise_holiday_target
      this.errors.woman_raise_holiday_target_error = []
      if (this.is_insert_raise_holiday == 1 && !this.is_not_score_woman_raise) {
        if (validation.require(target)) this.errors.woman_raise_holiday_target_error.push('必須項目です。')
        if (validation.moreLess(this.woman_raise_holiday_get, target)) this.errors.woman_raise_holiday_get_error = []
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.woman_raise_holiday_target_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.woman_raise_holiday_target_error.push('正しい数値を入力してください。')
      }
    },
    //女性育休取得者数
    woman_raise_holiday_get: () => {
      const target = this.woman_raise_holiday_get
      this.errors.woman_raise_holiday_get_error = []
      if (this.is_insert_raise_holiday == 1 && !this.is_not_score_woman_raise) {
        if (validation.require(target)) this.errors.woman_raise_holiday_get_error.push('必須項目です。')
        if (validation.moreLess(this.woman_raise_holiday_target, target)) this.errors.woman_raise_holiday_get_error.push('育休取得者数には、育休取得対象者数より大きい値は入力できません。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.woman_raise_holiday_get_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.woman_raise_holiday_get_error.push('正しい数値を入力してください。')
      }
    },
    //男性育休取得対象者数
    man_raise_holiday_target: () => {
      const target = this.man_raise_holiday_target
      this.errors.man_raise_holiday_target_error = []
      if (this.is_insert_raise_holiday == 1 && !this.is_not_score_man_raise) {
        if (validation.require(target)) this.errors.man_raise_holiday_target_error.push('必須項目です。')
        if (validation.moreLess(this.woman_raise_holiday_get, target)) this.errors.man_raise_holiday_get_error = []
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.man_raise_holiday_target_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.man_raise_holiday_target_error.push('正しい数値を入力してください。')
      }
    },
    //男性育休取得者数
    man_raise_holiday_get: () => {
      const target = this.man_raise_holiday_get
      this.errors.man_raise_holiday_get_error = []
      if (this.is_insert_raise_holiday == 1 && !this.is_not_score_man_raise) {
        if (validation.require(target)) this.errors.man_raise_holiday_get_error.push('必須項目です。')
        if (validation.moreLess(this.man_raise_holiday_target, target)) this.errors.man_raise_holiday_get_error.push('育休取得者数には、育休取得対象者数より大きい値は入力できません。')
        if (validation.maxLength(target, 5) || validation.int(target)) this.errors.man_raise_holiday_get_error.push('半角数値5文字以内で入力してください。')
        if (validation.onlyInteger(target)) this.errors.man_raise_holiday_get_error.push('正しい数値を入力してください。')
      }
    },
    //実績年度
    last_year_5: () => {
      this.errors.last_year_5_error = []
      if (this.is_insert_raise_holiday == 1) {
        if (!this.is_not_score_woman_raise || !this.is_not_score_man_raise) {
          if (this.last_year_5 == 0) this.errors.last_year_5_error.push('必須項目です。')
        }  
      }
      
    },
    is_not_score_woman_raise: () => {
      if (this.is_not_score_woman_raise == true) {
        this.errors.woman_raise_holiday_target_error = []
        this.errors.woman_raise_holiday_get_error = []
      }
      if (this.is_not_score_woman_raise == 1 && this.is_not_score_man_raise == 1) {
        this.errors.last_year_5_error = []
      }
    },
    is_not_score_man_raise: () => {
      if (this.is_not_score_woman_raise == 1 && this.is_not_score_man_raise == 1) {
        this.errors.last_year_5_error = []
      }
    },
    //補足
    recruit_others_content_7: () => {
      const target = this.recruit_others_content_7
      this.errors.recruit_others_content_7_error = []
      if (validation.banWords(this.recruit_others_content_7)) this.errors.recruit_others_content_7_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(target, 1000)) this.errors.recruit_others_content_7_error.push('500文字以下にしてください。')
    },

    //役員・管理職の女性比率
    is_insert_wonam_leader: () => {
      this.errors.is_insert_wonam_leader_error = []
      if (this.is_insert_wonam_leader == '') {
        this.errors.is_insert_wonam_leader_error.push('必須項目です。')
      }
    },
    woman_board_ratio: () => {
      commonValid.inputNumeric2.apply(this, ['woman_board_ratio', (this.is_insert_wonam_leader == 1)])
    },
    woman_leader_ratio: () => {
      commonValid.inputNumeric2.apply(this, ['woman_leader_ratio', (this.is_insert_wonam_leader == 1)])
    },
    recruit_others_content_8: () => {
      this.errors.recruit_others_content_8_error = []
      if (validation.banWords(this.recruit_others_content_8)) this.errors.recruit_others_content_8_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.recruit_others_content_8, 1000)) this.errors.recruit_others_content_8_error.push('500文字以下にしてください。')
    },
    //実績日
    scoring_date_year_4: () => {
      commonValid.scoring_date_day.apply(this, ['_4', (this.is_insert_wonam_leader == 1)])
    },
    scoring_date_month_4: () => {
      commonValid.scoring_date_day.apply(this, ['_4', (this.is_insert_wonam_leader == 1)])
    },
    scoring_date_day_4: () => {
      commonValid.scoring_date_day.apply(this, ['_4', (this.is_insert_wonam_leader == 1)])
    },
  }
}