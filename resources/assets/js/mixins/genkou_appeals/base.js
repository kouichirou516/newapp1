import $ from 'jquery'
import _ from 'lodash'
import validate from './validate'
import Vue from 'vue'
// import Valid from './valid'

export default {
  mounted() {
    $(window).on('beforeunload', () => {return 'このページから移動しますか？入力したデータは保存されません。'})
  },
  computed: {
    hasError() {
      var errors = 0
      for(let v in this.errors) {
        if(this.errors[v].length) errors++
      }
      return !!errors
    }
  },
  filters: {
    count: function (value) {
      return encodeURIComponent(value).replace(/%../g,"x").length
    },
    removeBr: function(value){
      return value.replace(/\r?\n/g,'')
    }
  },
  methods: {
    count(value) {
      return encodeURIComponent(value).replace(/%../g,"x").length
    },
    tmpSave: function(e){
      e.preventDefault()
      $(window).off('beforeunload')
      $('.status').val(0)
      $('.form-wrapper').submit()
    },
    allSave: function(e){
      e.preventDefault()
      this.validate_all()
      if(!this.hasError){
        $(window).off('beforeunload')
        Vue.nextTick(function () {
          $('.form-wrapper input').each(function (index) {
            if ($(this).prop('disabled')) {
              $(this).prop('disabled', false).val('');  
            }
          });
          $('.form-wrapper select').each(function (index) {
            if ($(this).prop('disabled')) {
              $(this).prop('disabled', false).val('');
            }
          });
          $('.form-wrapper textarea').each(function (index) {
            if ($(this).prop('disabled')) {
              $(this).prop('disabled', false).val('');
            }
          });
          $('.status').val(1)
          $('.form-wrapper').submit()
        })
      }else {
        Vue.nextTick(function () {
          if($('.validation-error:visible').length > 0) {
            const scrollTop = $('.validation-error:visible').eq(0).parent().offset().top
            $('body, html').animate({scrollTop: scrollTop + 'px'}, 300)
          }
        })
      }
    },
    //IEのtextarea+v-modelバグ対策
    onPaste: function(e){
      Vue.nextTick(() => {
        this[e.target.name] = e.target.value
      })
    },
    changeTextarea: function(e){
      Vue.nextTick(() => {
        this[e.target.name] = e.target.value
      })
    },
    validate: function(type){
      const method = validate.apply(this)
      if(type) {
        if(method[type]) method[type]()
      }else {
        for(let i in method) {
          if (method[i]) method[i]()
        }
      }

      // const valid = new Valid(this)
      // let errors = {}
      // if(type) {
      //   errors = valid.validate(type)
      // }else {
      //   errors = valid.validateAll()
      // }
      // if(_.isEmpty(errors)) {
      //   this.errors[type + "_error"] = []
      // }else {
      //   for(let i in errors) {
      //     this.errors[i + "_error"] = errors[i]
      //   }
      // }

    },
    validate_all() {
      this.validate()
    }
  }
}