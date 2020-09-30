import Validation from '../../validation'
import { Valid, commonValid } from './common'
const validation = new Validation()

export default function() {
  return {
    corp_name: () => {
      this.errors.corp_name_error = Valid.simple((validation.require(this.corp_name)), '必須項目です。', [])
        .simple((validation.maxLength(this.corp_name, 120)), '60文字以内で入力してください。')
        .simple((validation.banWords(this.corp_name)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    corp_name_note: () => {
      this.errors.corp_name_note_error = Valid.simple((validation.maxLength(this.corp_name_note, 60)), '30文字以内で入力してください。', [])
        .simple((validation.banWords(this.corp_name_note)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    corp_name_kana: () => {
      this.errors.corp_name_kana_error = Valid.simple((validation.require(this.corp_name_kana)), '必須項目です。', [])
        .simple((validation.maxLength(this.corp_name_kana, 120)), '60文字以内で入力してください。')
        .simple((validation.kata(this.corp_name_kana)) ,'全角カタカナで入力してください。')
        .simple((validation.banWords(this.corp_name_kana)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    search_corp1: () => {
      this.errors.search_corp1_error = Valid.simple((validation.maxLength(this.search_corp1, 60)), '30文字以内で入力してください。', [])
        .simple((validation.kana(this.search_corp1)), '全角ひらがなで入力してください。')
        .simple((validation.banWords(this.search_corp1)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    search_corp2: () => {
      this.errors.search_corp2_error = Valid.simple((validation.eisu(this.search_corp2)), '英数字で入力してください。', [])
        .simple((validation.maxLength(this.search_corp2, 60)), '30文字以内で入力してください。')
        .simple((validation.banWords(this.search_corp2)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    search_corp3: () => {
      this.errors.search_corp3_error = Valid.simple((validation.maxLength(this.search_corp3, 60)), '30文字以内で入力してください。', [])
        .simple((validation.banWords(this.search_corp3)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    search_corp4: () => {
      this.errors.search_corp4_error = Valid.simple((validation.maxLength(this.search_corp4, 60)), '30文字以内で入力してください。', [])
        .simple((validation.banWords(this.search_corp4)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    search_corp5: () => {
      this.errors.search_corp5_error = Valid.simple((validation.maxLength(this.search_corp5, 60)), '30文字以内で入力してください。', [])
        .simple((validation.banWords(this.search_corp5)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    jigyo: () => {
      this.errors.jigyo_error = Valid.simple((validation.maxLength(this.jigyo, 400)), '200文字以内で入力してください。', [])
        .simple((validation.banWords(this.jigyo)), '使用できない文字が入力されているので、削除・修正してください').get()
    },
    job: () => {
      this.errors.job_error = Valid.simple((validation.maxLength(this.job, 400)), '200文字以内で入力してください。', [])
        .simple((validation.banWords(this.job)), '使用できない文字が入力されているので、削除・修正してください').get()
    },

    cdata1_title: () => commonValid.cdata_title.apply(this, [1]),
    cdata1: () => commonValid.cdata.apply(this, [1]),
    cdata2_title: () => commonValid.cdata_title.apply(this, [2]),
    cdata2: () => commonValid.cdata.apply(this, [2]),
    cdata3_title: () => commonValid.cdata_title.apply(this, [3]),
    cdata3: () => commonValid.cdata.apply(this, [3]),
    cdata4_title: () => commonValid.cdata_title.apply(this, [4]),
    cdata4: () => commonValid.cdata.apply(this, [4]),
    cdata5_title: () => commonValid.cdata_title.apply(this, [5]),
    cdata5: () => commonValid.cdata.apply(this, [5]),
    cdata6_title: () => commonValid.cdata_title.apply(this, [6]),
    cdata6: () => commonValid.cdata.apply(this, [6]),
    cdata7_title: () => commonValid.cdata_title.apply(this, [7]),
    cdata7: () => commonValid.cdata.apply(this, [7]),
    cdata8_title: () => commonValid.cdata_title.apply(this, [8]),
    cdata8: () => commonValid.cdata.apply(this, [8]),
    cdata9_title: () => commonValid.cdata_title.apply(this, [9]),
    cdata9: () => commonValid.cdata.apply(this, [9]),
    cdata10_title: () => commonValid.cdata_title.apply(this, [10]),
    cdata10: () => commonValid.cdata.apply(this, [10]),
    cdata11_title: () => commonValid.cdata_title.apply(this, [11]),
    cdata11: () => commonValid.cdata.apply(this, [11]),
    cdata12_title: () => commonValid.cdata_title.apply(this, [12]),
    cdata12: () => commonValid.cdata.apply(this, [12]),
    cdata13_title: () => commonValid.cdata_title.apply(this, [13]),
    cdata13: () => commonValid.cdata.apply(this, [13]),
    cdata14_title: () => commonValid.cdata_title.apply(this, [14]),
    cdata14: () => commonValid.cdata.apply(this, [14]),
    cdata15_title: () => commonValid.cdata_title.apply(this, [15]),
    cdata15: () => commonValid.cdata.apply(this, [15]),

    is_stocked: () => {
      this.errors.is_stocked_error = Valid.simple(validation.require(this.is_stocked), '必須項目です。', []).get()
    },
    employee_number: () => {
      this.errors.employee_number_error = Valid.simple(validation.notZero(this.employee_number), '必須項目です。', []).get()
    },
    search_group_main: () => {
      this.errors.search_group_main_error = Valid.simple(validation.require(this.search_group_main), 'メイン/区分は必須項目です。', []).get()
    },
    search_industry_main: () => {
      this.errors.search_industry_main_error = Valid.simple(validation.require(this.search_industry_main), 'メイン/業種は必須項目です。', []).get()
      this.same_industory_invalid()
    },
    search_group_sub1: () => {
      this.errors.search_group_sub1_error = []
      if(this.search_group_sub1 != '') this.errors.search_group_sub2_error = this.errors.search_group_sub2_error.filter(v => v != '【業種】を詰めて選択してください。')
      if(this.search_group_sub1 == '' && this.search_group_sub2 != '') this.errors.search_group_sub2_error.push('【業種】を詰めて選択してください。')
    },
    search_industry_sub1: () => {
      this.errors.search_industry_sub1_error = Valid.simple((this.search_group_sub1 != '' && validation.require(this.search_industry_sub1)), 'サブ/業種は必須項目です。', []).get()
      this.same_industory_invalid()
    },
    search_group_sub2: () => {
      this.errors.search_group_sub2_error = []
      if(this.search_group_sub1 == '' && this.search_group_sub2 != '') this.errors.search_group_sub2_error.push('【業種】を詰めて選択してください。')
      if(this.search_group_sub2 != '') this.errors.search_group_sub3_error = this.errors.search_group_sub3_error.filter(v => v != '【業種】を詰めて選択してください。')
      if(this.search_group_sub2 == '' && this.search_group_sub3 != '') this.errors.search_group_sub3_error.push('【業種】を詰めて選択してください。')
    },
    search_industry_sub2: () => {
      this.errors.search_industry_sub2_error = Valid.simple((this.search_group_sub2 != '' && validation.require(this.search_industry_sub2)), 'サブ/業種は必須項目です。', []).get()
      this.same_industory_invalid()
    },
    search_group_sub3: () => {
      this.errors.search_group_sub3_error = []
      if(this.search_group_sub2 == '' && this.search_group_sub3 != '') this.errors.search_group_sub3_error.push('【業種】を詰めて選択してください。')
      if(this.search_group_sub3 != '') this.errors.search_group_sub4_error = this.errors.search_group_sub4_error.filter(v => v != '【業種】を詰めて選択してください。')
      if(this.search_group_sub3 == '' && this.search_group_sub4 != '') this.errors.search_group_sub4_error.push('【業種】を詰めて選択してください。')
    },
    search_industry_sub3: () => {
      this.errors.search_industry_sub3_error = Valid.simple((this.search_group_sub3 != '' && validation.require(this.search_industry_sub3)), 'サブ/業種は必須項目です。', []).get()
      this.same_industory_invalid()
    },
    search_group_sub4: () => {
      this.errors.search_group_sub4_error = Valid.simple((this.search_group_sub3 == '' && this.search_group_sub4 != ''), '【業種】を詰めて選択してください。', []).get()
    },
    search_industry_sub4: () => {
      this.errors.search_industry_sub4_error = Valid.simple((this.search_group_sub4 != '' && validation.require(this.search_industry_sub4)), 'サブ/業種は必須項目です。', []).get()
      this.same_industory_invalid()
    },
    head_office1: () => {
      this.errors.head_office1_error = Valid.simple(validation.notZero(this.head_office1), '必須項目です。', []).get()
    },
  }
}