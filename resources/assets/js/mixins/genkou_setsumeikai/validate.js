import Validation from '../../validation'
const validation = new Validation()
import moment from 'moment'
import $ from 'jquery'

export default function() {
  return {
    setsumeikai1_name: () => {
      this.errors.setsumeikai1_name_error = []
      if (validation.banWords(this.setsumeikai1_name)) this.errors.setsumeikai1_name_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.require(this.setsumeikai1_name)) this.errors.setsumeikai1_name_error.push('必須項目です。')
      if (validation.maxLength(this.setsumeikai1_name, 60)) this.errors.setsumeikai1_name_error.push('30文字以内で入力してください。')
    },
    setsumeikai1_period: () => {
      this.errors.setsumeikai1_period_error = []
      if (!validation.termBetween(this.setsumeikai1_period, moment(this.open_date), '20210225')) this.errors.setsumeikai1_period_error.push('掲載日から2021年2月25日までの日付を入力してください')
    },
    setsumeikai1_title: () => {
      this.errors.setsumeikai1_title_error = []
      if (validation.banWords(this.setsumeikai1_title)) this.errors.setsumeikai1_title_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai1_title, 80)) this.errors.setsumeikai1_title_error.push('40文字以内で入力してください。')
    },
    setsumeikai1_text: () => {
      this.errors.setsumeikai1_text_error = []
      if (validation.banWords(this.setsumeikai1_text)) this.errors.setsumeikai1_text_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai1_text, 4000)) this.errors.setsumeikai1_text_error.push('2000文字以内で入力してください。')
    },
    setsumeikai2_name: () => {
      this.errors.setsumeikai2_name_error = []
      if (validation.banWords(this.setsumeikai2_name)) this.errors.setsumeikai2_name_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai2_name, 60)) this.errors.setsumeikai2_name_error.push('30文字以内で入力してください。')
      if (this.genkou_setsumeikai_details2.length > 0 && validation.require(this.setsumeikai2_name)) {
        this.errors.setsumeikai2_name_error.push('日程コードの「表示」欄にチェックを入れている場合は、フォーム名称の入力が必須です。') 
      }
    },
    setsumeikai2_period: () => {
      this.errors.setsumeikai2_period_error = []
      if (!validation.termBetween(this.setsumeikai2_period, moment(this.open_date), '20210225')) this.errors.setsumeikai2_period_error.push('掲載日から2021年2月25日までの日付を入力してください')
    },
    setsumeikai2_title: () => {
      this.errors.setsumeikai2_title_error = []
      if (validation.banWords(this.setsumeikai2_title)) this.errors.setsumeikai2_title_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai2_title, 80)) this.errors.setsumeikai2_title_error.push('40文字以内で入力してください。')
    },
    setsumeikai2_text: () => {
      this.errors.setsumeikai2_text_error = []
      if (validation.banWords(this.setsumeikai2_text)) this.errors.setsumeikai2_text_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai2_text, 4000)) this.errors.setsumeikai2_text_error.push('2000文字以内で入力してください。')
    },
    setsumeikai3_name: () => {
      this.errors.setsumeikai3_name_error = []
      if (validation.banWords(this.setsumeikai3_name)) this.errors.setsumeikai3_name_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai3_name, 60)) this.errors.setsumeikai3_name_error.push('30文字以内で入力してください。')
      if (this.genkou_setsumeikai_details3.length > 0 && validation.require(this.setsumeikai3_name)) {
        this.errors.setsumeikai3_name_error.push('日程コードの「表示」欄にチェックを入れている場合は、フォーム名称の入力が必須です。') 
      }
    },
    setsumeikai3_period: () => {
      this.errors.setsumeikai3_period_error = []
      if (!validation.termBetween(this.setsumeikai3_period, moment(this.open_date), '20210225')) this.errors.setsumeikai3_period_error.push('掲載日から2021年2月25日までの日付を入力してください')
    },
    setsumeikai3_title: () => {
      this.errors.setsumeikai3_title_error = []
      if (validation.banWords(this.setsumeikai3_title)) this.errors.setsumeikai3_title_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai3_title, 80)) this.errors.setsumeikai3_title_error.push('40文字以内で入力してください。')
    },
    setsumeikai3_text: () => {
      this.errors.setsumeikai3_text_error = []
      if (validation.banWords(this.setsumeikai3_text)) this.errors.setsumeikai3_text_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai3_text, 4000)) this.errors.setsumeikai3_text_error.push('2000文字以内で入力してください。')
    },
    setsumeikai4_name: () => {
      this.errors.setsumeikai4_name_error = []
      if (validation.banWords(this.setsumeikai4_name)) this.errors.setsumeikai4_name_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai4_name, 60)) this.errors.setsumeikai4_name_error.push('30文字以内で入力してください。')
      if (this.genkou_setsumeikai_details4.length > 0 && validation.require(this.setsumeikai4_name)) {
        this.errors.setsumeikai4_name_error.push('日程コードの「表示」欄にチェックを入れている場合は、フォーム名称の入力が必須です。') 
      }
    },
    setsumeikai4_period: () => {
      this.errors.setsumeikai4_period_error = []
      if (!validation.termBetween(this.setsumeikai4_period, moment(this.open_date), '20210225')) this.errors.setsumeikai4_period_error.push('掲載日から2021年2月25日までの日付を入力してください')
    },
    setsumeikai4_title: () => {
      this.errors.setsumeikai4_title_error = []
      if (validation.banWords(this.setsumeikai4_title)) this.errors.setsumeikai4_title_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai4_title, 80)) this.errors.setsumeikai4_title_error.push('40文字以内で入力してください。')
    },
    setsumeikai4_text: () => {
      this.errors.setsumeikai4_text_error = []
      if (validation.banWords(this.setsumeikai4_text)) this.errors.setsumeikai4_text_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai4_text, 4000)) this.errors.setsumeikai4_text_error.push('2000文字以内で入力してください。')
    },
    setsumeikai5_name: () => {
      this.errors.setsumeikai5_name_error = []
      if (validation.banWords(this.setsumeikai5_name)) this.errors.setsumeikai5_name_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai5_name, 60)) this.errors.setsumeikai5_name_error.push('30文字以内で入力してください。')
      if (this.genkou_setsumeikai_details5.length > 0 && validation.require(this.setsumeikai5_name)) {
        this.errors.setsumeikai5_name_error.push('日程コードの「表示」欄にチェックを入れている場合は、フォーム名称の入力が必須です。') 
      }
    },
    setsumeikai5_period: () => {
      this.errors.setsumeikai5_period_error = []
      if (!validation.termBetween(this.setsumeikai5_period, moment(this.open_date), '20210225')) this.errors.setsumeikai5_period_error.push('掲載日から2021年2月25日までの日付を入力してください')
    },
    setsumeikai5_title: () => {
      this.errors.setsumeikai5_title_error = []
      if (validation.banWords(this.setsumeikai5_title)) this.errors.setsumeikai5_title_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai5_title, 80)) this.errors.setsumeikai5_title_error.push('40文字以内で入力してください。')
    },
    setsumeikai5_text: () => {
      this.errors.setsumeikai5_text_error = []
      if (validation.banWords(this.setsumeikai5_text)) this.errors.setsumeikai5_text_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.maxLength(this.setsumeikai5_text, 4000)) this.errors.setsumeikai5_text_error.push('2000文字以内で入力してください。')
    },
    genkou_setsumeikai_details: () => {
      this.errors.genkou_setsumeikai_details_error = []
      if(this.genkou_setsumeikai_details > 15) this.errors.genkou_setsumeikai_details_error = ['5説明会合計15日程以内で選択してください。']
    }
  }
}
