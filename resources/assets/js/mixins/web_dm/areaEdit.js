import $ from 'jquery'

const checkAllTohoku = function checkAll() {
  const checkStatus = $('input[name="tohoku"]').prop('checked')
  $('input[value="hokkaido"]').prop('checked', checkStatus)
  $('input[value="aomori"]').prop('checked', checkStatus)
  $('input[value="iwate"]').prop('checked', checkStatus)
  $('input[value="miyagi"]').prop('checked', checkStatus)
  $('input[value="akita"]').prop('checked', checkStatus)
  $('input[value="yamagata"]').prop('checked', checkStatus)
  $('input[value="hukushima"]').prop('checked', checkStatus)
}

const checkAllKanto = function checkAll() {
  const checkStatus = $('input[name="kanto"]').prop('checked')
  $('input[value="ibaraki"]').prop('checked', checkStatus)
  $('input[value="tochigi"]').prop('checked', checkStatus)
  $('input[value="gunma"]').prop('checked', checkStatus)
  $('input[value="saitama"]').prop('checked', checkStatus)
  $('input[value="chiba"]').prop('checked', checkStatus)
  $('input[value="tokyo"]').prop('checked', checkStatus)
  $('input[value="kanagawa"]').prop('checked', checkStatus)
}

const checkAllHokuriku = function checkAll() {
  const checkStatus = $('input[name="hokuriku"]').prop('checked')
  $('input[value="niigata"]').prop('checked', checkStatus)
  $('input[value="toyama"]').prop('checked', checkStatus)
  $('input[value="ishikawa"]').prop('checked', checkStatus)
  $('input[value="hukui"]').prop('checked', checkStatus)
  $('input[value="yamanashi"]').prop('checked', checkStatus)
  $('input[value="nagano"]').prop('checked', checkStatus)
}

const checkAllTokai = function checkAll() {
  const checkStatus = $('input[name="tokai"]').prop('checked')
  $('input[value="gihu"]').prop('checked', checkStatus)
  $('input[value="shizuoka"]').prop('checked', checkStatus)
  $('input[value="aichi"]').prop('checked', checkStatus)
  $('input[value="mie"]').prop('checked', checkStatus)
}

const checkAllKinki = function checkAll() {
  const checkStatus = $('input[name="kinki"]').prop('checked')
  $('input[value="shiga"]').prop('checked', checkStatus)
  $('input[value="kyoto"]').prop('checked', checkStatus)
  $('input[value="osaka"]').prop('checked', checkStatus)
  $('input[value="hyogo"]').prop('checked', checkStatus)
  $('input[value="nara"]').prop('checked', checkStatus)
  $('input[value="wakayama"]').prop('checked', checkStatus)
}

const checkAllChugoku = function checkAll() {
  const checkStatus = $('input[name="chugoku"]').prop('checked')
  $('input[value="tottori"]').prop('checked', checkStatus)
  $('input[value="shimane"]').prop('checked', checkStatus)
  $('input[value="okayama"]').prop('checked', checkStatus)
  $('input[value="hiroshima"]').prop('checked', checkStatus)
  $('input[value="yamaguchi"]').prop('checked', checkStatus)
  $('input[value="tokushima"]').prop('checked', checkStatus)
  $('input[value="kagawa"]').prop('checked', checkStatus)
  $('input[value="ehime"]').prop('checked', checkStatus)
  $('input[value="kochi"]').prop('checked', checkStatus)
}

const checkAllKyusyu = function checkAll() {
  const checkStatus = $('input[name="kyusyu"]').prop('checked')
  $('input[value="hukuoka"]').prop('checked', checkStatus)
  $('input[value="saga"]').prop('checked', checkStatus)
  $('input[value="nagasaki"]').prop('checked', checkStatus)
  $('input[value="kumamoto"]').prop('checked', checkStatus)
  $('input[value="oita"]').prop('checked', checkStatus)
  $('input[value="miyazaki"]').prop('checked', checkStatus)
  $('input[value="kagoshima"]').prop('checked', checkStatus)
  $('input[value="okinawa"]').prop('checked', checkStatus)
}

window.checkAllTohoku = checkAllTohoku
window.checkAllKanto = checkAllKanto
window.checkAllHokuriku = checkAllHokuriku
window.checkAllTokai = checkAllTokai
window.checkAllKinki = checkAllKinki
window.checkAllChugoku = checkAllChugoku
window.checkAllKyusyu = checkAllKyusyu
