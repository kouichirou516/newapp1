import Validation from '../../validation'

const validation = new Validation()

export default function() {
  return {
    signature: () => {
      this.errors.signature_error = []
      if (validation.banWords(this.signature)) this.errors.signature_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.signature, 1600)) this.errors.signature_error.push('800文字以内で入力してください。')
    },
    tpl1_disabled: () => {
      this.errors.tpl1_disabled_error = []
      this.errors.tpl1_body_error = []
      if (this.tpl1_disabled === '') this.errors.tpl1_disabled_error.push('必須項目です。')
      if (this.tpl1_disabled == 0) {
        if (validation.banWords(this.tpl1_body)) this.errors.tpl1_body_error.push('使用できない文字が入力されているので、削除・修正してください')
        if (validation.maxLength(this.tpl1_body, 3400)) this.errors.tpl1_body_error.push('1700文字以内で入力してください。') 
      }
    },
    tpl1_body: () => {
      this.errors.tpl1_body_error = []
      if (this.tpl1_disabled == 0) {
        if (validation.banWords(this.tpl1_body)) this.errors.tpl1_body_error.push('使用できない文字が入力されているので、削除・修正してください')
        if (validation.maxLength(this.tpl1_body, 3400)) this.errors.tpl1_body_error.push('1700文字以内で入力してください。') 
      }
    },
    tpl2_disabled: () => {
      this.errors.tpl2_disabled_error = []
      this.errors.tpl2_body_error = []
      if (this.tpl2_disabled === '') this.errors.tpl2_disabled_error.push('必須項目です。')
      if (this.tpl2_disabled == 0) {
        if (validation.banWords(this.tpl2_body)) this.errors.tpl2_body_error.push('使用できない文字が入力されているので、削除・修正してください')
        if (validation.maxLength(this.tpl2_body, 3400)) this.errors.tpl2_body_error.push('1700文字以内で入力してください。') 
      }
    },
    tpl2_body: () => {
      this.errors.tpl2_body_error = []
      if (this.tpl2_disabled == 0) {
        if (validation.banWords(this.tpl2_body)) this.errors.tpl2_body_error.push('使用できない文字が入力されているので、削除・修正してください')
        if (validation.maxLength(this.tpl2_body, 3400)) this.errors.tpl2_body_error.push('1700文字以内で入力してください。')
      }
    },
    tpl3_disabled: () => {
      this.errors.tpl3_disabled_error = []
      this.errors.tpl3_body_error = []
      if (this.tpl3_disabled === '') this.errors.tpl3_disabled_error.push('必須項目です。')
      if (this.tpl3_disabled == 0) {
        if (validation.banWords(this.tpl3_body)) this.errors.tpl3_body_error.push('使用できない文字が入力されているので、削除・修正してください')
        if (validation.maxLength(this.tpl3_body, 3400)) this.errors.tpl3_body_error.push('1700文字以内で入力してください。') 
      }
    },
    tpl3_body: () => {
      this.errors.tpl3_body_error = []
      if (this.tpl3_disabled == 0) {
        if (validation.banWords(this.tpl3_body)) this.errors.tpl3_body_error.push('使用できない文字が入力されているので、削除・修正してください')
        if (validation.maxLength(this.tpl3_body, 3400)) this.errors.tpl3_body_error.push('1700文字以内で入力してください。')
      }
    },
  }
}
