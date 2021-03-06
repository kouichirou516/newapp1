import $ from 'jquery'
import validate from './genkou_auto_replies/validate'
import Vue from 'vue'

window.genkouAutoReplies = {
  mounted() {
    $(window).on('beforeunload', () => {
      return 'このページから移動しますか？入力したデータは保存されません。'
    })
  },
  computed: {
    hasError() {
      var errors = 0
      for(let v in this.errors) {
        if(this.errors[v].length) errors++
      }
      return !!errors
    },
    requiredCountGenko2() {
      return ~~(
        this.tpl1_disabled != ''
      )
    },
    requiredCountGenko3() {
      return ~~(
        this.tpl2_disabled != ''
      )
    },
    requiredCountGenko4() {
      return ~~(
        this.tpl3_disabled != ''
      )
    },
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko2, this.requiredCountGenko3, this.requiredCountGenko4
      ]
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
  methods: {
    tmpSave: function (e) {
      e.preventDefault()
      $(window).off('beforeunload')
      $('.status').val(0)
      $('.form-wrapper').submit()
    },
    allSave: function (e) {
      e.preventDefault()
      this.validate_all()
      if (!this.hasError) {
        Vue.nextTick(function () {
          $(window).off('beforeunload')
          $('.status').val(1)
          $('.form-wrapper').submit()
        })
      } else {
        Vue.nextTick(function () {
          if($('.validation-error:visible').length > 0) {
            var scrollTop = $('.validation-error:visible').eq(0).parent().offset().top
            $('body, html').animate({scrollTop: scrollTop + 'px'}, 300)
          }
        })
      }
    },
    validate: function (type) {
      const method = validate.apply(this)
      if (type) {
        if (method[type]) method[type]()
      } else {
        for (var i in method) {
          if (method[i]) method[i]()
        }
      }
    },
    validate_all() {
      this.validate()
    }
  }
}
