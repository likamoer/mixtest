
export default [{
  path: '/',
  name: 'index',
  component: resolve => require(['views/index/index'], resolve),
  meta: {
    pageTitle: 'index'
  }
}, {
  path: '/products',
  component: {
    template: '<router-view></router-view>'
  },
  children: [{
    path: '',
    name: 'products_index',
    component: resolve => require(['views/products/index'], resolve),
    meta: {
      pageTitle: 'products'
    }
  }, {
    path: 'intro/mining',
    name: 'products_mining_intro',
    component: resolve => require(['views/products/miningIntro'], resolve),
    meta: {
      pageTitle: 'mining intro'
    }
  }, {
    path: 'intro/miner',
    name: 'products_miner_intro',
    component: resolve => require(['views/products/minerIntro'], resolve),
    meta: {
      pageTitle: 'miner intro'
    }
  }, {
    path: 'buy',
    name: 'products_buy',
    component: resolve => require(['views/products/buy'], resolve),
    meta: {
      pageTitle: 'buy'
    }
  }, {
    path: 'sucess',
    name: 'products_buy_success',
    component: resolve => require(['views/products/sucess'], resolve),
    meta: {
      pageTitle: 'sucess'
    }
  }]
}, {
  path: '/trends',
  component: {
    template: '<router-view></router-view>'
  },
  children: [{
    path: '',
    name: 'trends_index',
    component: resolve => require(['views/trends/index'], resolve),
    meta: {
      pageTitle: 'trends'
    }
  }]
}, {
  path: '/login',
  name: 'login_index',
  component: resolve => require(['views/login/index'], resolve),
  meta: {
    pageTitle: 'login',
    hideNav: true,
    hideFooter: true
  }
}, {
  path: '/signup/:type?',
  name: 'signup_index',
  component: resolve => require(['views/login/signup'], resolve),
  meta: {
    pageTitle: 'signup',
    hideNav: true,
    hideFooter: true
  }
}, {
  path: '/user',
  component: {
    template: '<router-view></router-view>'
  },
  children: [{
    path: '',
    redirect: 'mining',
    name: 'user_index',
    component: resolve => require(['views/user/index'], resolve),
    meta: {
      pageTitle: 'user',
      hideHeader: true,
      hideFooter: true
    },
    children: [{
      path: 'mining',
      name: 'mining_index',
      component: resolve => require(['views/user/mining/index'], resolve),
      meta: {
        pageTitle: 'mining',
        hideHeader: true,
        hideFooter: true
      }
    }, {
      path: 'miner',
      name: 'miner_index',
      component: resolve => require(['views/user/miner/index'], resolve),
      meta: {
        pageTitle: 'miner',
        hideHeader: true,
        hideFooter: true
      }
    }, {
      path: 'price',
      name: 'price_index',
      component: resolve => require(['views/user/price'], resolve),
      meta: {
        pageTitle: 'price',
        hideHeader: true,
        hideFooter: true
      }
    }, {
      path: 'profit',
      name: 'profit_index',
      component: resolve => require(['views/user/profit'], resolve),
      meta: {
        pageTitle: 'mining',
        hideHeader: true,
        hideFooter: true
      }
    }, {
      path: 'setting',
      name: 'setting_index',
      component: resolve => require(['views/user/setting'], resolve),
      meta: {
        pageTitle: 'setting',
        hideHeader: true,
        hideFooter: true
      }
    }, {
      path: 'billing',
      name: 'billing_index',
      component: resolve => require(['views/user/billing'], resolve),
      meta: {
        pageTitle: 'billing',
        hideHeader: true,
        hideFooter: true
      }
    }]
  }]
}]
