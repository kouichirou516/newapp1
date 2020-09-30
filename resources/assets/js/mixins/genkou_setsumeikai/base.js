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
    tmpSave: function(e){
      e.preventDefault()
      $(window).off('beforeunload')
      $('.status').val(0)
      $('.form-wrapper').submit()
    },
    allSave: function (e) {
      // if (window.confirm("※ご注意ください※\nWi\'sでのインターンシップ概要の掲載予約は完了していますか？\n\n※このフォームで設定した内容をリクナビに掲載するためには、\nWi\'sでのインターンシップ概要の掲載予約が必要です。\n未完了の場合は「キャンセル」を選択しページ最下部の「一時保存」ボタンを押下してください。")) {
        e.preventDefault()
        this.validate_all()
        if(!this.hasError){
          Vue.nextTick(function () {
            $(window).off('beforeunload')
            $('.status').val(1)
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
      // }
    },
    getSchedule(num) {
      var schedule_list = this.schedule_lists.filter(function(item, index) {
        if (item.id == num) return true;
      })
      
      return schedule_list[0]
    },
    onPaste: function(e){
      Vue.nextTick(() => {
        this[e.target.name] = e.target.value
      })
    },
    validate: function(type){
      const method = validate.apply(this)
      if(type) {
        if(method[type]) method[type]()
      }else {
        for(var i in method) {
          if (method[i]) method[i]()
        }
      }
    },
    validate_all() {
      this.validate()
    }
  },
}
