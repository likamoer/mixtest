<template>
  <div class="view-trends-index">
    <section class="head-title trend-name">{{$t("trends.index.title")}}</section>
    <section class="pool-data-wrap">
      <p class="title">Mix Mining Pool Data</p>
      <ul class="pool-data">
        <li class="btc pd-item" v-for="item in 4">
          <div class="product">
            BTC Pool
          </div>
          <el-row class="data-list">
            <el-col class="data-item" :span="4">
              <p class="data">1.579E</p>
              <p class="desc">Pool HashRate</p>
            </el-col>
            <el-col class="data-item" :span="4">
              <p class="data">1.579E</p>
              <p class="desc">Network HashRate</p>
            </el-col>
            <el-col class="data-item" :span="4">
              <p class="data">1.579E</p>
              <p class="desc">Active</p>
            </el-col>
            <el-col class="data-item" :span="4">
              <p class="data">1.579E</p>
              <p class="desc">Block Mined</p>
            </el-col>
            <el-col class="data-item" :span="4">
              <p class="data">1.579E</p>
              <p class="desc">Coin Mined(BTC)</p>
            </el-col>
            <el-col class="data-item" :span="4">
              <p class="data">1.579E</p>
              <p class="desc">Coin Price(USD)</p>
            </el-col>
          </el-row>
        </li>
      </ul>
    </section>
    <section class="sec blocks-wrap">
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
          <el-table border stripe :data="tableData">
            <el-table-column prop="height" label="Height" width="180"></el-table-column>
            <el-table-column prop="relay" label="Relayed By" width="180"></el-table-column>
            <el-table-column prop="size" label="Size(B)"></el-table-column>
            <el-table-column prop="reward" label="Reward"></el-table-column>
            <el-table-column prop="time" label="Time"></el-table-column>
          </el-table>
        </div>
        <div class="ltc" v-show="tabCoin=='ltc'">ltc</div>
        <div class="eth" v-show="tabCoin=='eth'">eth</div>
        <div class="zcash" v-show="tabCoin=='zcash'">zcash</div>
      </div>
    </section>
    <section class="sec charts-wrap">
      <div class="title">Bitcoin Hashrate & Cash Hashrate</div>
    </section>
    <section class="sec network-wrap">
      <div class="title">Bitcoin Network Status</div>
      <div class="content">
        <el-row>
          <el-col :span="12">
            <div class="stat-item" v-for="item in 2">
              <span class="key">Total Hashrate</span>
              <span class="value">10.95</span>
              <span class="unit">EH/s</span>
            </div>
            <div class="stat-item" v-for="item in 3">
              <span class="key">Next Difficulty Estimated</span>
              <span class="value">2</span>
              <span class="unit">Day</span>
              <span class="value">9</span>
              <span class="unit">Hours</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="stat-item" v-for="item in 5">
              <span class="key">Total Hashrate</span>
              <span class="value">10.95</span>
              <span class="unit">EH/s</span>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
    <section class="sec join-wrap">
      <div class="title">Leading Bitcoin Commnunity</div>
      <div class="desc">Join Us and Discover the Future Digital Currency</div>
      <div class="joinus">
        <el-input placeholder="your email" v-model="joinus">
          <template slot="append">Join Now</template>
        </el-input>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      tabCoin: 'btc',
      tableData: [{
        height: '45643',
        relay: 'BTCC',
        size: '109876',
        reward: '12.374387BTC',
        time: '45 minuts ago'
      }, {
        height: '45643',
        relay: 'BTCC',
        size: '109876',
        reward: '12.374387BTC',
        time: '45 minuts ago'
      }, {
        height: '45643',
        relay: 'BTCC',
        size: '109876',
        reward: '12.374387BTC',
        time: '45 minuts ago'
      }, {
        height: '45643',
        relay: 'BTCC',
        size: '109876',
        reward: '12.374387BTC',
        time: '45 minuts ago'
      }],
      joinus: null
    }
  }
}
</script>

<style lang="sass" src="styles/views/trends/index.scss"></style>
