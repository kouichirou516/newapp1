import Validation from '../../validation'
import { Valid } from './common'
const validation = new Validation()

export default function() {
  return {
    category1: () => {
      this.errors.category1_error = Valid.simple(validation.require(this.category1), 'カテゴリを選択してください。', []).get()
    },
    category2: () => {
      this.errors.category2_error = []
      if(this.catch2 || this.text2 || this.image2 && !this.image2_delete) {
        this.errors.category2_error = Valid.simple(validation.require(this.category2), 'カテゴリを選択してください。', []).get()
      }
    },
    category3: () => {
      this.errors.category3_error = []
      if(this.catch3 || this.text3 || this.image3 && !this.image3_delete) {
        this.errors.category3_error = Valid.simple(validation.require(this.category3), 'カテゴリを選択してください。', []).get()
      }
    },
    catch1: () => {
      this.errors.catch1_error = Valid.simple(validation.banWords(this.catch1), '使用できない文字が入力されているので、削除・修正してください', [])
        .simple(validation.require(this.catch1), '必須項目です。')
        .simple(validation.maxLength(this.catch1, 60), '30文字以内で入力してください。').get()
    },
    catch2: () => {
      this.errors.catch2_error = []
      if(this.category2 || this.text2 || this.image2 && !this.image2_delete) {
        this.errors.catch2_error =Valid.simple(validation.banWords(this.catch2), '使用できない文字が入力されているので、削除・修正してください', [])
          .simple(validation.require(this.catch2), '必須項目です。')
          .simple(validation.maxLength(this.catch2, 60), '30文字以内で入力してください。').get()
      }
    },
    catch3: () => {
      this.errors.catch3_error = []
      if(this.category3 || this.text3 || this.image3 && !this.image3_delete) {
        this.errors.catch3_error = Valid.simple(validation.banWords(this.catch3), '使用できない文字が入力されているので、削除・修正してください', [])
          .simple(validation.require(this.catch3), '必須項目です。')
          .simple(validation.maxLength(this.catch3, 60), '30文字以内で入力してください。').get()
      }
    },
    text1: () => {
      this.errors.text1_error = Valid.simple(validation.banWords(this.text1), '使用できない文字が入力されているので、削除・修正してください', [])
        .simple(validation.require(this.text1), '必須項目です。')
        .simple(validation.maxLength(this.text1.replace(/\r?\n/g,''), 600), '300文字以内で入力してください。').get()
    },
    text2: () => {
      this.errors.text2_error =[]
      if(this.category2 || this.catch2 || this.image2 && !this.image2_delete) {
        this.errors.text2_error = Valid.simple(validation.banWords(this.text2), '使用できない文字が入力されているので、削除・修正してください', [])
          .simple(validation.require(this.text2), '必須項目です。')
          .simple(validation.maxLength(this.text2.replace(/\r?\n/g, ''), 600), '300文字以内で入力してください。').get()
      }
    },
    text3: () => {
      this.errors.text3_error = []
      if(this.category3 || this.catch3 || this.image3 && !this.image3_delete) {
        this.errors.text3_error = Valid.simple(validation.banWords(this.text3), '使用できない文字が入力されているので、削除・修正してください', [])
          .simple(validation.require(this.text3), '必須項目です。')
          .simple(validation.maxLength(this.text3.replace(/\r?\n/g, ''), 600), '300文字以内で入力してください。').get()
      }
    },
    image1: () => {
      this.errors.image1_error = Valid.simple((!this.image1 && !this.uploadedImage1), '形式「.jpg」でアップロードしてください。<br>\n' +
        'OK：　.jpg<br>\n' +
        'NG：　.JPG　.JPEG　.jpeg', []).get()
    },
    image2: () => {
      this.errors.image2_error = []
      if(this.category2 || this.catch2 || this.text2) {
        this.errors.image2_error = Valid.simple((!this.image2 && !this.uploadedImage2), '形式「.jpg」でアップロードしてください。<br>\n' +
          'OK：　.jpg<br>\n' +
          'NG：　.JPG　.JPEG　.jpeg', []).get()
      }
    },
    image3: () => {
      this.errors.image3_error = []
      if(this.category3 || this.catch3 || this.text3) {
        this.errors.image3_error = Valid.simple((!this.image3 && !this.uploadedImage3), '形式「.jpg」でアップロードしてください。<br>\n' +
          'OK：　.jpg<br>\n' +
          'NG：　.JPG　.JPEG　.jpeg', []).get()
      }
    }
  }
}