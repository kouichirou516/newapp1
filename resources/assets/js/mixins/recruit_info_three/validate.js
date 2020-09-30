import Validation from '../../validation'
import common from './common'

const validation = new Validation()

export default function() {
  return {
    refer_title_1: () => common.title_valid.apply(this, [1]),
    refer_description_1: () => common.description_valid.apply(this, [1]),
    refer_title_2: () => common.title_valid.apply(this, [2]),
    refer_description_2: () => common.description_valid.apply(this, [2]),
    refer_title_3: () => common.title_valid.apply(this, [3]),
    refer_description_3: () => common.description_valid.apply(this, [3]),
    refer_title_4: () => common.title_valid.apply(this, [4]),
    refer_description_4: () => common.description_valid.apply(this, [4]),
    refer_title_5: () => common.title_valid.apply(this, [5]),
    refer_description_5: () => common.description_valid.apply(this, [5]),
    refer_title_6: () => common.title_valid.apply(this, [6]),
    refer_description_6: () => common.description_valid.apply(this, [6]),
    refer_title_7: () => common.title_valid.apply(this, [7]),
    refer_description_7: () => common.description_valid.apply(this, [7]),
    refer_title_8: () => common.title_valid.apply(this, [8]),
    refer_description_8: () => common.description_valid.apply(this, [8]),
    refer_title_9: () => common.title_valid.apply(this, [9]),
    refer_description_9: () => common.description_valid.apply(this, [9]),
    refer_title_10: () => common.title_valid.apply(this, [10]),
    refer_description_10: () => common.description_valid.apply(this, [10]),
    from_school_free_word: () => {
      this.errors.from_school_free_word_error = []
      if (validation.banWords(this.from_school_free_word)) this.errors.from_school_free_word_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.from_school_free_word, 4000)) this.errors.from_school_free_word_error.push('2000文字以内で入力してください。')
    },
    contact: () => {
      this.errors.contact_error = []
      if (validation.banWords(this.contact)) this.errors.contact_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.require(this.contact)) this.errors.contact_error.push('必須項目です。')
      if (validation.maxLength(this.contact, 2000)) this.errors.contact_error.push('1000文字以内で入力してください。')
    },
    human_division_picture: () => {
      this.errors.human_division_picture_error = []
    },
  }
}