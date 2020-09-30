import _ from 'lodash'
import $ from 'jquery'
import base from './genkou_kaishajouhous/base'

window.genkouKaishajouhousMixin = _.merge(base, {
  mounted: function () {
    $(window).on('beforeunload', () => {return 'このページから移動しますか？入力したデータは保存されません。'})
    if (this.search_group_main) this.search_industry_main_options[1] = this.sm_bcd_all[this.search_group_main]
    if (this.search_group_sub1) this.search_industry_main_options[2] = this.sm_bcd_all[this.search_group_sub1]
    if (this.search_group_sub2) this.search_industry_main_options[3] = this.sm_bcd_all[this.search_group_sub2]
    if (this.search_group_sub3) this.search_industry_main_options[4] = this.sm_bcd_all[this.search_group_sub3]
    if (this.search_group_sub4) this.search_industry_main_options[5] = this.sm_bcd_all[this.search_group_sub4]
    if (this.search_group_main == 0) this.search_group_main = ''
    if (this.search_group_sub1 == 0) this.search_group_sub1 = ''
    if (this.search_group_sub2 == 0) this.search_group_sub2 = ''
    if (this.search_group_sub3 == 0) this.search_group_sub3 = ''
    if (this.search_group_sub4 == 0) this.search_group_sub4 = ''
    this.is_featured1 = !!~~this.is_featured1
    this.is_featured2 = !!~~this.is_featured2
    this.is_featured3 = !!~~this.is_featured3
    this.is_featured4 = !!~~this.is_featured4
    this.is_featured5 = !!~~this.is_featured5
    this.is_featured6 = !!~~this.is_featured6

    if (!this.cdata11_title == '' || !this.cdata12_title == '' || !this.cdata13_title == '' || !this.cdata14_title == '' || !this.cdata15_title == '') {
      this.cdata_on = true
    }
  },
  computed: {
    search_industry_subs() {
      const arr = [
        this.search_group_sub1 && this.search_industry_sub1 ? this.sm_bcd_all[this.search_group_sub1][this.search_industry_sub1] : '',
        this.search_group_sub2 && this.search_industry_sub2 ? this.sm_bcd_all[this.search_group_sub2][this.search_industry_sub2] : '',
        this.search_group_sub3 && this.search_industry_sub3 ? this.sm_bcd_all[this.search_group_sub3][this.search_industry_sub3] : '',
        this.search_group_sub4 && this.search_industry_sub4 ? this.sm_bcd_all[this.search_group_sub4][this.search_industry_sub4] : '',
      ]
      const result = arr.filter(v => {
        return v
      })
      return result.join(' / ')
    },
    requiredCountGenko1() {
      if (this.corp_name && this.errors.corp_name_error.length == 0) return 1
      return 0
    },
    requiredCountGenko2() {
      if (this.corp_name_kana && this.errors.corp_name_kana_error.length == 0) return 1
      return 0
    },
    requiredCountGenko3() {
      if (this.is_stocked && this.errors.is_stocked_error.length == 0) return 1
      return 0
    },
    requiredCountGenko4() {
      if (this.employee_number && this.errors.employee_number_error.length == 0) return 1
      return 0
    },
    requiredCountGenko5() {
      if (this.search_group_main && this.search_industry_main &&
        this.errors.search_industry_main_error.length == 0 &&
        this.errors.search_group_main_error.length == 0) {
        return 1
      }
      return 0
    },
    requiredCountGenko6() {
      if (this.head_office1 >= 1 && this.errors.head_office1_error.length == 0) return 1
      return 0
    },
    requiredCountGenko7() {
      if (this.cdata1 && this.errors.cdata1_error.length == 0) return 1
      return 0
    },
    requiredCountGenko8() {
      if (this.cdata2 && this.errors.cdata2_error.length == 0) return 1
      return 0
    },
    requiredCountGenko9() {
      if (this.cdata3 && this.errors.cdata3_error.length == 0) return 1
      return 0
    },
    requiredCountGenko10() {
      if (this.cdata4 && this.errors.cdata5_error.length == 0) return 1
      return 0
    },
    requiredCountGenko11() {
      if (this.cdata5 && this.errors.cdata5_error.length == 0) return 1
      return 0
    },
    requiredCountGenko12() {
      if (this.cdata6 && this.errors.cdata6_error.length == 0) return 1
      return 0
    },
    requiredCountGenko13() {
      if (this.cdata7 && this.errors.cdata7_error.length == 0) return 1
      return 0
    },
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1, this.requiredCountGenko2, this.requiredCountGenko3,
        this.requiredCountGenko4, this.requiredCountGenko5, this.requiredCountGenko6,
        this.requiredCountGenko7, this.requiredCountGenko8, this.requiredCountGenko9,
        this.requiredCountGenko10, this.requiredCountGenko11, this.requiredCountGenko12,
        this.requiredCountGenko13
      ]
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
  methods: {
    change_search_group: function (target, num, industory) {
      this.search_industry_main_options[num] = target ? this.sm_bcd_all[target] :  ''
      this[industory] = ''
      if(num == 1) {
        this.errors.search_industry_main_error = []
      }else {
        this.errors[`search_industry_sub${num - 1}_error`] = []
      }
    },
    //業種かぶりチェック
    same_industory_invalid: function(){
      const insustories = [this.search_industry_main, this.search_industry_sub1, this.search_industry_sub2, this.search_industry_sub3, this.search_industry_sub4]
      const sameValue = _.compact(insustories.filter(function (x, i, self) {
        return self.indexOf(x) === i && i !== self.lastIndexOf(x)
      }))
      if(sameValue.length > 0) {
        this.errors.search_industry_same = '【業種】の選択が重複しているので、修正してください。'
      }else {
        this.errors.search_industry_same = ''
      }
    },
    cdata_toggle: function (e) {
      this.cdata_on = true
      e.preventDefault()
    },
  }
})
