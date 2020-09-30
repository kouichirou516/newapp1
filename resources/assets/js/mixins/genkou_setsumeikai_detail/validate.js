import Validation from '../../validation'
const validation = new Validation()
import moment from 'moment'
import $ from 'jquery'

export default function () {
  return {
    code: (submit_flag = false) => {
      if (!submit_flag) {
        this.errors.code_error = []
      }
      if (validation.require(this.code)) this.errors.code_error.push('必須項目です。')
      if (validation.eisu(this.code)) this.errors.code_error.push('半角英数字で入力してください。')
      if (validation.digits(this.code, 4)) this.errors.code_error.push('4桁で入力してください。')
      if (!submit_flag && this.code && this.code.length == 4 && this.code_checking == false) {
        this.code_checking = true
        $.getJSON(`/companies/${this.company_id}/genkou_setsumeikai/schedule/check_code`, {
          code: this.code
        }).then(data => {
          this.code_checking = false
          if (data.is_exist) {
            this.errors.code_error.push('コード名がすでに存在しています')
          } else {
            this.check_id = true
          }
        })
      }
    },
    style: () => {
      this.errors.style_error = []
      if (validation.require(this.style)) this.errors.style_error.push('必須項目です。')
    },
    capacity: () => {
      this.errors.capacity_error = []
      if (this.is_unspecified_capacity != 1 && validation.require(this.capacity)) this.errors.capacity_error.push('必須項目です。')
      if (validation.notZero(this.capacity) || !validation.integer(this.capacity) || validation.maxLength(this.capacity, 6)) this.errors.capacity_error.push('6桁までの整数で入力してください。')
    },
    is_unspecified_capacity: () => {
      if (this.is_unspecified_capacity) {
        this.errors.capacity_error = []
      }
    },
    place: () => {
      this.errors.place_error = []
      if (!this.codeZ) {
        if (validation.require(this.place)) this.errors.place_error.push('必須項目です。')
      }
    },
    seminar_date: () => {
      this.errors.seminar_datetime_error = []
      if (!this.codeZ) {
        if (!validation.termBetween(moment(this.seminar_date).format('YYYY-MM-DD'), moment(this.open_date).format("YYYYMMDD"), '20210225')) this.errors.seminar_datetime_error.push('掲載日から2021年2月25日までの日付を入力してください')
        if (validation.require(this.seminar_date) || validation.require(moment(this.start_time).format('HH:mm'))) this.errors.seminar_datetime_error.push('必須項目です。')
      }
    },
    start_time: () => {
      this.errors.seminar_datetime_error = []
      if (!this.codeZ) {
        if (!validation.termBetween(moment(this.seminar_date).format('YYYY-MM-DD'), moment().format('YYYYMMDD'), '20210225')) this.errors.seminar_datetime_error.push('掲載日から2021年2月25日までの日付を入力してください')
        if (validation.require(this.seminar_date) || validation.require(this.start_time)) this.errors.seminar_datetime_error.push('必須項目です。')
      }
      this.errors.end_time_error = []
      if (this.end_time && !validation.timeAfter(moment(this.start_time).format('HH:mm'), moment(this.end_time).format('HH:mm'))) this.errors.end_time_error.push('終了時間は開始時間より後に設定してください。')
    },
    end_time: () => {
      this.errors.end_time_error = []
      if (moment(this.end_time).isSame(moment("00:00", "HH:mm"))) this.errors.end_time_error.push('00:00は選択できません。')
      if (this.end_time && !validation.timeAfter(moment(this.start_time).format('HH:mm'), moment(this.end_time).format('HH:mm'))) this.errors.end_time_error.push('終了時間は開始時間より後に設定してください。')
    },
    close_date: () => {
      this.errors.close_datetime_error = []
      if (moment(this.close_date).isBefore(this.open_date)) this.errors.close_datetime_error.push('掲載日以前の日程は選択できません。')
      const close_datetime = moment(moment(this.close_date).format('YYYY-MM-DD') + ' ' + moment(this.close_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
      if (!this.codeZ) {
        if (validation.require(this.close_date)) this.errors.close_datetime_error.push('必須項目です。')
        const seminar_datetime = moment(moment(this.seminar_date).format('YYYY-MM-DD') + ' ' + moment(this.start_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        if (!validation.timeSameOrAfter(close_datetime, seminar_datetime)) this.errors.close_datetime_error.push('予約締切日時は開催日時より前に設定してください。')
      } else {
        if (this.close_date && !this.cancel_date) {
          // this.errors.cancel_datetime_error.push('キャンセル締切日時を設定してください')
        } else if (!this.close_date && !this.cancel_date) {
          // if (this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください") != -1) this.errors.cancel_datetime_error.splice(this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください"), 1)
          if (this.errors.close_datetime_error.indexOf("予約締切日時を設定してください") != -1) this.errors.close_datetime_error.splice(this.errors.close_datetime_error.indexOf("予約締切日時を設定してください"), 1)
        }
        if (this.close_time && !this.close_date) {
          this.errors.close_datetime_error.push('日付を入力してください。')
        }
      }
      const cancel_datetime = moment(moment(this.cancel_date).format('YYYY-MM-DD') + ' ' + moment(this.cancel_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
      if (this.cancel_date && this.close_date) {
        if (!validation.timeSameOrAfter(close_datetime, cancel_datetime)) this.errors.close_datetime_error.push('予約締切日時はキャンセル締切日時より前に設定してください。')
      }
    },
    close_time: () => {
      this.errors.close_datetime_error = []
      if (moment(this.close_date).isBefore(this.open_date)) this.errors.close_datetime_error.push('掲載日以前の日程は選択できません。')
      const close_datetime = moment(moment(this.close_date).format('YYYY-MM-DD') + ' ' + moment(this.close_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
      if (!this.codeZ) {
        if (validation.require(this.close_time)) this.errors.close_datetime_error.push('必須項目です。')
        const seminar_datetime = moment(moment(this.seminar_date).format('YYYY-MM-DD') + ' ' + moment(this.start_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        if (!validation.timeSameOrAfter(close_datetime, seminar_datetime)) this.errors.close_datetime_error.push('予約締切日時は開催日時以前に設定してください。')
      } else {
        if (this.close_time && !this.close_date) this.errors.close_datetime_error.push('日付を入力してください。')
        if (this.close_date && !this.close_time) this.errors.close_datetime_error.push('時間を入力してください。')
        if (this.close_date && !this.cancel_date) {
          // this.errors.cancel_datetime_error.push('キャンセル締切日時を設定してください')
        } else if (!this.close_date && !this.cancel_date) {
          // if (this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください") != -1) this.errors.cancel_datetime_error.splice(this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください"), 1)
          if (this.errors.close_datetime_error.indexOf("予約締切日時を設定してください") != -1) this.errors.close_datetime_error.splice(this.errors.close_datetime_error.indexOf("予約締切日時を設定してください"), 1)
        }
        if (this.close_time && !this.close_date) {
          this.errors.close_datetime_error.push('日付を入力してください。')
        }
      }
      const cancel_datetime = moment(moment(this.cancel_date).format('YYYY-MM-DD') + ' ' + moment(this.cancel_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
      if (this.cancel_date && this.close_date) {
        if (!validation.timeSameOrAfter(close_datetime, cancel_datetime)) this.errors.close_datetime_error.push('予約締切日時はキャンセル締切日時以前に設定してください。')
      }
    },
    cancel_date: () => {
      this.errors.cancel_datetime_error = []
      if (moment(this.cancel_date).isBefore(this.open_date)) this.errors.cancel_datetime_error.push('掲載日以前の日程は選択できません。')
      if (!this.codeZ) {
        if (validation.require(this.cancel_date)) this.errors.cancel_datetime_error.push('必須項目です。')
        const seminar_datetime = moment(moment(this.seminar_date).format('YYYY-MM-DD') + ' ' + '23:59', 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        const cancel_datetime = moment(moment(this.cancel_date).format('YYYY-MM-DD') + ' ' + moment(this.cancel_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        if (!validation.timeSameOrAfter(cancel_datetime, seminar_datetime)) this.errors.cancel_datetime_error.push('キャンセル締切日時は開催日の23:59までに設定してください。')
        if (this.close_time && this.close_date) this.validate('close_date')
      } else {
        if (this.cancel_date && !this.close_date) {
          // this.errors.close_datetime_error.push('予約締切日時を設定してください')
        } else if (!this.close_date && !this.cancel_date) {
          if (this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください") != -1) this.errors.cancel_datetime_error.splice(this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください"), 1)
          // if (this.errors.close_datetime_error.indexOf("予約締切日時を設定してください") != -1) this.errors.close_datetime_error.splice(this.errors.close_datetime_error.indexOf("予約締切日時を設定してください"), 1)
        }
        if (this.cancel_time && !this.cancel_date) {
          this.errors.cancel_datetime_error.push('日付を入力してください。')
        }
        if (this.close_time && this.close_date) this.validate('close_date')
      }
    },
    cancel_time: () => {
      this.errors.cancel_datetime_error = []
      if (moment(this.cancel_date).isBefore(this.open_date)) this.errors.cancel_datetime_error.push('掲載日以前の日程は選択できません。')
      if (!this.codeZ) {
        if (validation.require(this.cancel_time)) this.errors.cancel_datetime_error.push('必須項目です。')
        const seminar_datetime = moment(moment(this.seminar_date).format('YYYY-MM-DD') + ' ' + '23:59', 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        const cancel_datetime = moment(moment(this.cancel_date).format('YYYY-MM-DD') + ' ' + moment(this.cancel_time).format('HH:mm'), 'YYYY-MM-DD HH:mm').format('YYYYMMDDHHmm')
        if (!validation.timeSameOrAfter(cancel_datetime, seminar_datetime)) this.errors.cancel_datetime_error.push('キャンセル締切日時は開催日の23:59までに設定してください。')
        if (this.close_time && this.close_date) this.validate('close_date')
      } else {
        if (this.cancel_date && !this.cancel_time) this.errors.cancel_datetime_error.push('時間を入力してください。')
        if (this.cancel_date && !this.close_date) {
          // this.errors.close_datetime_error.push('予約締切日時を設定してください')
        } else if (!this.close_date && !this.cancel_date) {
          if (this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください") != -1) this.errors.cancel_datetime_error.splice(this.errors.cancel_datetime_error.indexOf("キャンセル締切日時を設定してください"), 1)
          // if (this.errors.close_datetime_error.indexOf("予約締切日時を設定してください") != -1) this.errors.close_datetime_error.splice(this.errors.close_datetime_error.indexOf("予約締切日時を設定してください"), 1)
        }
        if (this.cancel_time && !this.cancel_date) {
          this.errors.cancel_datetime_error.push('日付を入力してください。')
        }
        if (this.cancel_time && !this.cancel_date) this.errors.cancel_datetime_error.push('日付を入力してください。')
      }
    },
    description: () => {
      this.errors.description_error = []
      if (validation.banWords(this.description)) this.errors.description_error.push('使用できない文字が入力されているので、削除・修正してください')
      if (validation.require(this.description)) this.errors.description_error.push('必須項目です。')
      if (validation.maxLength(this.description, 200)) this.errors.description_error.push('100文字以内で入力してください。')
    },
  }
}