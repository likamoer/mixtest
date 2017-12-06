<template>
<div class="view-prod-intro">
  <section class="head-title prod-name">Bitcoin Cloud Mining Annual Plan</section>
  <section class="content">
    <div class="prod-item" v-for="item in 3">
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
  <section class="sec market">
    <div class="title">How the Investment Market?</div>
    <div class="desc">n-zcash B itC ico  cash B itC icon-pr n Clou ic n-pr n Clou icon on</div>
    <div class="wrap chart">
      <div class="content chart-content"></div>
    </div>
  </section>
  <customer></customer>
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
import $ from 'zepto'
import request from 'common/request'
import Customer from '../index/customer'
import { lineChartConfig } from './config'

export default {
  data() {
    return {
      chartData: null,
      chart: null,
      count: 1,
      calc: {
        price: 1.6,
        daily: 0.45,
        annual: 26.8,
        sum: 3802
      }
    }
  },
  components: {
    Customer
  },
  mounted() {
    this.$nextTick(() => {
      this.initEcharts() // 初始化图表
      this.loadData()    // 加载数据
    })
  },
  methods: {
    loadData() {
      this.chartLoading = true
      request.get('/s/rest/mmrs/getMarketData').then(data => {
        this.chartData = data
        this.updateChart()
        this.chartLoading = false
      }, data => {
        data && this.$alert(data.info)
        this.chartLoading = false
      })
    },
    // 图表相关
    initEcharts(callback) {
      if (this.chart) {
        callback && callback()
        return
      }
      require(['echarts'], echarts => {
        this.chart = echarts.init(this.$el.querySelector('.chart .chart-content'))
        this.chartLoading && this.chart.showLoading()
        callback && callback()
      })
    },
    // 绘制折线图
    updateChart() {
      const options = $.extend(true, {}, lineChartConfig, {
        xAxis: {
          data: this.chartData.xAxis
        },
        series: [{
          type: 'line',
          symbol: 'circle',
          symbolSize: '8',
          name: 'market', // 数据名称
          data: this.chartData.num,
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: '#988e71' // 0% 处的颜色
                }, {
                  offset: 1,
                  color: '#2d2d35' // 100% 处的颜色
                }]
              }
            }
          },
          smooth: true,
          itemStyle: {
            normal: {
              color: '#9c8e74',
              borderWidth: 2,
              borderColor: '#2d2d35',
              lineStyle: {
                color: '#2d2d35'
              }
            }
          },
          z: 8
        }]
      })
      this.initEcharts(() => {
        this.chart.clear()
        this.chart.setOption(options)
      })
    }
  }
}
</script>

<style lang="sass" src="styles/views/products/index.scss"></style>
<style lang="sass" src="styles/views/products/intro.scss"></style>
