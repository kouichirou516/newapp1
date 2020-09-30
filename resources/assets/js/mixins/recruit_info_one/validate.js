import Validation from '../../validation'
import common from './common'

const validation = new Validation()

export default function() {
  return {
    //モデルケース1
    model_case_name: () => {
      this.errors.model_case_name_error = []
      if (validation.maxLength(this.model_case_name, 70)) this.errors.model_case_name_error.push('35文字以内で入力してください。')
      if (validation.require(this.model_case_name)) this.errors.model_case_name_error.push('必須項目です。')
      if (validation.banWords(this.model_case_name)) this.errors.model_case_name_error.push('使用できない文字が入力されているので、削除・修正してください')
    },
    //採用人数
    recruit_amount_this_year: () => {
      this.errors.recruit_amount_this_year_error = []
      if (validation.require(this.recruit_amount_this_year)) this.errors.recruit_amount_this_year_error.push('必須項目です。')
    },
    //昨年度実績
    recruit_amount_last_year: () => {
      this.errors.recruit_amount_last_year_error = []
      if (validation.require(this.recruit_amount_last_year)) this.errors.recruit_amount_last_year_error.push('必須項目です。')
    },
    //WEBプレエントリ―締切
    deadline_web_pre_entry: () => {
      this.errors.deadline_web_pre_entry_error = []
      if (validation.require(this.deadline_web_pre_entry)) this.errors.deadline_web_pre_entry_error = ['必須項目です。']
    },
    deadline_web_pre_entry_term: () => {
      // this.errors.deadline_web_pre_entry_error = []
      if(this.deadline_web_pre_entry) {
        if (this.deadline_web_pre_entry == '1' || this.deadline_web_pre_entry == '2' || this.deadline_web_pre_entry == '3' || this.deadline_web_pre_entry == '4') {
          this.errors.deadline_web_pre_entry_error = []
        } else {
          if (validation.require(this.deadline_web_pre_entry_term)) {
            this.errors.deadline_web_pre_entry_error = ['必須項目です。']
          }else {
            this.errors.deadline_web_pre_entry_error = []
          }
        }
      }
    },
    //エントリーシート締切
    deadline_entry_sheat: () => {
      this.errors.deadline_entry_sheat_error = []
      if (validation.require(this.deadline_entry_sheat)) this.errors.deadline_entry_sheat_error = ['必須項目です。']
    },
    deadline_entry_sheat_term: () => {
      if(this.deadline_entry_sheat) {
        if (this.deadline_entry_sheat == '1' || this.deadline_entry_sheat == '2' || this.deadline_entry_sheat == '3' || this.deadline_entry_sheat == '4') {
          this.errors.deadline_entry_sheat_error = []
        } else {
          if (validation.require(this.deadline_entry_sheat_term)) {
            this.errors.deadline_entry_sheat_error = ['必須項目です。']
          }else {
            this.errors.deadline_entry_sheat_error = []
          }
        }
      }
    },
    //説明会時期
    term_seminar_date: () => {
      this.errors.term_seminar_date_error = []
      if (validation.require(this.term_seminar_date)) this.errors.term_seminar_date_error = ['必須項目です。']
    },
    term_seminar_date_term: () => {
      if(this.term_seminar_date) {
        if (this.term_seminar_date == '1' || this.term_seminar_date == '2' || this.term_seminar_date == '3' || this.term_seminar_date == '4') {
          this.errors.term_seminar_date_error = []
        } else {
          if (validation.require(this.term_seminar_date_term)) {
            this.errors.term_seminar_date_error = ['必須項目です。']
          }else {
            this.errors.term_seminar_date_error = []
          }
        }
      }
    },
    //面接時期
    term_interview_date: () => {
      this.errors.term_interview_date_error = []
      if (validation.require(this.term_interview_date)) this.errors.term_interview_date_error = ['必須項目です。']
    },
    term_interview_date_term: () => {
      if(this.term_interview_date) {
        if (this.term_interview_date == '1' || this.term_interview_date == '2' || this.term_interview_date == '3' || this.term_interview_date == '4') {
          this.errors.term_interview_date_error = []
        } else {
          if (validation.require(this.term_interview_date_term)) {
            this.errors.term_interview_date_error = ['必須項目です。']
          }else {
            this.errors.term_interview_date_error = []
          }
        }
      }
    },
    //内々定時期
    term_offering_date: () => {
      this.errors.term_offering_date_error = []
      if (validation.require(this.term_offering_date)) this.errors.term_offering_date_error = ['必須項目です。']
    },
    term_offering_date_term: () => {
      if(this.term_offering_date) {
        if (this.term_offering_date == '1' || this.term_offering_date == '2' || this.term_offering_date == '3' || this.term_offering_date == '4') {
          this.errors.term_offering_date_error = []
        } else {
          if (validation.require(this.term_offering_date_term)) {
            this.errors.term_offering_date_error = ['必須項目です。']
          }else {
            this.errors.term_offering_date_error = []
          }
        }
      }
    },

    submit_sheat_is_needed: () => {
      this.errors.submit_sheat_is_needed_error = []
      this.errors.submit_sheat_checks_error = []
      if (validation.require(this.submit_sheat_is_needed)) this.errors.submit_sheat_is_needed_error.push('必須項目です。')
    },

    submit_sheat_open_es: () => {
      this.errors.submit_sheat_checks_error = []
      if (this.submit_sheat_is_needed == 1) {
        if (!this.submit_sheat_checks) this.errors.submit_sheat_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_entry_sheat: () => {
      this.errors.submit_sheat_checks_error = []
      if (this.submit_sheat_is_needed == 1) {
        if (!this.submit_sheat_checks) this.errors.submit_sheat_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_resume: () => {
      this.errors.submit_sheat_checks_error = []
      if (this.submit_sheat_is_needed == 1) {
        if (!this.submit_sheat_checks) this.errors.submit_sheat_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_score_sheat: () => {
      this.errors.submit_sheat_checks_error = []
      if (this.submit_sheat_is_needed == 1) {
        if (!this.submit_sheat_checks) this.errors.submit_sheat_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_others: () => {
      this.errors.submit_sheat_checks_error = []
      if (this.submit_sheat_is_needed == 1) {
        if (!this.submit_sheat_checks) this.errors.submit_sheat_checks_error.push('必須項目です。')
      }
    },

    //給与モデル
    salary_model: () => {
      this.errors.salary_model_error = []
      if (this.salary_model == '' || this.salary_model == 8) {
        this.errors.month_salary_example_error = []
      }
      if (validation.require(this.salary_model)) this.errors.salary_model_error.push('必須項目です。')
    },
    //月収例
    month_salary_example: () => {
      this.errors.month_salary_example_error = []
      if (this.salary_model == 8) {
        this.errors.month_salary_example_error = []
      } else {
        if (validation.require(this.month_salary_example)) this.errors.month_salary_example_error.push('必須項目です。')
        if (validation.maxLength(this.month_salary_example, 3)) this.errors.month_salary_example_error.push('3桁以内で入力してください。')
        if (validation.onlyInteger(this.month_salary_example)) this.errors.month_salary_example_error.push('正しい数値を入力してください。')
      }
    },
    taigu_checks: () => {
      this.errors.taigu_checks_error = []
      var counts = {}
      for (var i = 0; i < this.taigu_checks.length; i++) {
        var key = this.taigu_checks[i]
        counts[key] = (counts[key]) ? counts[key] + 1 : 1
      }
      var countNum = Number(counts[1])
      if (countNum > 5) this.errors.taigu_checks_error.push('5個までしか選択できません。')
    },

    taigu_2_checks: () => {
      this.errors.taigu_2_checks_error = []
      var counts = {}
      for (var i = 0; i < this.taigu_2_checks.length; i++) {
        var key = this.taigu_2_checks[i]
        counts[key] = (counts[key]) ? counts[key] + 1 : 1
      }
      var countNum = Number(counts[1])
      if (countNum > 5) this.errors.taigu_2_checks_error.push('5個までしか選択できません。')
    },


    //モデルケース2
    model_case_name_2: () => {
      this.errors.model_case_name_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.maxLength(this.model_case_name_2, 70)) this.errors.model_case_name_2_error.push('35文字以内で入力してください。')
        if (validation.require(this.model_case_name_2)) this.errors.model_case_name_2_error.push('必須項目です。')
        if (validation.banWords(this.model_case_name_2)) this.errors.model_case_name_2_error.push('使用できない文字が入力されているので、削除・修正してください')
      }
    },
    //採用人数
    recruit_amount_this_year_2: () => {
      this.errors.recruit_amount_this_year_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.recruit_amount_this_year_2)) this.errors.recruit_amount_this_year_2_error.push('必須項目です。')
      }
    },
    //昨年度実績
    recruit_amount_last_year_2: () => {
      this.errors.recruit_amount_last_year_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.recruit_amount_last_year_2)) this.errors.recruit_amount_last_year_2_error.push('必須項目です。')
      }
    },
    //WEBプレエントリ―締切
    deadline_web_pre_entry_2: () => {
      this.errors.deadline_web_pre_entry_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.deadline_web_pre_entry_2)) {
          this.errors.deadline_web_pre_entry_2_error = ['必須項目です。']
        }
      }
    },
    deadline_web_pre_entry_term_2: () => {
      if(this.is_model_2 == 1) {
        if(this.deadline_web_pre_entry_term_2) {
          if (this.deadline_web_pre_entry_2 == '1' || this.deadline_web_pre_entry_2 == '2' || this.deadline_web_pre_entry_2 == '3' || this.deadline_web_pre_entry_2 == '4') {
            this.errors.deadline_web_pre_entry_2_error = []
          } else {
            if (validation.require(this.deadline_web_pre_entry_term_2)) {
              this.errors.deadline_web_pre_entry_2_error = ['必須項目です。']
            }else {
              this.errors.deadline_web_pre_entry_2_error = []
            }
          }
        }
      }
    },
    //エントリーシート締切
    deadline_entry_sheat_2: () => {
      this.errors.deadline_entry_sheat_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.deadline_entry_sheat_2)) {
          this.errors.deadline_entry_sheat_2_error = ['必須項目です。']
        }
      }
    },
    deadline_entry_sheat_term_2: () => {
      if(this.is_model_2 == 1) {
        if(this.deadline_entry_sheat_2) {
          if (this.deadline_entry_sheat_2 == '1' || this.deadline_entry_sheat_2 == '2' || this.deadline_entry_sheat_2 == '3' || this.deadline_entry_sheat_2 == '4') {
            this.errors.deadline_entry_sheat_2_error = []
          } else {
            if (validation.require(this.deadline_entry_sheat_term_2)) {
              this.errors.deadline_entry_sheat_2_error = ['必須項目です。']
            }else {
              this.errors.deadline_entry_sheat_2_error = []
            }
          }
        }
      }
    },
    //説明会時期
    term_seminar_date_2: () => {
      this.errors.term_seminar_date_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.term_seminar_date_2)) {
          this.errors.term_seminar_date_2_error = ['必須項目です。']
        }
      }
    },
    term_seminar_date_term_2: () => {
      if(this.is_model_2 == 1) {
        if(this.term_seminar_date_2) {
          if (this.term_seminar_date_2 == '1' || this.term_seminar_date_2 == '2' || this.term_seminar_date_2 == '3' || this.term_seminar_date_2 == '4') {
            this.errors.term_seminar_date_2_error = []
          } else {
            if (validation.require(this.term_seminar_date_term_2)) {
              this.errors.term_seminar_date_2_error = ['必須項目です。']
            }else {
              this.errors.term_seminar_date_2_error = []
            }
          }
        }
      }
    },
    //面接時期
    term_interview_date_2: () => {
      this.errors.term_interview_date_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.term_interview_date_2)) {
          this.errors.term_interview_date_2_error = ['必須項目です。']
        }
      }
    },
    term_interview_date_term_2: () => {
      if(this.is_model_2 == 1) {
        if(this.term_interview_date_2) {
          if (this.term_interview_date_2 == '1' || this.term_interview_date_2 == '2' || this.term_interview_date_2 == '3' || this.term_interview_date_2 == '4') {
            this.errors.term_interview_date_2_error = []
          } else {
            if (validation.require(this.term_interview_date_term_2)) {
              this.errors.term_interview_date_2_error = ['必須項目です。']
            }else {
              this.errors.term_interview_date_2_error = []
            }
          }
        }
      }
    },
    //内々定時期
    term_offering_date_2: () => {
      this.errors.term_offering_date_2_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.term_offering_date_2)) {
          this.errors.term_offering_date_2_error = ['必須項目です。']
        }
      }
    },
    term_offering_date_term_2: () => {
      if(this.is_model_2 == 1) {
        if(this.term_offering_date_2) {
          if (this.term_offering_date_2 == '1' || this.term_offering_date_2 == '2' || this.term_offering_date_2 == '3' || this.term_offering_date_2 == '4') {
            this.errors.term_offering_date_2_error = []
          } else {
            if (validation.require(this.term_offering_date_term_2)) {
              this.errors.term_offering_date_2_error = ['必須項目です。']
            }else {
              this.errors.term_offering_date_2_error = []
            }
          }
        }
      }
    },

    submit_sheat_is_needed_2: () => {
      this.errors.submit_sheat_is_needed_2_error = []
      this.errors.submit_sheat_2_checks_error = []
      if(this.is_model_2 == 1) {
        if (validation.require(this.submit_sheat_is_needed_2)) this.errors.submit_sheat_is_needed_2_error.push('必須項目です。')
      }
    },

    submit_sheat_open_es_2: () => {
      this.errors.submit_sheat_2_checks_error = []
      if(this.is_model_2 == 1 && this.submit_sheat_is_needed_2 == 1) {
        if (!this.submit_sheat_checks_2) this.errors.submit_sheat_2_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_entry_sheat_2: () => {
      this.errors.submit_sheat_2_checks_error = []
      if(this.is_model_2 == 1 && this.submit_sheat_is_needed_2 == 1) {
        if (!this.submit_sheat_checks_2) this.errors.submit_sheat_2_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_resume_2: () => {
      this.errors.submit_sheat_2_checks_error = []
      if(this.is_model_2 == 1 && this.submit_sheat_is_needed_2 == 1) {
        if (!this.submit_sheat_checks_2) this.errors.submit_sheat_2_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_score_sheat_2: () => {
      this.errors.submit_sheat_2_checks_error = []
      if(this.is_model_2 == 1 && this.submit_sheat_is_needed_2 == 1) {
        if (!this.submit_sheat_checks_2) this.errors.submit_sheat_2_checks_error.push('必須項目です。')
      }
    },
    submit_sheat_others_2: () => {
      this.errors.submit_sheat_2_checks_error = []
      if(this.is_model_2 == 1 && this.submit_sheat_is_needed_2 == 1) {
        if (!this.submit_sheat_checks_2) this.errors.submit_sheat_2_checks_error.push('必須項目です。')
      }
    },


    //給与モデル
    salary_model_2: () => {
      this.errors.salary_model_2_error = []
      if(this.is_model_2 == 1) {
        if (this.salary_model_2 == '' || this.salary_model_2 == 8) {
          this.errors.month_salary_example_2_error = []
        }
        if (validation.require(this.salary_model_2)) this.errors.salary_model_2_error.push('必須項目です。')
      }
    },
    //月収例
    month_salary_example_2: () => {
      this.errors.month_salary_example_2_error = []
      if(this.is_model_2 == 1) {
        if (this.salary_model_2 == 8) {
          this.errors.month_salary_example_2_error = []
        } else {
          if (validation.require(this.month_salary_example_2)) this.errors.month_salary_example_2_error.push('必須項目です。')
          if (validation.maxLength(this.month_salary_example_2, 3)) this.errors.month_salary_example_2_error.push('3桁以内で入力してください。')
          if (validation.onlyInteger(this.month_salary_example_2)) this.errors.month_salary_example_2_error.push('正しい数値を入力してください。')
        }
      }
    },

    //求める人物像・選考基準
    audition_border_image: () => {
      this.errors.audition_border_image_error = []
    },
    audition_border: () => {
      this.errors.audition_border_error = []
      if (validation.maxLength(this.audition_border, 2000)) this.errors.audition_border_error.push('1000文字以内で入力してください。')
      if (validation.banWords(this.audition_border)) this.errors.audition_border_error.push('使用できない文字が入力されているので、削除・修正してください')
    },

    //募集概要
    requirement_title_1: () => common.requirement_title.apply(this, [1]),
    requirement_description_1: () => common.requirement_description.apply(this, [1]),
    requirement_title_2: () => common.requirement_title.apply(this, [2]),
    requirement_description_2: () => common.requirement_description.apply(this, [2]),
    requirement_title_3: () => common.requirement_title.apply(this, [3]),
    requirement_description_3: () => common.requirement_description.apply(this, [3]),
    requirement_title_4: () => common.requirement_title.apply(this, [4]),
    requirement_description_4: () => common.requirement_description.apply(this, [4]),
    requirement_title_5: () => common.requirement_title.apply(this, [5]),
    requirement_description_5: () => common.requirement_description.apply(this, [5]),
    requirement_title_6: () => common.requirement_title.apply(this, [6]),
    requirement_description_6: () => common.requirement_description.apply(this, [6]),
    requirement_title_7: () => common.requirement_title.apply(this, [7]),
    requirement_description_7: () => common.requirement_description.apply(this, [7]),
    requirement_title_8: () => common.requirement_title.apply(this, [8]),
    requirement_description_8: () => common.requirement_description.apply(this, [8]),
    requirement_title_9: () => common.requirement_title.apply(this, [9]),
    requirement_description_9: () => common.requirement_description.apply(this, [9]),
    requirement_title_10: () => common.requirement_title.apply(this, [10]),
    requirement_description_10: () => common.requirement_description.apply(this, [10]),

    //給与・福利厚生
    welfare_title_1: () => common.welfare_title.apply(this, [1]),
    welfare_description_1: () => common.welfare_description.apply(this, [1]),
    welfare_title_2: () => common.welfare_title.apply(this, [2]),
    welfare_description_2: () => common.welfare_description.apply(this, [2]),
    welfare_title_3: () => common.welfare_title.apply(this, [3]),
    welfare_description_3: () => common.welfare_description.apply(this, [3]),
    welfare_title_4: () => common.welfare_title.apply(this, [4]),
    welfare_description_4: () => common.welfare_description.apply(this, [4]),
    welfare_title_5: () => common.welfare_title.apply(this, [5]),
    welfare_description_5: () => common.welfare_description.apply(this, [5]),
    welfare_title_6: () => common.welfare_title.apply(this, [6]),
    welfare_description_6: () => common.welfare_description.apply(this, [6]),
    welfare_title_7: () => common.welfare_title.apply(this, [7]),
    welfare_description_7: () => common.welfare_description.apply(this, [7]),
    welfare_title_8: () => common.welfare_title.apply(this, [8]),
    welfare_description_8: () => common.welfare_description.apply(this, [8]),
    welfare_title_9: () => common.welfare_title.apply(this, [9]),
    welfare_description_9: () => common.welfare_description.apply(this, [9]),
    welfare_title_10: () => common.welfare_title.apply(this, [10]),
    welfare_description_10: () => common.welfare_description.apply(this, [10]),
    welfare_title_11: () => common.welfare_title.apply(this, [11]),
    welfare_description_11: () => common.welfare_description.apply(this, [11]),
    welfare_title_12: () => common.welfare_title.apply(this, [12]),
    welfare_description_12: () => common.welfare_description.apply(this, [12]),
    welfare_title_13: () => common.welfare_title.apply(this, [13]),
    welfare_description_13: () => common.welfare_description.apply(this, [13]),
    welfare_title_14: () => common.welfare_title.apply(this, [14]),
    welfare_description_14: () => common.welfare_description.apply(this, [14]),
    welfare_title_15: () => common.welfare_title.apply(this, [15]),
    welfare_description_15: () => common.welfare_description.apply(this, [15]),
  }
}