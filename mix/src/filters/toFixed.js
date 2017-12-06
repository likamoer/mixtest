import Vue from 'vue'

export default Vue.filter('toFixed', function (value, fixedLength) {
  if (typeof value === 'string') {
    if (value.trim() === '' || isNaN(value)) {
      return value
    }
  } else if (typeof value !== 'number') {
    return value
  }
  return Number(value).toFixed(fixedLength)
})
