<template>
<div class="view-prod-intro">
  <section class="head-title prod-name">Bitcoin Cloud Mining Annual Plan</section>
  <section class="content">
    <div class="prod-item" v-for="item in 5">
      <div class="wrap">
        <el-col :span="12">
          <div class="prod-img"></div>
        </el-col>
        <el-col :span="12">
          <div class="prod-desc">
            <p class="title">BitCoin Cloud Mining Annual Plan</p>
            <p class="desc">icon-prod icon-zcash BitC icon-prod icon-zcash oin Clou icon on-zcash d Mining Annual Plan</p>
            <el-button>
              <router-link to="/products/buy">{{$t('buy')}}</router-link>
            </el-button>
          </div>
        </el-col>
      </div>
    </div>
  </section>
  <section class="factory">
    <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <div class="fac-img"></div>
      </el-carousel-item>
    </el-carousel>
  </section>
  <section class="sec feature">
    <div class="title">Major Technical Features</div>
    <div class="desc">Proin garvada ico  cash B itC icon-pr n Clou ic n-pr n Clou</div>
    <div class="content">
      <el-table :data="tableData" border stripe :showHeader="false" style="width: 100%">
        <el-table-column prop="key" width="180" align="center"></el-table-column>
        <el-table-column prop="val"></el-table-column>
      </el-table>
    </div>
  </section>
  <section class="sec start">
    <div class="title">Start Making More Money Today</div>
    <div class="desc">ico  cash B itC icon-pr n Clou ic n-pr n Clou</div>
    <div class="content price">
      <el-row>
        <el-col :span="6">
          <div class="data">{{calc.price * count | toFixed(2)}}</div>
          <div class="unit">BTC/1THS</div>
          <div class="desc">Price Policy</div>
        </el-col>
        <el-col :span="6">
          <div class="data">{{calc.daily * count | toFixed(2)}}</div>
          <div class="unit">BTC/Day</div>
          <div class="desc">Daily Reward</div>
        </el-col>
        <el-col :span="6">
          <div class="data">{{calc.annual * count | toFixed(2)}}</div>
          <div class="unit">BTC/Annual</div>
          <div class="desc">Annual Reward</div>
        </el-col>
        <el-col :span="6">
          <div class="data">{{calc.sum * count | toFixed(2)}}</div>
          <div class="unit">USD</div>
          <div class="desc">Price to Pay</div>
        </el-col>
      </el-row>
    </div>
    <div class="operate">
      <el-input placeholder="" v-model="count">
        <template slot="append">
          <router-link to="/products/buy" tag="span">Buy Now</router-link>
        </template>
      </el-input>
    </div>
  </section>
  <section class="sec question">
    <div class="title">Common Questions</div>
    <div class="content">
      <div class="ques-item" v-for="item in 11">
        <div class="question">Q: Can I Resell My Contranct?</div>
        <div class="answer">cash B itC ico  cash B itC icon-s cash B itC ico  cash B itC icon-d cash B itC ico  cash B itC icon-cash B itC ico  cash B itC icon-cash B itC ico  cash B itC icon-</div>
      </div>
    </div>
  </section>
</div>
</template>

<script>
export default {
  data() {
    return {
      count: 1,
      calc: {
        price: 1.6,
        daily: 0.45,
        annual: 26.8,
        sum: 3802
      },
      tableData: [{
        key: 'Hash Rate',
        val: '11.5 TH/s,11.5 TH/s,11.5 TH/s,11.5 TH/s,11.5 TH/s,11.5 TH/s'
      }, {
        key: 'Power Comsumption',
        val: '1225W, 1334W, 1334W, 1334W, 1334W, 1334W'
      }, {
        key: 'Power Efficiency',
        val: '0.098J/GH'
      }, {
        key: 'Rated Voltage',
        val: '11.6~13V'
      }]
    }
  }
}
</script>

<style lang="sass" src="styles/views/products/index.scss"></style>
<style lang="sass" src="styles/views/products/intro.scss"></style>

