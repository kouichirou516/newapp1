import _ from 'lodash'
import Validation from '../validation'
import base from './genkou_appeals/base'

const validation = new Validation()

window.genkouAppeals = _.merge(base, {
  computed: {
    requiredCountGenko1() {
      return ~~(this.category1 && this.imageUploaded(1) && this.catch1 && this.text1 &&
        this.errors.category1_error.length == 0 &&
        this.errors.image1_error.length == 0 &&
        this.errors.catch1_error.length == 0 &&
        this.errors.text1_error.length == 0
      )
    },

    filledRequired() {
      const targetRequired = [
        this.requiredCountGenko1
      ]
      this.allRequiredCount = targetRequired.length
      return targetRequired.reduce((total, v) => {return total + v}, 0)
    },
  },
  methods: {
    imageUploaded(num) {
      return this[`image${num}`] || this[`image${num}filename`]
    },
    // imgChange: function (evt, keyno) {
    //   let imgFile = evt.target.files[0]
    //   var self = this
    //   if(imgFile) {
    //     validation.image(imgFile).then(function ([fileFlg, imageSrc]) {
    //       if (keyno == 1) {
    //         if (!fileFlg) {
    //           self.errors.image1_error = []
    //           self.errors.image1_error.push('形式「.jpg」でアップロードしてください。<br>\n' +
    //             'OK：　.jpg<br>\n' +
    //             'NG：　.JPG　.JPEG　.jpeg')
    //           self.uploadedImage1 = ''
    //           self.image1filename = ''
    //           evt.target.value = ''
    //         } else {
    //           self.errors.image1_error = []
    //           self.uploadedImage1 = imageSrc
    //           self.image1filename = imgFile.name
    //         }
    //       }
    //       if (keyno == 2) {
    //         if (!fileFlg) {
    //           self.errors.image2_error = []
    //           self.errors.image2_error.push('形式「.jpg」でアップロードしてください。<br>\n' +
    //             'OK：　.jpg<br>\n' +
    //             'NG：　.JPG　.JPEG　.jpeg')
    //           self.uploadedImage2 = ''
    //           self.image2filename = ''
    //           evt.target.value = ''
    //         } else {
    //           self.errors.image2_error = []
    //           self.uploadedImage2 = imageSrc
    //           self.image2filename = imgFile.name
    //         }
    //       }
    //       if (keyno == 3) {
    //         if (!fileFlg) {
    //           self.errors.image3_error = []
    //           self.errors.image3_error.push('形式「.jpg」でアップロードしてください。<br>\n' +
    //             'OK：　.jpg<br>\n' +
    //             'NG：　.JPG　.JPEG　.jpeg')
    //           self.uploadedImage3 = ''
    //           self.image3filename = ''
    //           evt.target.value = ''
    //         } else {
    //           self.errors.image3_error = []
    //           self.uploadedImage3 = imageSrc
    //           self.image3filename = imgFile.name
    //         }
    //       }
    //     })
    //   }
    // },
    
    imgChange: function (evt, keyno) {
      if ( ! evt.target.files[0] ){
        return;
      }   
      let image = new Image();
      let reader = new FileReader();
      reader.onloadend = () => {
        image.src = reader.result;
        image.onload =  () => {
          if (image.naturalWidth > 200 || image.naturalHeight > 150) {
            if (keyno == 1) {
              this.errors.image1_error = []
              this.errors.image1_error.push('形式「.jpg」サイズ：横200pixel × 縦150pixel以下でアップロードしてください。<br>\n' +
                'OK：　.jpg<br>\n' +
                'NG：　.JPG　.JPEG　.jpeg')
              this.uploadedImage1 = ''
              this.image1filename = ''
              evt.target.value = ''
            }
            if (keyno == 2) {
              this.errors.image2_error = []
              this.errors.image2_error.push('形式「.jpg」サイズ：横200pixel × 縦150pixel以下でアップロードしてください。<br>\n' +
                'OK：　.jpg<br>\n' +
                'NG：　.JPG　.JPEG　.jpeg')
              this.uploadedImage2 = ''
              this.image2filename = ''
              evt.target.value = ''
            }
            if (keyno == 3) {
              this.errors.image3_error = []
              this.errors.image3_error.push('形式「.jpg」サイズ：横200pixel × 縦150pixel以下でアップロードしてください。<br>\n' +
                'OK：　.jpg<br>\n' +
                'NG：　.JPG　.JPEG　.jpeg')
              this.uploadedImage3 = ''
              this.image3filename = ''
              evt.target.value = ''
            }
            
          } else {
            if (keyno == 1) {
              this.errors.image1_error = []
              this.uploadedImage1 = image.src
              this.image1filename = evt.target.files[0].name
            }
            if (keyno == 2) {
              this.errors.image2_error = []
              this.uploadedImage2 = image.src
              this.image2filename = evt.target.files[0].name
            }
            if (keyno == 3) {
              this.errors.image3_error = []
              this.uploadedImage3 = image.src
              this.image3filename = evt.target.files[0].name
            }
          }

        }   
      }   
      reader.readAsDataURL(evt.target.files[0]);
    }   
    
  }
})
