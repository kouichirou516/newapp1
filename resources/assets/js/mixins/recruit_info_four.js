import _ from 'lodash'
import base from './recruit_info_four/base'
import { commonValid } from './recruit_info_four/common'

window.recruitInfoFour = _.merge(base, {
  methods: {
    changeJobPlaces: function(ev, num){
      this.job_place_checks = commonValid.checksHundle(this.job_place_checks, num, ev.target.checked)
    },
    changeMajor: function(ev, num){
      this.major_checks = commonValid.checksHundle(this.major_checks, num, ev.target.checked)
    },
    changeEmploymentStatus: function(ev, num){
      this.employment_status_checks = commonValid.checksHundle(this.employment_status_checks, num, ev.target.checked)
    },
    changApplicationQualifications: function(ev, num){
      this.application_qualifications_checks = commonValid.checksHundle(this.application_qualifications_checks, num, ev.target.checked)
    },
    changApplicationGuraduatedQualifications: function(ev, num){
      this.application_guraduated_qualifications_checks = commonValid.checksHundle(this.application_guraduated_qualifications_checks, num, ev.target.checked)
    },
    allCheck: function(target, end, method, e){
      const val = e.target.checked
      for(let i = 1;i <= end; i++) {
        this[target + '_' + i] = val
        if(method) this[method](e, i)
      }

    },
  },
  computed: {
    guraduated: function () {
      const start_year = Number(this.guraduated_start_year)
      const end_year = Number(this.guraduated_end_year)
      const start_month = Number(this.guraduated_start_month)
      const end_month = Number(this.guraduated_end_month)
      return { start_year, end_year, start_month, end_month }
    },
    requiredCountGenko1() {
      return ~~(this.job_place_checks.indexOf(1) != -1 && this.errors.job_place_checks_error.length == 0)
    },
    requiredCountGenko2() {
      return ~~(this.major_checks.indexOf(1) != -1 && this.errors.major_checks_error.length == 0)
    },
    requiredCountGenko3() {
      return ~~(this.employment_status_checks.indexOf(1) != -1 && this.errors.employment_status_checks_error.length == 0)
    },
    requiredCountGenko4() {
      if (this.application_qualifications_checks.indexOf(1) == -1 || this.errors.application_qualifications_checks_error.length > 0) return 0
      if(this.application_qualifications_guraduated == 1) {
        if (this.application_guraduated_qualifications_checks.indexOf(1) == -1 || this.errors.application_guraduated_qualifications_checks_error.length > 0) return 0
        if (this.guraduated_start_year == '' || this.guraduated_start_month == '' || this.guraduated_end_year == '' || this.guraduated_end_month == '' || this.errors.guraduated_error.length > 0) return 0
      }
      return 1
    },
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1, this.requiredCountGenko2, this.requiredCountGenko3, this.requiredCountGenko4
      ]
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
  watch: {
    guraduated:function () {
      this.validate('guraduated')
    },
    job_place_checks: function(){
      this.validate('job_place_checks')
    },
    major_checks: function() {
      this.validate('major_checks')
    },
    employment_status_checks: function() {
      this.validate('employment_status_checks')
    },
    application_qualifications_checks: function() {
      this.validate('application_qualifications_checks')
    },
    application_guraduated_qualifications_checks: function(){
      this.validate('application_guraduated_qualifications_checks')
    },
  }
})
