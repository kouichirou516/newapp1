import moment from 'moment'


export default class Validation {
  //必須項目
  require(val) {
    return !val
  }

  notZero(val) {
    return Number(val) === 0
  }

  //桁固定
  digits(val, num){
    return val.length != num
  }

  integer(val) {
    return String(~~val) === val && val > 0
  }


  //最大文字数
  maxLength(val, maxLength) {
    var result = 0
    val = val.replace('\r\n', '\n')
    for(var i=0;i<val.length;i++){
      var chr = val.charCodeAt(i)
      if (chr == 0x000A) {
        // 改行コードは2文字
        result += 2
      } else if((chr >= 0x00 && chr < 0x81) ||
        (chr === 0xf8f0) ||
        (chr >= 0xff61 && chr < 0xffa0) ||
        (chr >= 0xf8f1 && chr < 0xf8f4)){
        //半角文字の場合は1を加算
        result += 1
      }else{
        //それ以外の文字の場合は2を加算
        result += 2
      }
    }
    return result > maxLength
  }

  //英数
  eisu(val) {
    return !val.match(/^[ A-Za-z0-9　]*$/)
  }

  //ひらがな
  kana(val) {
    return !val.match(/^[ ぁ-んー　]*$/)
  }

  //カタカナ
  kata(val) {
    return !val.match(/^[ ァ-ヶー　]*$/)
  }


  //画像のバリテーション、true/falseを返す
  image(val, max = null) {
    var image = new Image()
    var reader = new FileReader()
    var imageFlg = false
    return new Promise(function (resolve) {
      reader.onloadend = function () {
        image.src = reader.result
        image.onload = function () {

          var fileExtension = val.name.split('.').pop()
          if (fileExtension == 'jpg') {
            imageFlg = true
          } else {
            imageFlg = false
          }
          if(max && val.size > max) {
            imageFlg = false
          }
          resolve([imageFlg, image.src])
        }
      }
      reader.readAsDataURL(val)
    })
  }

  //時間比べる
  timeAfter(start, end){
    return start < end
  }
  timeSameOrAfter(start, end){
    return start <= end
  }
  timeSameOrBefore(start, end){
    return start >= end
  }

  //数値
  int(val) {
    return !val.match(/^[+-]?[0-9]*[\.]?[0-9]+$/)
  }


  //小数点以下0.2未満
  watchDecimal(val) {
    var number = parseFloat(val)
    var getDecimalPlace = function (number) {
      if (typeof number !== 'number') {
        return null
      }
      var decimalPlace = 0
      var numbers = number.toString().split('.')
      if (numbers[1]) {
        decimalPlace = numbers[1].length
      }
      return decimalPlace
    }
    var dNum = getDecimalPlace(number)
    return dNum >= 2
  }


  //日付
  date(valY, valM, valD) {
    var selectedDate = valY + '/' + valM + '/' + valD
    return moment(selectedDate, 'YYYY/MM/DD').isValid()
  }

  dateYmd(selectedDate) {
    return moment(selectedDate, 'YYYY/MM/DD').isValid()
  }

  //過去の日付
  past(valY, valM, valD) {
    var selectedDate2 = valY + '/' + valM + '/' + valD
    var currentDate = moment().format('YYYY/MM/DD')
    return moment(selectedDate2).isSameOrBefore(currentDate, 'day')
  }

  pastMonth(valY, valM, valD) {
    var selectedDate2 = valY + '/' + valM
    var currentDate = moment().format('YYYY/M/D')
    return moment(selectedDate2, 'YYYY/M/D').isSameOrBefore(currentDate, 'month')
  }

  termBetween(val, start, end){
    const startDate = moment(start, 'YYYYMMDD').format("YYYYMMDD")
    const endDate = moment(end, 'YYYYMMDD').format("YYYYMMDD")
    const d = moment(val)
    if(!d.isValid()) return true
    return d.format("YYYYMMDD") >= startDate && d.format("YYYYMMDD") <= endDate
  }

  term(valY, valM, startY, startM, endY, endM) {
    const selectedDate = valY + '/' + valM
    const startDate = startY + '/' + startM
    const endDate = endY + '/' + endM
    var selectedDateNum = moment(selectedDate, 'YYYY/MM')
    var startDateNum = moment(startDate, 'YYYY/MM')
    var endDateNum = moment(endDate, 'YYYY/MM')
    return moment(selectedDateNum).isSameOrAfter(endDateNum, 'month') || moment(selectedDateNum).isBefore(startDateNum, 'month')
  }

  compDate(startY, startM, endY, endM) {
    var startDate = startY + '/' + startM
    var endDate = endY + '/' + endM
    var startDateNum = moment(startDate, 'YYYY/MM')
    var endDateNum = moment(endDate, 'YYYY/MM')
    return moment(startDateNum).isBefore(endDateNum, 'month')
  }

  //大なり小なり
  moreLess(val1, val2) {
    var num1 = parseFloat(val1)
    var num2 = parseFloat(val2)
    return num1 < num2
  }

  //小数範囲指定
  decimalNum(val) {
    var num = parseFloat(val)
    return 99.9 < val || val < 0.1
  }

  decimalNumL(val) {
    var num = parseFloat(val)
    return 999.9 < val || val < 0.1
  }

  decimalNum100(val) {
    var num = parseFloat(val)
    return 100 < val || val < 0
  }

  decimalRatio(val) {
    var num = parseFloat(val)
    return 100 < val || val < 0.1
  }

  //整数のみ
  onlyInteger(val) {
    return !val.match(/^([1-9]\d*|0)$/)
  }

  //ゼロパディング
  zeroPaddeing(val) {
    var headNum = val.slice(0, 1)
    var nextNum = val.slice(1, 2)
    return headNum == '0' && nextNum.match(/^([1-9]\d*|0)$/)
  }

  recInfo2(val, btn) {
    return !val && btn == 1
  }

  banWords(val) {
    let error = false
    const str = '①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻' +
      '㎜㎝㎞㎎㎏㏄㎡㍻〝〟№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒' +
      '侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣' +
      '妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗' +
      '晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵' +
      '濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥' +
      '禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤' +
      '逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅' +
      '鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ￢￤＇＂ⅰⅱⅲⅳⅴⅵⅶ' +
      'ⅷⅸⅹⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴' +
      '僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓' +
      '﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒' +
      '柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁' +
      '燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠' +
      '緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥' +
      '鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕' +
      '顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑圳･☎⑴⑵⑶⑷♂♀♦♢奈☏℡✆☏📞' +
      '躺齿涇每锌偷寬德鹅撑轨鄧詹甯澈执琪证渐鄉药黑龄惊块沉琦动辅·嘻记弹鹤菇' +
      '說盐愷鈺鹏貓显汤檔词惯兹說牠煜琪惕赶孙辑锦带误炫鹏鹏尬橫针吧厲增爷较' +
      '嘻麵繡压兰擊语狀璉綠躺两躺齿悬涇每锌偷寬德鹅鄧詹甯澈执琪证渐鄉织药黑阳' +
      '龄惊块沉琦动辅嘻记译鹤菇說盐愷鹏貓显汤檔词惯銳闻惮牠煜茁铃链镇惕赶孙辑' +
      '锦带误炫鹏鹏尬橫针說呢麵繡压兰擊语狀璉綠躺两' +
      '№㏍℡㊤㊥㊦㊧㊨㈱㈲㈹㍾㍽㍼㍻①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳' +
      '∑∮∟⊿Å㍉㎜㎝㎞㎎㎏㏄㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻' +
      '纊鍈蓜炻棈兊夋奛奣寬﨑嵂ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ' +
      '｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ' +
      '♦♢奈☏℡✆☏📞◾️⾰' +
      '✉📤📥📧📨📩📪📫📬📭📮份俱▪▶◀🔼🔽▵▿▹◃⁑☮♡♥®'


    for(let i = 0;i < str.length;i++) {
      if(val.indexOf(str.charAt(i)) != -1) {
        error = true
        break
      }
    }
    //半角カナとタブも禁止
    const regex = new RegExp(/[ｦ-ﾟ\t]/)
    if (regex.test(val)) {
      error = true
    }
    return error
  }

}

