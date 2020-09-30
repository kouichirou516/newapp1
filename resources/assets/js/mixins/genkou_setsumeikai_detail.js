import _ from 'lodash'
import $ from 'jquery'
import base from './genkou_setsumeikai_detail/base'
import moment from 'moment'


window.genkouSetsumeikaiDetail = _.merge(base, {
  mounted() {
    if(this.created_at) this.check_id = true
  },
  computed: {
    codeZ(){
      return this.code && this.code[0] == 'Z'
    },
  },
  methods: {
    dateFormat(date) {
      return moment(date).format("YYYY-MM-DD")
    },
    toUpperCase(name) {
      this[name] = this[name].toUpperCase()
      //
      // this.validate('place')
      // this.validate('close_date')
      // this.validate('close_time')
      // this.validate('cancel_date')
      // this.validate('cancel_time')
    }
  }
})
