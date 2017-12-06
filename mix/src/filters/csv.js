import Vue from 'vue'

export default Vue.filter('csv', function (value) {
  if (value == null) {
    return value
  }
  return value.toString().replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
})
