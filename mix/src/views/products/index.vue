<template>
<div class="view-prod-index">
  <section class="head-title prod-name">{{$t("product.index.title")}}</section>
  <section class="content">
    <div class="tab tab-prod">
      <el-col :span="6">
        <div class="tab-item" :class="{ active: tabCoin === 'btc'}" @click="tabCoin = 'btc'">
          <div class="wrap">
            <div class="icon-prod icon-btc"></div>
            <p class="name">{{$t("btc.fullName")}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="tab-item" :class="{ active: tabCoin === 'ltc'}" @click="tabCoin = 'ltc'">
          <div class="wrap">
            <div class="icon-prod icon-ltc"></div>
            <p class="name">{{$t("ltc.fullName")}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="tab-item" :class="{ active: tabCoin === 'eth'}" @click="tabCoin = 'eth'">
          <div class="wrap">
            <div class="icon-prod icon-eth"></div>
            <p class="name">{{$t("eth.fullName")}}</p>
          </div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="tab-item" :class="{ active: tabCoin === 'zcash'}" @click="tabCoin = 'zcash'">
          <div class="wrap">
            <div class="icon-prod icon-zcash"></div>
            <p class="name">{{$t("zcash.fullName")}}</p>
          </div>
        </div>
      </el-col>
    </div>
    <div class="tab-cont">
      <div class="btc" v-show="tabCoin=='btc'">
        <div class="prod-item" v-for="item in 2">
          <div class="wrap">
            <el-col :span="12">
              <div class="prod-img"></div>
            </el-col>
            <el-col :span="12">
              <div class="prod-desc">
                <p class="title">BitCoin Cloud Mining Annual Plan</p>
                <p class="desc">icon-prod icon-zcash BitC icon-prod icon-zcash oin Clou icon on-zcash d Mining Annual Plan</p>
                <ul class="feature">
                  <li class="f-item">od icon-zcash BitC icon-prod icon-z class</li>
                  <li class="f-item">od icon-zon-prod icon-z class</li>
                  <li class="f-item">od icon-zcash Bitn-z class</li>
                </ul>
                <div class="price">
                  <span class="value">{{$t('currencyUnit')}}489.9</span>
                  <span class="unit">{{$t('btc.cloudUnit')}}</span>
                </div>
                <el-button>
                  <router-link to="/products/buy">{{$t('buy')}}</router-link>
                </el-button>
                <router-link to="/products/intro/mining" tag="span" class="more">{{$t('more')}}</router-link>
              </div>
            </el-col>
          </div>
        </div>
        <div class="prod-item" v-for="item in 3">
          <div class="wrap">
            <el-col :span="12">
              <div class="prod-img"></div>
            </el-col>
            <el-col :span="12">
              <div class="prod-desc">
                <p class="title">BitCoin Cloud Ant Miner</p>
                <p class="desc">icon-prod icon-zcash BitC icon-prod icon-zcash oin Clou icon on-zcash d Mining Annual Plan</p>
                <ul class="feature">
                  <li class="f-item">od icon-zcash BitC icon-prod icon-z class</li>
                  <li class="f-item">od icon-zon-prod icon-z class</li>
                  <li class="f-item">od icon-zcash Bitn-z class</li>
                </ul>
                <div class="price">
                  <span class="value">{{$t('currencyUnit')}}889.9</span>
                  <span class="unit">{{$t('btc.cloudUnit')}}</span>
                </div>
                <el-button>
                  <router-link to="/products/buy">{{$t('buy')}}</router-link>
                </el-button>
                <router-link to="/products/intro/miner" tag="span" class="more">{{$t('more')}}</router-link>
              </div>
            </el-col>
          </div>
        </div>
      </div>
      <div class="ltc" v-show="tabCoin=='ltc'">ltc</div>
      <div class="eth" v-show="tabCoin=='eth'">eth</div>
      <div class="zcash" v-show="tabCoin=='zcash'">zcash</div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      tabCoin: 'btc'
    }
  }
}
</script>

<style lang="sass" src="styles/views/products/index.scss"></style>
