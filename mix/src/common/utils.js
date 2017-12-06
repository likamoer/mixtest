
var ID_PREFIX = 'ad-'
var ID_INDEX = 0
var regMap = {}

var toString = Object.prototype.toString

var utils = {
  id() {
    ID_INDEX++
    return ID_PREFIX + ID_INDEX
  },
  isArray: ('isArray' in Array) ? Array.isArray : function (value) {
    return toString.call(value) === '[object Array]'
  },
  isDate(value) {
    return toString.call(value) === '[object Date]'
  },
  isEmpty(value, allowEmptyString) {
    return (value == null) || (!allowEmptyString ? value === '' : false) || (utils.isArray(value) && value.length === 0)
  },
  /**
   * 获取url查询参数
   * @param {String} key
   */
  getQueryParam(key) {
    var reg = regMap[key] || (regMap[key] = new RegExp('(?:^|&)' + key + '=([^&]*)(?:&|$)'))
    var matchResult = location.search.substring(1).match(reg)
    if (!matchResult) {
      return null
    }
    return matchResult[1]
  },
  /**
   * 在查找数组项
   * @param Array array 数组
   * @param Function fn 判断函数, 返回不为false的值表示找到所需项
   * @returns {*} 数组项, 若array不为数组或未找到返回null
   */
  findInArray(array, fn) {
    if (!this.isArray(array)) {
      return null
    }
    var length = array.length
    var value

    for (var i = 0; i < length; i++) {
      value = array[i]
      if (fn(value, i, array)) {
        return value
      }
    }
    return null
  },
  throttle(func, wait, options) {
    var context, args, result
    var timeout = null
    var previous = 0
    if (!options) options = {}
    var later = function() {
      previous = options.leading === false ? 0 : Date.now()
      timeout = null
      result = func.apply(context, args)
      if (!timeout) context = args = null
    }
    return function() {
      var now = Date.now()
      if (!previous && options.leading === false) previous = now
      var remaining = wait - (now - previous)
      context = this
      args = arguments
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout)
          timeout = null
        }
        previous = now
        result = func.apply(context, args)
        if (!timeout) context = args = null
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining)
      }
      return result
    }
  },
  debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result

    var later = function() {
      var last = Date.now() - timestamp

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last)
      } else {
        timeout = null
        if (!immediate) {
          result = func.apply(context, args)
          if (!timeout) context = args = null
        }
      }
    }

    return function() {
      context = this
      args = arguments
      timestamp = Date.now()
      var callNow = immediate && !timeout
      if (!timeout) timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(context, args)
        context = args = null
      }

      return result
    }
  },
  cutString(str, num, flag) {
    let i = 0
    let len = 0
    let tmp = ''
    for (; i < str.length; i++) {
      if ((/[^\x00-\xff]/).test(str[i])) {
        len += 2
      } else {
        len += 1
      }

      if (len > num) {
        return flag ? tmp + '...' : tmp
      }
      tmp += str.charAt(i)
    }

    return str
  },
  getTime(format, time) {
    var now = (time) ? new Date(time * 1000) : new Date()

    var o = {
      'M+': now.getMonth() + 1,
      'd+': now.getDate(),
      'h+': now.getHours(),
      'm+': now.getMinutes(),
      's+': now.getSeconds(),
      'q+': Math.floor((now.getMonth() + 3) / 3),
      'S': now.getMilliseconds()
    }

    if (/(y+)/.test(format)) {
      format = format.replace(RegExp.$1, (now.getFullYear() + '')
        .substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length))
      }
    }
    return format
  },
  urlParams(href) {
    href = href || window.location.search
    const data = {}
    const reg = new RegExp('([^?=&]+)(=([^&]*))?', 'g')
    if (href) {
      href.replace(reg, function ($0, $1, $2, $3) {
        data[$1] = $3
      })
    }
    return data
  }
}

export default utils
