import Validation from '../../validation'

const validation = new Validation()

export default function() {
  return {
    form_name: () => {
      this.errors.form_name_error = []
      if (validation.banWords(this.form_name)) this.errors.form_name_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.require(this.form_name)) this.errors.form_name_error.push('必須項目です。')
      if (validation.maxLength(this.form_name, 60)) this.errors.form_name_error.push('30文字以内で入力してください。')
    },
    is_entry_accept: () => {
      this.errors.is_entry_accept_error = []
      if (validation.require(this.is_entry_accept)) this.errors.is_entry_accept_error.push('必須項目です。')
    },
    note: () => {
      this.errors.note_error = []
      if (validation.banWords(this.note)) this.errors.note_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.note, 4000)) this.errors.note_error.push('2000文字以内で入力してください。')
    },
  }
}