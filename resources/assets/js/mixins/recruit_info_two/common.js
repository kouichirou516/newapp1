import Validation from '../../validation'
import _ from 'lodash'
const validation = new Validation()

export const commonValid = {
  scoring_date_day(num, flg) {
    const targetY = this[`scoring_date_year${num}`]
    const targetM = this[`scoring_date_month${num}`]
    const targetD = this[`scoring_date_day${num}`]
    this.errors[`scoring_date_year${num}_error`] = []
    if (flg) {
      if (targetY == '' && targetM == '' && targetD == '') {
        this.errors[`scoring_date_year${num}_error`].push('年は必須項目です。')
      } else if (targetY == '' && targetM != '' && targetD == '') {
        this.errors[`scoring_date_year${num}_error`].push('年は必須項目です。')
      } else if (targetY != '' && targetM == '' && targetD != '') {
        this.errors[`scoring_date_year${num}_error`].push('月を入力してください。')
      } else if (targetY == '' && targetM != '' && targetD != '') {
        this.errors[`scoring_date_year${num}_error`].push('年は必須項目です。')
      } else if (targetY == '' && targetM == '' && targetD != '') {
        this.errors[`scoring_date_year${num}_error`].push('年は必須項目です。')
      } else if (targetY != '' && targetM != '' && targetD == '') {
        if (!validation.date(targetY, targetM, targetD)) this.errors[`scoring_date_year${num}_error`].push('正しい日付を入力してください。')
        if (!validation.pastMonth(targetY, targetM, targetD)) this.errors[`scoring_date_year${num}_error`].push('過去の日付を入力してください。')
      } else if (targetY != '' && targetM != '' && targetD != '') {
        if (!validation.date(targetY, targetM, targetD)) this.errors[`scoring_date_year${num}_error`].push('正しい日付を入力してください。')
        if (!validation.past(targetY, targetM, targetD)) this.errors[`scoring_date_year${num}_error`].push('過去の日付を入力してください。')
      } else if (targetY == '' && targetM != '' && targetD != '') {
        if (!validation.date(targetY, targetM, targetD)) this.errors[`scoring_date_year${num}_error`].push('正しい日付を入力してください。')
        if (!validation.past(targetY, targetM, targetD)) this.errors[`scoring_date_year${num}_error`].push('過去の日付を入力してください。')
      }
    }
  },
  inputNumeric(name, flg) {
    const target = this[name]
    this.errors[`${name}_error`] = []
    if (flg) {
      if (validation.require(target)) this.errors[`${name}_error`].push('必須項目です。')
      if (validation.int(target)) this.errors[`${name}_error`].push('半角数値で入力してください。')
      if (validation.decimalNum(target)) this.errors[`${name}_error`].push('0.1から99.9を入力してください。')
      if (validation.watchDecimal(target)) this.errors[`${name}_error`].push('小数点以下は第一位までしか入力できません。')
      if (validation.zeroPaddeing(target)) this.errors[`${name}_error`].push('正しい数値を入力してください。')
    }
  },
  inputNumeric2(name, flg) {
    const target = this[name]
    this.errors[`${name}_error`] = []
    if (flg) {
      if (validation.require(target)) this.errors[`${name}_error`].push('必須項目です。')
      if (validation.int(target)) this.errors[`${name}_error`].push('半角数値で入力してください。')
      if (validation.decimalNum100(target)) this.errors[`${name}_error`].push('0から100を入力してください。')
      if (validation.watchDecimal(target)) this.errors[`${name}_error`].push('小数点以下は第一位までしか入力できません。')
      if (validation.zeroPaddeing(target)) this.errors[`${name}_error`].push('正しい数値を入力してください。')
    }
  },
  recruit_score(name1, name2, flg) {
    const target = this[name1]
    this.errors[`${name1}_error`] = []
    if (flg) {
      if (validation.require(target)) this.errors[`${name1}_error`].push('必須項目です。')
      if (this[name2]) this.validate(name2)
      if (validation.maxLength(target, 5) || validation.int(target)) this.errors[`${name1}_error`].push('半角数値5文字以内で入力してください。')
      if (validation.onlyInteger(target) || target == 0) this.errors[`${name1}_error`].push('正しい数値を入力してください。')
    }
  },
  retire_score(name, name2, flg) {
    const target = this[name]
    this.errors[`${name}_error`] = []
    if (flg) {
      if (validation.require(target)) this.errors[`${name}_error`].push('必須項目です。')
      if (validation.moreLess(this[name2], target)) this.errors[`${name}_error`].push('離職者数には、採用者数より大きい値は入力できません。')
      if (validation.maxLength(target, 5) || validation.int(target)) this.errors[`${name}_error`].push('半角数値5文字以内で入力してください。')
      if (validation.onlyInteger(target)) this.errors[`${name}_error`].push('正しい数値を入力してください。')
    }
  },
  last_any_year(name1, name2, flg) {
    const target = this.last_one_year_men
    this.errors.last_one_year_men_error = []
    if (flg) {
      if (validation.require(target)) this.errors.last_one_year_men_error.push('必須項目です。')
      if (validation.maxLength(target, 5) || validation.int(target)) this.errors.last_one_year_men_error.push('半角数値5文字以内で入力してください。')
      if (validation.onlyInteger(target)) this.errors.last_one_year_men_error.push('正しい数値を入力してください。')
      if(this[name1] === '0' && this[name2] === '0') {
        this.errors.last_one_year_men_error.push('【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
      }else {
        _.pull(this.errors.last_one_year_men_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
        _.pull(this.errors.last_one_year_women_error, '【男性採用者数】、【女性採用者数】のどちらかは0より大きい値を入力してください。')
      }
    }
  }
}