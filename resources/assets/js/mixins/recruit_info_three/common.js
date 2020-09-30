import Validation from '../../validation'
const validation = new Validation()

export default {
  title_valid(num) {
    const target1 = this[`refer_title_${num}`]
    const target2 = this[`refer_description_${num}`]
    this.errors[`refer_title_${num}_error`] = []
    if (validation.banWords(this[`refer_title_${num}`])) this.errors[`refer_title_${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target1, 200)) this.errors[`refer_title_${num}_error`].push('100文字以内で入力してください。')
    if (target1 && !target2) {
      this.errors[`refer_description_${num}_error`] = []
      this.errors[`refer_description_${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`refer_title_${num}_error`] = []
      this.errors[`refer_description_${num}_error`] = []
    }
  },
  description_valid(num) {
    const target1 = this[`refer_title_${num}`]
    const target2 = this[`refer_description_${num}`]
    this.errors[`refer_description_${num}_error`] = []
    if (validation.banWords(this[`refer_description_${num}`])) this.errors[`refer_description_${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target2, 4000)) this.errors[`refer_description_${num}_error`].push('2000文字以内で入力してください。')
    if (target1) {
      if (validation.require(target2)) this.errors[`refer_description_${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`refer_title_${num}_error`] = []
      this.errors[`refer_description_${num}_error`] = []
    }
  }
}