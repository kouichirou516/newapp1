import _ from 'lodash'
import $ from 'jquery'
import Validation from '../validation'

const validation = new Validation()

import base from './recruit_info_three/base'

window.recruitInfoThree = _.merge(base, {
  mounted() {
    $(window).on('beforeunload', () => {return 'このページから移動しますか？入力したデータは保存されません。'})
    if (!this.refer_title_6 == '' || !this.refer_title_7 == '' || !this.refer_title_8 == '' || !this.refer_title_9 == '' || !this.refer_title_10 == '') {
      this.cdata_on = true
    }
  },
  methods: {
    imgChange: function (evt) {
      let imgFile = evt.target.files[0]
      validation.image(imgFile).then(([fileFlg, imageSrc]) => {
        if (!fileFlg) {
          this.errors.human_division_picture_error = ['形式「.jpg」でアップロードしてください。<br>\n' +
          'OK：　.jpg<br>\n' +
          'NG：　.JPG　.JPEG　.jpeg']
          this.uploadedImage = ''
          this.imagefilename = ''
          evt.target.value = ''
        } else {
          this.errors.human_division_picture_error = []
          this.uploadedImage = imageSrc
          this.imagefilename = imgFile.name
        }
      })
    },
  },
  computed: {
    refer_title() {
      if(
        this.refer_title_1 || this.refer_description_1 ||
        this.refer_title_2 || this.refer_description_2 ||
        this.refer_title_3 || this.refer_description_3 ||
        this.refer_title_4 || this.refer_description_4 ||
        this.refer_title_5 || this.refer_description_5 ||
        this.refer_title_6 || this.refer_description_6 ||
        this.refer_title_7 || this.refer_description_7 ||
        this.refer_title_8 || this.refer_description_8 ||
        this.refer_title_9 || this.refer_description_9 ||
        this.refer_title_10 || this.refer_description_10
      ) {
        return true
      }
      return false
    },
    requiredCountGenko1() {
      if (!this.contact || this.errors.contact_error.length > 0) return 0
      return 1
    },
    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1
      ]
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },

  },
})
