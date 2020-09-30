import Validation from '../../validation'
import { Valid, commonValid } from './common'

const validation = new Validation()

export default function() {
  return {
    others_contents: () => {
      this.errors.others_contents_error = Valid.simple((validation.maxLength(this.others_contents, 120)), '60文字以内で入力してください。', []).get()
      if (validation.banWords(this.others_contents)) this.errors.others_contents_error.push('使用できない文字が入力されているので、削除・修正してください')
    },
    guraduated: () => {
      this.errors.guraduated_error = Valid.simple((
        this.application_qualifications_guraduated == 1 && this.guraduated_start_year == '' &&
        this.guraduated_start_month == '' && this.guraduated_end_year == '' &&
        this.guraduated_end_month == ''), '既卒募集 卒業年度期間は必須です', []).get()
    },
    job_place_checks: () => {
      this.errors.job_place_checks_error = Valid.simple((this.job_place_checks.indexOf(1) == -1), '勤務地を選択してください。', []).get()
    },
    major_checks: () => {
      this.errors.major_checks_error = Valid.simple((this.major_checks.indexOf(1) == -1), '採用予定学科を選択してください。', []).get()
    },
    employment_status_checks: () => {
      this.errors.employment_status_checks_error = Valid.simple((this.employment_status_checks.indexOf(1) == -1), '雇用形態を選択してください。', []).get()
    },
    application_qualifications_checks: () => {
      this.errors.application_qualifications_checks_error = Valid.simple((this.application_qualifications_checks.indexOf(1) == -1), '新卒の応募資格を選択してください。', []).get()
    },
    application_guraduated_qualifications_checks: () => {
      this.errors.application_guraduated_qualifications_checks_error = Valid.simple((this.application_qualifications_guraduated == 1 && this.application_guraduated_qualifications_checks.indexOf(1) == -1), '既卒の応募資格を選択してください。', []).get()
    },
    application_qualifications_guraduated: () => {
      this.errors.application_qualifications_guraduated_error = []
      if(this.application_qualifications_guraduated === '' || this.application_qualifications_guraduated == null) this.errors.application_qualifications_guraduated_error.push('既卒募集を選択してください。')
      if(this.application_qualifications_guraduated != 1) {
        this.errors.application_guraduated_qualifications_checks_error = []
      }
      this.validate('application_qualifications_1')
      this.validate('application_qualifications_2')
      this.validate('application_qualifications_3')
      this.validate('application_qualifications_4')
      this.validate('application_qualifications_5')
    },
    guraduated_start_year: () => {
      commonValid.guraduated_start_valid.apply(this)
    },
    guraduated_start_month: () => {
      commonValid.guraduated_start_valid.apply(this)
    },
    guraduated_end_year: () => {
      commonValid.guraduated_end_valid.apply(this)
    },
    guraduated_end_month: () => {
      commonValid.guraduated_end_valid.apply(this)
    },
    active_recruitment_targets_1: () => {
      this.errors.active_recruitment_1_error = Valid.simple((
        !this.application_qualifications_4 && this.active_recruitment_targets_1 ||
        !this.application_qualifications_4 && this.active_recruitment_targets_5 ||
        !this.application_qualifications_4 && this.active_recruitment_targets_8), '【応募資格　大学】が選択されていません。', []).get()
    },
    
    active_recruitment_targets_2: () => {
      this.errors.active_recruitment_2_error = []
      this.errors.active_recruitment_6_error = []
      if (this.active_recruitment_targets_2 || this.active_recruitment_targets_6) {
        if (!this.application_qualifications_5 && !this.application_guraduated_qualifications_5) {
          this.errors.active_recruitment_2_error.push('【応募資格　大学院】が選択されていません。')
        }
      }
    },
    
    active_recruitment_targets_3: () => {
      this.errors.active_recruitment_3_error = Valid.simple((
        !this.application_qualifications_1 && this.active_recruitment_targets_3), '【応募資格　短大】が選択されていません。', []).get()
    },
    active_recruitment_targets_4: () => {
      this.errors.active_recruitment_4_error = Valid.simple((
        !this.application_qualifications_3 && this.active_recruitment_targets_4), '【応募資格　高専】が選択されていません。', []).get()
    },
    active_recruitment_targets_5: () => {
      this.errors.active_recruitment_1_error = Valid.simple((
        !this.application_qualifications_4 && this.active_recruitment_targets_1 ||
        !this.application_qualifications_4 && this.active_recruitment_targets_5 ||
        !this.application_qualifications_4 && this.active_recruitment_targets_8), '【応募資格　大学】が選択されていません。', []).get()
    },
    active_recruitment_targets_6: () => {
      this.errors.active_recruitment_2_error = []
      this.errors.active_recruitment_6_error = []
      if (this.active_recruitment_targets_2 || this.active_recruitment_targets_6) {
        if (!this.application_qualifications_5 && !this.application_guraduated_qualifications_5) {
          this.errors.active_recruitment_2_error.push('【応募資格　大学院】が選択されていません。')
        }
      }
    },
    active_recruitment_targets_7: () => {
      this.errors.active_recruitment_7_error = Valid.simple((
        !this.application_qualifications_2 && this.active_recruitment_targets_7), '【応募資格　専門】が選択されていません。', []).get()
    },
    active_recruitment_targets_8: () => {
      this.errors.active_recruitment_1_error = Valid.simple((
        !this.application_qualifications_4 && this.active_recruitment_targets_1 ||
        !this.application_qualifications_4 && this.active_recruitment_targets_5 ||
        !this.application_qualifications_4 && this.active_recruitment_targets_8), '【応募資格　大学】が選択されていません。', []).get()
    },
    application_qualifications_1: () => {
      this.errors.active_recruitment_3_error = Valid.simple((
        this.active_recruitment_targets_3 && !this.application_qualifications_1 &&
        this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_1 ||
        this.active_recruitment_targets_3 && !this.application_qualifications_1 &&
        this.application_qualifications_guraduated == 0), '【応募資格　短大】が選択されていません。', []).get()
    },
    application_qualifications_2: () => {
      this.errors.active_recruitment_7_error = Valid.simple((
        this.active_recruitment_targets_7 && !this.application_qualifications_2 &&
        this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_2 ||
        this.active_recruitment_targets_7 && !this.application_qualifications_2 &&
        this.application_qualifications_guraduated == 0), '【応募資格　専門】が選択されていません。', []).get()
    },
    application_qualifications_3: () => {
      this.errors.active_recruitment_4_error = Valid.simple((
        this.active_recruitment_targets_4 && !this.application_qualifications_3 &&
        this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_3 ||
        this.active_recruitment_targets_4 && !this.application_qualifications_3 &&
        this.application_qualifications_guraduated == 0), '【応募資格　高専】が選択されていません。', []).get()
    },
    application_qualifications_4: () => {
      this.errors.active_recruitment_5_error = []
      this.errors.active_recruitment_1_error = []

      if (this.active_recruitment_targets_1 && !this.application_qualifications_4 && this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_4 ||
        this.active_recruitment_targets_1 && !this.application_qualifications_4 && this.application_qualifications_guraduated == 0) {
        this.errors.active_recruitment_1_error.push('【応募資格　大学】が選択されていません。')
      } else if(this.active_recruitment_targets_5 && !this.application_qualifications_4 && this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_4 ||
        this.active_recruitment_targets_5 && !this.application_qualifications_4 && this.application_qualifications_guraduated == 0) {
        this.errors.active_recruitment_1_error.push('【応募資格　大学】が選択されていません。')
      }
    },
    application_qualifications_5: () => {
      this.errors.active_recruitment_2_error = []
      this.errors.active_recruitment_6_error = []
      if (this.active_recruitment_targets_2 && !this.application_qualifications_5 && this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_5 ||
        this.active_recruitment_targets_2 && !this.application_qualifications_5 && this.application_qualifications_guraduated == 0) {
        this.errors.active_recruitment_2_error.push('【応募資格　大学院】が選択されていません。')
      }
      else if(this.active_recruitment_targets_6 && !this.application_qualifications_5 && this.application_qualifications_guraduated == 1 && !this.application_guraduated_qualifications_5 ||
        this.active_recruitment_targets_6 && !this.application_qualifications_5 && this.application_qualifications_guraduated == 0) {
        this.errors.active_recruitment_6_error.push('【応募資格　大学院】が選択されていません。')
      }
    },
    application_guraduated_qualifications_1: () => {
      this.errors.active_recruitment_3_error = Valid.simple((
        this.active_recruitment_targets_3 && !this.application_qualifications_1 &&
        !this.application_guraduated_qualifications_1), '【応募資格　短大】が選択されていません。', []).get()
    },
    application_guraduated_qualifications_2: () => {
      this.errors.active_recruitment_7_error = Valid.simple((
        this.active_recruitment_targets_7 && !this.application_qualifications_2 &&
        !this.application_guraduated_qualifications_2), '【応募資格　専門】が選択されていません。', []).get()
    },
    application_guraduated_qualifications_3: () => {
      this.errors.active_recruitment_4_error = Valid.simple((
        this.active_recruitment_targets_4 && !this.application_qualifications_3 &&
        !this.application_guraduated_qualifications_3), '【応募資格　高専】が選択されていません。', []).get()
    },
    application_guraduated_qualifications_4: () => {
      this.errors.active_recruitment_1_error = []
      this.errors.active_recruitment_5_error = []
      if (this.active_recruitment_targets_1 && !this.application_qualifications_4 && !this.application_guraduated_qualifications_4) {
        this.errors.active_recruitment_1_error.push('【応募資格　大学】が選択されていません。')
      }
      else if(this.active_recruitment_targets_5 && !this.application_qualifications_4 && !this.application_guraduated_qualifications_4) {
        this.errors.active_recruitment_1_error.push('【応募資格　大学】が選択されていません。')
      }
    },
    application_guraduated_qualifications_5: () => {
      this.errors.active_recruitment_2_error = []
      this.errors.active_recruitment_6_error = []
      if (this.active_recruitment_targets_2 && !this.application_qualifications_5 && !this.application_guraduated_qualifications_5) {
        this.errors.active_recruitment_2_error.push('【応募資格　大学院】が選択されていません。')
      }
      else if(this.active_recruitment_targets_6 && !this.application_qualifications_5 && !this.application_guraduated_qualifications_5) {
        this.errors.active_recruitment_6_error.push('【応募資格　大学院】が選択されていません。')
      }
    },
    
    guraduated_start_year: () => {
      this.errors.guraduated_start_month_error = []
      if (this.guraduated_start_year == 2011 && this.guraduated_start_month < 4 || this.guraduated_end_year == 2020 && this.guraduated_end_month > 3) {
        this.errors.guraduated_start_month_error.push('2011年4月～2020年3月を選択してください。')
      }
    },
    guraduated_start_month: () => {
      this.errors.guraduated_start_month_error = []
      if (this.guraduated_start_year == 2011 && this.guraduated_start_month < 4 || this.guraduated_end_year == 2020 && this.guraduated_end_month > 3) {
        this.errors.guraduated_start_month_error.push('2011年4月～2020年3月を選択してください。')
      }
      
    },
    
    guraduated_end_year: () => {
      this.errors.guraduated_start_month_error = []
      if (this.guraduated_start_year == 2011 && this.guraduated_start_month < 4 || this.guraduated_end_year == 2020 && this.guraduated_end_month > 3) {
        this.errors.guraduated_start_month_error.push('2011年4月～2020年3月を選択してください。')
      }
    },
    guraduated_end_month: () => {
      this.errors.guraduated_start_month_error = []
      if (this.guraduated_start_year == 2011 && this.guraduated_start_month < 4 || this.guraduated_end_year == 2020 && this.guraduated_end_month > 3) {
        this.errors.guraduated_start_month_error.push('2011年4月～2020年3月を選択してください。')
      }
    },
    
  }
}