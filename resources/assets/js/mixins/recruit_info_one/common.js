import Validation from '../../validation'
const validation = new Validation()

export default {
  requirement_title(num) {
    const target1 = this[`requirement_title_${num}`]
    const target2 = this[`requirement_description_${num}`]
    this.errors[`requirement_title_${num}_error`] = []
    if (validation.banWords(this[`requirement_title_${num}`])) this.errors[`requirement_title_${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target1, 200)) this.errors[`requirement_title_${num}_error`].push('100文字以内で入力してください。')
    if (target1 && !target2) {
      this.errors[`requirement_description_${num}_error`] = []
      this.errors[`requirement_description_${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`requirement_title_${num}_error`] = []
      this.errors[`requirement_description_${num}_error`] = []
    }
  },
  requirement_description(num) {
    const target1 = this[`requirement_title_${num}`]
    const target2 = this[`requirement_description_${num}`]
    this.errors[`requirement_description_${num}_error`] = []
    if (validation.banWords(this[`requirement_description_${num}`])) this.errors[`requirement_description_${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target2, 4000)) this.errors[`requirement_description_${num}_error`].push('2000文字以内で入力してください。')
    if (target1) {
      if (validation.require(target2)) this.errors[`requirement_description_${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`requirement_title_${num}_error`] = []
      this.errors[`requirement_description_${num}_error`] = []
    }
  },
  welfare_title(num) {
    const target1 = this[`welfare_title_${num}`]
    const target2 = this[`welfare_description_${num}`]
    this.errors[`welfare_title_${num}_error`] = []
    if (validation.banWords(this[`welfare_title_${num}`])) this.errors[`welfare_title_${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target1, 200)) this.errors[`welfare_title_${num}_error`].push('100文字以内で入力してください。')
    if (target1 && !target2) {
      this.errors[`welfare_description_${num}_error`] = []
      this.errors[`welfare_description_${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`welfare_title_${num}_error`] = []
      this.errors[`welfare_description_${num}_error`] = []
    }
  },
  welfare_description(num) {
    const target1 = this[`welfare_title_${num}`]
    const target2 = this[`welfare_description_${num}`]
    this.errors[`welfare_description_${num}_error`] = []
    if (validation.banWords(this[`welfare_description_${num}`])) this.errors[`welfare_description_${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target2, 4000)) this.errors[`welfare_description_${num}_error`].push('2000文字以内で入力してください。')
    if (target1) {
      if (validation.require(target2)) this.errors[`welfare_description_${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`welfare_title_${num}_error`] = []
      this.errors[`welfare_description_${num}_error`] = []
    }
  }
}