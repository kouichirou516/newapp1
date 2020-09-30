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

export const commonValid = {
  cdata_title(num) {
    const target1 = this[`cdata${num}_title`]
    const target2 = this[`cdata${num}`]
    this.errors[`cdata${num}_title_error`] = []
    if (validation.banWords(this[`cdata${num}_title`])) this.errors[`cdata${num}_title_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target1, 200)) this.errors[`cdata${num}_title_error`].push('100文字以内で入力してください。')
    if (target1 && !target2) {
      this.errors[`cdata${num}_error`] = []
      this.errors[`cdata${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`cdata${num}_title_error`] = []
      this.errors[`cdata${num}_error`] = []
    }
  },
  cdata(num) {
    const target1 = this[`cdata${num}_title`]
    const target2 = this[`cdata${num}`]
    this.errors[`cdata${num}_error`] = []
    if (validation.banWords(this[`cdata${num}`])) this.errors[`cdata${num}_error`].push('使用できない文字が入力されているので、削除・修正してください')
    if (validation.maxLength(target2, 4000)) this.errors[`cdata${num}_error`].push('2000文字以内で入力してください。')
    if (target1) {
      if (validation.require(target2)) this.errors[`cdata${num}_error`].push('必須項目です。')
    } else if (!target1 && !target2) {
      this.errors[`cdata${num}_title_error`] = []
      this.errors[`cdata${num}_error`] = []
    }
  }
}