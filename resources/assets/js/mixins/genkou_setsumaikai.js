import _ from 'lodash'
import $ from 'jquery'
import base from './genkou_setsumeikai/base'
import Vue from 'vue'
import moment from 'moment'

window.genkouSetsumeikai = _.merge(base, {
  mounted() {
    this.validate('genkou_setsumeikai_details')
  },
  computed: {
    requiredCountGenko1() {
      if (!this.setsumeikai1_name || this.errors.setsumeikai1_name_error.length > 0) return 0
      return 1
    },
    genkou_setsumeikai_details() {
      const count = this.genkou_setsumeikai_details1.length +
        this.genkou_setsumeikai_details2.length +
        this.genkou_setsumeikai_details3.length +
        this.genkou_setsumeikai_details4.length +
        this.genkou_setsumeikai_details5.length
      return count
    },
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1
      ]
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
  methods: {
    dateFormat(date) {
      return moment(date).format("YYYY-MM-DD")
    },
    moveConfirm: function(evt, url) {
      evt.preventDefault()
      Vue.nextTick(function () {
        $(window).off('beforeunload')
        if (window.confirm(`このままこのページを離れると入力内容が失われますがよろしいですか？
※保存する場合は、「キャンセル」を選択し、ページ最下部の「一時保存」ボタンを押下してください。
        `)) {
          location.href = url
        }
      })
    },
  }
})
