<template>
  <div class="app">
    <el-header class="nav" v-if="!hideHeader">
      <span class="logo"><router-link to="/">MIXMINING</router-link></span>
      <ul class="menu-nav" v-if="!hideNav">
        <li class="nav-item"><router-link to="/products">{{$t("product.name")}}</router-link></li>
        <li class="nav-item"><router-link to="/trends">{{$t("trends.name")}}</router-link></li>
        <li class="nav-item"><router-link to="/login">{{$t("login.name")}}</router-link></li>
        <li class="nav-item"><router-link to="/signup">{{$t("signup.name")}}</router-link></li>
      </ul>
    </el-header>
    <router-view>
    </router-view>
    <div class="mix-footer" v-show="!hideFooter">
      <el-footer height="350px">
        <div class="wrap clear-both">
          <div class="float-left">
            <div class="logo">MIXMINING</div>
            <div class="social-wrap">
              <router-link class="twitter" to="/"></router-link>
              <router-link class="weibo" to="/"></router-link>
              <router-link class="facebook" to="/"></router-link>
              <router-link class="google" to="/"></router-link>
            </div>
            <div class="copyright">{{$t("copyright")}}</div>
          </div>
          <ul class="about float-right">
            <li class="list product-list">
              <p class="title">{{$t("product.name")}}</p>
              <ul>
                <li><router-link to="/">{{$t("btc.fullName")}}</router-link></li>
                <li><router-link to="/">{{$t("ltc.fullName")}}</router-link></li>
                <li><router-link to="/">{{$t("eth.fullName")}}</router-link></li>
                <li><router-link to="/">{{$t("zcash.fullName")}}</router-link></li>
              </ul>
            </li>
            <li class="list about">
              <p class="title">{{$t("index.about.name")}}</p>
              <ul>
                <li><router-link to="/">{{$t("index.about.company")}}</router-link></li>
                <li><router-link to="/">{{$t("index.about.trends")}}</router-link></li>
                <li><router-link to="/">{{$t("index.about.policy")}}</router-link></li>
                <li><router-link to="/">{{$t("index.about.help")}}</router-link></li>
              </ul>
            </li>
            <li class="list partner">
              <p class="title">{{$t("index.partner.name")}}</p>
              <ul>
                <li><router-link to="/">{{$t("index.partner.antminer")}}</router-link></li>
                <li><router-link to="/">{{$t("index.partner.bitmaintalk")}}</router-link></li>
                <li><router-link to="/">{{$t("index.partner.antpool")}}</router-link></li>
              </ul>
            </li>
          </ul>
        </div>
      </el-footer>
    </div>
  </div>
</template>

<script>
const lang = [
  {
    lang: 'en',
    text: 'English'
  },
  {
    lang: 'zh',
    text: '中文'
  }
]

export default {
  data() {
    return {
      app: 'app',
      activeIndex: '1',
      lang
    }
  },
  computed: {
    hideFooter() {
      return this.$route.meta.hideFooter
    },
    hideNav() {
      return this.$route.meta.hideNav
    },
    hideHeader() {
      return this.$route.meta.hideHeader
    }
  }
}
</script>

<style lang="sass" src="styles/app.scss"></style>
<style lang="sass" src="styles/views/nav.scss"></style>
<style lang="sass" src="styles/views/footer.scss"></style>
