import Validation from '../../validation'
const validation = new Validation()

export class Valid {
  static simple(bool, text, initial = null){
    this.data = initial ? initial : this.data
    if(bool) this.data.push(text)
    return this
  }
  static get() {
    return this.data
  }
}

export const commonValid =  {
  checksHundle(data, num, checked) {
    const checks = Object.assign([], data)
    checks[num] = checked ? 1 : 0
    return checks
  },
  simple_valid(handle, text) {
    return handle ? [text] : []
  },
  guraduated_start_valid() {
    this.errors.guraduated_start_year_error = []
    this.errors.guraduated_start_day_error = []
    if(this.application_qualifications_guraduated == 1) {
      var targetY = this.guraduated_start_year
      var targetM = this.guraduated_start_month
      var targetEndY = this.guraduated_end_year
      var targetEndM = this.guraduated_end_month
      if (validation.term(targetY, targetM, 2010, 4, 2019, 4)) this.errors.guraduated_start_day_error.push('正しい開始日付を入力してください。')
      if (!validation.compDate(targetY, targetM, targetEndY, targetEndM)) this.errors.guraduated_start_year_error.push('正しい期間を入力してください。')
      if (!targetY || !targetM || !targetEndY || !targetEndM) {
        this.errors.guraduated_start_year_error.push('日付を選択してください。')
      }
    }
  },
  guraduated_end_valid() {
    this.errors.guraduated_start_month_error = []
    this.errors.guraduated_start_year_error = []
    if(this.application_qualifications_guraduated == 1) {
      var targetY = this.guraduated_end_year
      var targetM = this.guraduated_end_month
      var targetEndY = this.guraduated_start_year
      var targetEndM = this.guraduated_start_month
      if (validation.term(targetY, targetM, 2010, 4, 2019, 4)) this.errors.guraduated_start_month_error.push('正しい終了日付を入力してください。')
      if (!validation.compDate(targetEndY, targetEndM, targetY, targetM)) this.errors.guraduated_start_year_error.push('正しい期間を入力してください。')
      if (!targetY || !targetM || !targetEndY || !targetEndM) {
        this.errors.guraduated_start_year_error.push('日付を選択してください。')
      }
    }
  }
}