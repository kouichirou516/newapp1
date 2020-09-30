import $ from 'jquery'
import _ from 'lodash'
import Validation from '../validation'
import base from './recruit_info_one/base'

const validation = new Validation()

window.recruitInfoOnes = _.merge(base, {
  mounted: function () {
    $(window).on('beforeunload', () => {return 'このページから移動しますか？入力したデータは保存されません。'})
    if (!this.requirement_title_6 == '' || !this.requirement_title_7 == '' || !this.requirement_title_8 == '' || !this.requirement_title_9 == '' || !this.requirement_title_10 == '') {
      this.cdata_on = true
    }
    if (!this.welfare_title_11 == '' || !this.welfare_title_12 == '' || !this.welfare_title_13 == '' || !this.welfare_title_14 == '' || !this.welfare_title_15 == '') {
      this.cdata_on2 = true
    }
  },
  computed: {
    submit_sheat_checks() {
      const inputs = [
        this.submit_sheat_open_es,
        this.submit_sheat_entry_sheat,
        this.submit_sheat_resume,
        this.submit_sheat_score_sheat,
        this.submit_sheat_others]
      return inputs.filter(v => { return v == 1}).length > 0
    },
    submit_sheat_checks_2() {
      const inputs = [
        this.submit_sheat_open_es_2,
        this.submit_sheat_entry_sheat_2,
        this.submit_sheat_resume_2,
        this.submit_sheat_score_sheat_2,
        this.submit_sheat_others_2]
      return inputs.filter(v => { return v == 1}).length > 0
    },

    requiredCountGenko1() {
      if (!this.model_case_name || this.errors.model_case_name_error.length > 0) return 0
      return 1
    },
    requiredCountGenko2() {
      if (!this.recruit_amount_this_year || this.errors.recruit_amount_this_year_error.length > 0) return 0
      return 1
    },
    requiredCountGenko3() {
      if (!this.recruit_amount_last_year || this.errors.recruit_amount_last_year_error.length > 0) return 0
      return 1
    },
    requiredCountGenko4() {
      if(this.deadline_web_pre_entry > 10 && this.errors.deadline_web_pre_entry_error.length == 0) {
        if(this.deadline_web_pre_entry_term && this.errors.deadline_web_pre_entry_term_error.length == 0){
          return 1
        }
      }else if(this.deadline_web_pre_entry && this.errors.deadline_web_pre_entry_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko5() {
      if(this.deadline_entry_sheat > 10 && this.errors.deadline_entry_sheat_error.length == 0) {
        if(this.deadline_entry_sheat_term && this.errors.deadline_entry_sheat_term_error.length == 0){
          return 1
        }
      }else if(this.deadline_entry_sheat && this.errors.deadline_entry_sheat_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko6() {
      if(this.term_seminar_date > 10 && this.errors.term_seminar_date_error.length == 0) {
        if(this.term_seminar_date_term && this.errors.term_seminar_date_term_error.length == 0){
          return 1
        }
      }else if(this.term_seminar_date && this.errors.term_seminar_date_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko7() {
      if(this.term_interview_date > 10 && this.errors.term_interview_date_error.length == 0) {
        if(this.term_interview_date_term && this.errors.term_interview_date_term_error.length == 0){
          return 1
        }
      }else if(this.term_interview_date && this.errors.term_interview_date_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko8() {
      if(this.term_offering_date > 10 && this.errors.term_offering_date_error.length == 0) {
        if(this.term_offering_date_term && this.errors.term_offering_date_term_error.length == 0){
          return 1
        }
      }else if(this.term_offering_date && this.errors.term_offering_date_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko9() {
      if (!this.submit_sheat_is_needed || this.errors.submit_sheat_is_needed_error.length > 0) return 0
      return 1
    },
    requiredCountGenko10() {
      if (!this.salary_model || this.errors.salary_model_error.length > 0) return 0
      return 1
    },
    requiredCountGenko11() {
      if (!this.month_salary_example || this.errors.month_salary_example_error.length > 0) return 0
      return 1
    },
    requiredCountGenko12() {
      if (!this.model_case_name_2 || this.errors.model_case_name_2_error.length > 0) return 0
      return 1
    },
    requiredCountGenko13() {
      if (!this.recruit_amount_this_year_2 || this.errors.recruit_amount_this_year_2_error.length > 0) return 0
      return 1
    },
    requiredCountGenko14() {
      if (!this.recruit_amount_last_year_2 || this.errors.recruit_amount_last_year_2_error.length > 0) return 0
      return 1
    },
    requiredCountGenko15() {
      if(this.deadline_web_pre_entry_2 > 10 && this.errors.deadline_web_pre_entry_2_error.length == 0) {
        if(this.deadline_web_pre_entry_term_2 && this.errors.deadline_web_pre_entry_term_2_error.length == 0){
          return 1
        }
      }else if(this.deadline_web_pre_entry_2 && this.errors.deadline_web_pre_entry_2_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko16() {
      if(this.deadline_entry_sheat_2 > 10 && this.errors.deadline_entry_sheat_2_error.length == 0) {
        if(this.deadline_entry_sheat_term_2 && this.errors.deadline_entry_sheat_term_2_error.length == 0){
          return 1
        }
      }else if(this.deadline_entry_sheat_2 && this.errors.deadline_entry_sheat_2_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko17() {
      if(this.term_seminar_date_2 > 10 && this.errors.term_seminar_date_2_error.length == 0) {
        if(this.term_seminar_date_term_2 && this.errors.term_seminar_date_term_2_error.length == 0){
          return 1
        }
      }else if(this.term_seminar_date_2 && this.errors.term_seminar_date_2_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko18() {
      if(this.term_interview_date_2 > 10 && this.errors.term_interview_date_2_error.length == 0) {
        if(this.term_interview_date_term_2 && this.errors.term_interview_date_term_2_error.length == 0){
          return 1
        }
      }else if(this.term_interview_date_2 && this.errors.term_interview_date_2_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko19() {
      if(this.term_offering_date_2 > 10 && this.errors.term_offering_date_2_error.length == 0) {
        if(this.term_offering_date_term_2 && this.errors.term_offering_date_term_2_error.length == 0){
          return 1
        }
      }else if(this.term_offering_date_2 && this.errors.term_offering_date_2_error.length == 0){
        return 1
      }
      return 0
    },
    requiredCountGenko20() {
      if (!this.submit_sheat_is_needed_2 || this.errors.submit_sheat_is_needed_2_error.length > 0) return 0
      return 1
    },
    requiredCountGenko21() {
      if (!this.salary_model_2 || this.errors.salary_model_2_error.length > 0) return 0
      return 1
    },
    requiredCountGenko22() {
      if (!this.month_salary_example_2 || this.errors.month_salary_example_2_error.length > 0) return 0
      return 1
    },
    
    requiredCountGenko23() {
      if (this.requirement_description_1 && this.errors.requirement_description_1_error.length == 0) return 1
      return 0
    },
    requiredCountGenko24() {
      if (this.requirement_description_2 && this.errors.requirement_description_2_error.length == 0) return 1
      return 0
    },
    requiredCountGenko25() {
      if (this.requirement_description_3 && this.errors.requirement_description_3_error.length == 0) return 1
      return 0
    },
    
    requiredCountGenko26() {
      if (this.welfare_description_1 && this.errors.welfare_description_1_error.length == 0) return 1
      return 0
    },
    requiredCountGenko27() {
      if (this.welfare_description_2 && this.errors.welfare_description_2_error.length == 0) return 1
      return 0
    },
    requiredCountGenko28() {
      if (this.welfare_description_3 && this.errors.welfare_description_3_error.length == 0) return 1
      return 0
    },
    requiredCountGenko29() {
      if (this.welfare_description_4 && this.errors.welfare_description_4_error.length == 0) return 1
      return 0
    },
    requiredCountGenko30() {
      if (this.welfare_description_5 && this.errors.welfare_description_5_error.length == 0) return 1
      return 0
    },
    requiredCountGenko31() {
      if (this.welfare_description_6 && this.errors.welfare_description_6_error.length == 0) return 1
      return 0
    },
    requiredCountGenko32() {
      if (this.welfare_description_7 && this.errors.welfare_description_7_error.length == 0) return 1
      return 0
    },

    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1, this.requiredCountGenko2, this.requiredCountGenko3,
        this.requiredCountGenko4, this.requiredCountGenko5, this.requiredCountGenko6,
        this.requiredCountGenko7, this.requiredCountGenko8, this.requiredCountGenko9,
        this.requiredCountGenko10, this.requiredCountGenko23,
        this.requiredCountGenko24, this.requiredCountGenko25, this.requiredCountGenko26,
        this.requiredCountGenko27, this.requiredCountGenko28, this.requiredCountGenko29,
        this.requiredCountGenko30, this.requiredCountGenko31, this.requiredCountGenko32
      ]
      if(this.salary_model !== "8" && this.salary_model !== ""){
        targetRequired.push(
          this.requiredCountGenko11
        )
      }
      if(this.salary_model_2 !== "8" && this.salary_model_2 !== ""){
        targetRequired.push(
          this.requiredCountGenko22
        )
      }
      
      if(this.is_model_2 == 1){
        targetRequired.push(
          this.requiredCountGenko12, this.requiredCountGenko13, this.requiredCountGenko14,
          this.requiredCountGenko15, this.requiredCountGenko16, this.requiredCountGenko17,
          this.requiredCountGenko18, this.requiredCountGenko19, this.requiredCountGenko20,
          this.requiredCountGenko21
        )
        
      }
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
  methods: {
    changeTaigu: function (ev, num) {
      const taigu_checks = Object.assign([], this.taigu_checks)
      taigu_checks[num] = ev.target.checked ? 1 : 0
      this.taigu_checks = taigu_checks
    },
    changeTaigu_2: function (ev, num) {
      const taigu_2_checks = Object.assign([], this.taigu_2_checks)
      taigu_2_checks[num] = ev.target.checked ? 1 : 0
      this.taigu_2_checks = taigu_2_checks
    },
    showTerm: function (target) {
      return !['', '1', '2', '3', '4'].includes(target)
    },
    showSalary: function (target) {
      return !['', '8'].includes(target)
    },
    // imgChange: function (evt) {
    //   let imgFile = evt.target.files[0]
    //   validation.image(imgFile, 204800).then(([fileFlg, imageSrc]) => {
    //     if (!fileFlg) {
    //       this.errors.audition_border_image_error = ['形式「.jpg」200KB以下でアップロードしてください。<br>\n' +
    //       'OK：　.jpg<br>\n' +
    //       'NG：　.JPG　.JPEG　.jpeg']
    //       this.uploadedImage = ''
    //       this.imagefilename = ''
    //       evt.target.value = ''
    //     } else {
    //       this.errors.audition_border_image_error = []
    //       this.uploadedImage = imageSrc
    //       this.imagefilename = imgFile.name
    //     }
    //   })
    // },
    imgChange: function (evt) {
      if ( ! evt.target.files[0] ){
        return;
      }   
      let image = new Image();
      let reader = new FileReader();
      reader.onloadend = () => {
        image.src = reader.result;
        image.onload =  () => {
          if (image.naturalWidth > 320 || image.naturalHeight > 240) {
            this.errors.audition_border_image_error = ['形式「.jpg」サイズ：横320pixel × 縦240pixel以下でアップロードしてください。<br>\n' +
            'OK：　.jpg<br>\n' +
            'NG：　.JPG　.JPEG　.jpeg']
            this.uploadedImage = ''
            this.imagefilename = ''
            evt.target.value = ''
          } else {
            this.errors.audition_border_image_error = []
            this.uploadedImage = image.src
            this.imagefilename = evt.target.files[0].name
          }

        }   
      }   
      reader.readAsDataURL(evt.target.files[0]);
    }   
  },
  watch: {
    taigu_checks: function () {
      this.validate('taigu_checks')
    },
    taigu_2_checks: function () {
      this.validate('taigu_2_checks')
    },
  }
})
