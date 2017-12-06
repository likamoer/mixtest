import $ from 'zepto'

export function setCookie(cname, cvalue) {
  var expires = arguments[2] ? arguments[2] : ''
  document.cookie = cname + '=' + encodeURIComponent(cvalue) + '; path=/' + '; expires=' + expires
}

export function getCookie(cname) {
  var name = cname + '='
  var ca = document.cookie.split(';')
  for (var i = 0; i < ca.length; i++) {
    var c = $.trim(ca[i])
    if (c.indexOf(name) === 0) return decodeURIComponent(c.substring(name.length, c.length))
  }
  return ''
}

export function setCookieEx(cname, cvalue, expires) {
  if (expires) {
    var time = new Date()
    time.setTime(time.getTime() + expires * 1000)
    document.cookie = cname + '=' + encodeURIComponent(cvalue) + '; path=/' + '; expires=' + time.toGMTString()
  } else {
    document.cookie = cname + '=' + encodeURIComponent(cvalue)
  }
}

export function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) document.cookie = name + '=' + cval + '; path=/' + '; expires=' + exp.toGMTString()
}

export default {
  setCookie,
  getCookie,
  setCookieEx,
  delCookie
}
