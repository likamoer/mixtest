import Vue from 'vue'
import VueRouter from 'vue-router'
import cookie from 'common/cookie'

import './filters'
// import './directives'
// import 'components'

import routes from './routes'
import store from './store'
import App from './app'

import request from 'common/request'
import { getCookie } from 'utils/cookie'

// 按需加载 Element UI 的组件
import './element-config.js'
import './styles/element-variables.scss'

import './common/requestAnimationFrame.js'

// 国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)            // 通过插件的形式挂载
const i18n = new VueI18n({
  locale: getCookie('PLAY_LANG', 'en'),    // 语言标识
  messages: {
    'zh': require('./common/lang/zh'),   // 中文语言包
    'en': require('./common/lang/en')    // 英文语言包
  }
})

if (module.hot) {
  module.hot.accept()
}

Vue.use(VueRouter)
Vue.prototype.$http = request

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/user') > -1 && !cookie.getCookie('token')) {
    router.push({ name: 'index' })
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  // 滚动到顶部
  if (!to.query.statisticTab) {
    window.scrollTo(0, 0)
  }
})

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
