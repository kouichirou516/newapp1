import _ from 'lodash'
import base from './genkou_wess/base'

window.genkouWess = _.merge(base, {
  computed: {
    requiredCountGenko1() {
      return ~~(this.form_name && this.errors.form_name_error.length == 0)
    },
    requiredCountGenko2() {
      return ~~(this.is_entry_accept && this.errors.is_entry_accept_error.length == 0)
    },
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1, this.requiredCountGenko2
      ]
      this.allRequiredCount = targetRequired.length

      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  }
})