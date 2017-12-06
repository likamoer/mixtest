<template>
  <section class="sec products">
    <h2 class="title">{{$t("index.products.title")}}</h2>
    <p class="desc">{{$t("index.products.desc")}}</p>
    <div class="content">
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
        <el-col :span="12" class="cloud-mining">
          <div class="wrap">
            <div class="p-name">{{$t('btc.cloud')}}</div>
            <el-col :span="12" v-for="item in detail.mining">
              <div class="plan">
                <div class="name">{{item.name}}</div>
                <div class="desc">
                  <p>{{item.description}}</p>
                </div>
                <div class="price">
                  <span class="value">{{$t('currencyUnit')}}{{item.price}}</span>
                  <span class="unit">{{$t('btc.cloudUnit')}}</span>
                </div>
                <div class="more">{{$t('more')}} ></div>
              </div>
            </el-col>
          </div>
        </el-col>
        <el-col :span="12" class="hash-miner">
          <div class="wrap">
            <div class="p-name">{{$t('btc.hash')}}</div>
            <el-col :span="12" v-for="(item, index) in detail.miner">
              <div class="plan">
                <div class="name">{{item.name}}</div>
                <div class="img s7" v-if="index === 0"></div>
                <div class="img s9" v-if="index === 1"></div>
                <div class="price">
                  <span class="value">{{$t('currencyUnit')}}{{item.price}}</span>
                  <span class="unit">{{$t('btc.hashUnit')}}</span>
                </div>
                <div class="more">{{$t('more')}} ></div>
              </div>
            </el-col>
          </div>
        </el-col>
      </div>
      <div class="more">{{$t("index.products.more")}} ></div>
    </div>
  </section>
</template>

<script>
import request from 'common/request'

export default {
  name: 'products',
  data() {
    return {
      tabCoin: 'btc',
      btcMining: null,
      btcMiner: null,
      ltcMining: null,
      ltcMiner: null,
      ethMining: null,
      ethMiner: null,
      zcashMining: null,
      zcashMiner: null,
      detail: {
        mining: null,
        miner: null
      }
    }
  },
  watch: {
    tabCoin(val) {
      this.loadData(val)
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    loadData(type = 'btc') {
      this[type + 'Loading'] = true
      if (!this[type + 'mining']) {
        request.get(`/s/rest/mmrs/getPromotionProducts/${type}/CloudMining/2`).then(data => {
          this[type + 'mining'] = data.products
          this.detail.mining = data.products
        }, data => {
          data && this.$alert(data.info)
        })
      } else {
        this.detail.mining = this[type + 'mining']
      }
      if (!this[type + 'miner']) {
        request.get(`/s/rest/mmrs/getPromotionProducts/${type}/CloudMiner/2`).then(data => {
          this[type + 'miner'] = data.products
          this.detail.miner = data.products
        }, data => {
          data && this.$alert(data.info)
        })
      } else {
        this.detail.miner = this[type + 'miner']
      }
    }
  }
}
</script>