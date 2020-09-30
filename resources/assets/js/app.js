require('babel-polyfill')
require('./bootstrap')
require('./validation')
require('./mixins/genkou_kaishajouhous')
require('./mixins/genkou_appeals')
require('./mixins/genkou_wess')
require('./mixins/recruit_info_one')
require('./mixins/recruit_info_two')
require('./mixins/recruit_info_three')
require('./mixins/recruit_info_four')
require('./mixins/genkou_setsumaikai')
require('./mixins/genkou_setsumeikai_detail')
require('./mixins/genkou_auto_replies')


import Buefy from 'buefy'
window.Vue = require('vue')

Vue.use(Buefy)
