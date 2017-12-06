import Vue from 'vue'

export default Vue.filter('csv', function (value) {
  if (typeof value === 'string') {
    if (value.trim() === '' || isNaN(value)) {
      return value
    }
  } else if (typeof value !== 'number') {
    return value
  }
  return String(value).replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
})
