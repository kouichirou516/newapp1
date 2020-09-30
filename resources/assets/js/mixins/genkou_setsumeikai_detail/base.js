import $ from 'jquery'
import validate from './validate'
import Vue from 'vue'

export default {
  mounted() {
    $(window).on('beforeunload', () => {return 'このページから移動しますか？入力したデータは保存されません。'})
  },
  computed: {
    hasError() {
      var errors = 0
      for(let v in this.errors) {
        if(this.errors[v].length != 0) errors++
      }
      return errors != 0 ? true : false
    }
  },
  methods: {
    allSave: function(e, continuity = false){
      e.preventDefault()
      this.validate_all()
      if (!this.check_id) return false
      if(!this.hasError){
        Vue.nextTick(function () {
          $(window).off('beforeunload')
          $('.status').val(1)
          if (continuity) {
            $('.continuity').val(1)
          }
          $('.form-wrapper').submit()
        })
      }else {
        Vue.nextTick(function () {
          if($('.validation-error:visible').length > 0) {
            var scrollTop = $('.validation-error:visible').eq(0).parent().offset().top
            $('body, html').animate({scrollTop: scrollTop + 'px'}, 300)
          }
        })
      }
    },
    validate: function(type){
      const method = validate.apply(this)
      if(type) {
        if(method[type]) method[type]()
      }else {
        for(var i in method) {
          if (method[i]) method[i](true)
        }
      }
    },
    validate_all() {
      this.validate()
    }
  },
}
