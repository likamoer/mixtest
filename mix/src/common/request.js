import $ from 'zepto'

$.ajaxSettings.dataType = 'json'
$.ajaxSettings.contentType = 'application/json;charset=utf-8'
$.ajaxSettings.cache = false

const request = function (url, method, data) {
  return new Promise((resolve, reject) => {
    // data = Object.assign({}, data) 此处可以对提交的数据做通用处理
    data = JSON.stringify(data)
    $[method](url, data).then(data => {
      data = data || {}
      data.status === 1 ? resolve(data.data) : reject(data)
    }, (xhr, success, textStatus) => {
      this.$alert('NetWork Error' + xhr.status + ' ' + textStatus + '）')
      reject()
    })
  })
}

export default {
  get(url, data) {
    return request(url, 'get', data)
  },
  post(url, data) {
    return request(url, 'post', data)
  }
}
