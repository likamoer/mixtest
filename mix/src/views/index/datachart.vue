<template>

  <section class="sec data">
    <h2 class="title">{{$t("index.data.title")}}</h2>
    <div class="content">
      <div class="tab">
        <el-col :span="8">
          <div class="tab-item" :class="{ active: tabData === 'a'}" @click="tabData = 'a'">
            <div class="wrap">
              <p class="name">{{$t("index.data.globalhashrate")}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="tab-item" :class="{ active: tabData === 'b'}" @click="tabData = 'b'">
            <div class="wrap">
              <p class="name">{{$t("index.data.poolhashrate")}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="tab-item" :class="{ active: tabData === 'c'}" @click="tabData = 'c'">
            <div class="wrap">
              <p class="name">{{$t("index.data.blocks")}}</p>
            </div>
          </div>
        </el-col>
      </div>
      <div class="tab-cont">
        <div class="poolhashrate" v-show="tabData === 'a'">
          <div class="chart a-chart">
            <div class="chart-content"></div>
          </div>
        </div>
        <div class="blocks" v-show="tabData === 'b'">
          <div class="chart b-chart">
            <div class="chart-content"></div>
          </div>
        </div>
        <div class="pooldistribution" v-show="tabData === 'c'">
          pooldistribution-content
        </div>
        <div class="bitcoin" v-show="tabData === 'd'">
          bitcoin-content
        </div>
      </div>
      <div class="more">{{$t("index.products.more")}} ></div>
    </div>
  </section>
</template>

<script>
import $ from 'zepto'
import request from 'common/request'
import { lineChartConfig, barChartConfig } from './config'

export default {
  name: 'datachart',
  data() {
    return {
      tabData: '2',
      aChart: null,
      bChart: null,
      cChart: null,
      dChart: null,
      aLoading: false,
      bLoading: false,
      cLoading: false,
      dLoading: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initEcharts('2') // 第一次初始化第一屏的图标
      this.loadData('2')    // 加载第一屏的数据
    })
  },
  watch: {
    tabData(val, oldVal) {
      this.initEcharts(val)
      if (this[val + 'ChartData']) {
        this['update' + val + 'Chart']()
      } else {
        this.loadData(val)
      }
    }
  },
  methods: {
    loadData(type = '2') {
      this[type + 'Loading'] = true
      request.get(`/s/rest/mmrs/getProductDetail/${type}`).then(data => {
        this[type + 'ChartData'] = data
        this['update' + type + 'Chart']()
        this[type + 'Loading'] = false
      }, data => {
        data && this.$alert(data.info)
        this[type + 'Loading'] = false
      })
    },
    // 图表相关
    initEcharts(type = 'a', callback) {
      if (this[type + 'Chart']) {
        callback && callback()
        return
      }
      require(['echarts'], echarts => {
        this[type + 'Chart'] = echarts.init(this.$el.querySelector('.' + type + '-chart .chart-content'))
        this[type + 'Loading'] && this[type + 'Chart'].showLoading()
        callback && callback()
      })
    },
    // 绘制折线图
    updateaChart() {
      const options = $.extend(true, {}, lineChartConfig, {
        xAxis: {
          data: this.aChartData.xAxis
        },
        series: [{
          type: 'line',
          symbol: 'circle',
          symbolSize: '8',
          name: 'a', // 数据名称
          data: this.aChartData.num,
          itemStyle: {
            normal: {
              color: '#4d5768',
              borderWidth: 2,
              borderColor: '#fff',
              lineStyle: {
                color: '#4d5768'
              }
            }
          },
          z: 8
        }]
      })
      this.initEcharts('a', () => {
        this.aChart.clear()
        this.aChart.setOption(options)
      })
    },
    // 绘制直方图
    updatebChart() {
      const options = $.extend(true, {}, barChartConfig, {
        xAxis: {
          data: this.aChartData.xAxis,
          splitLine: {
            show: true
          }
        },
        series: [{
          type: 'bar',
          name: 'b', // 数据名称
          barWidth: '50%',
          data: this.aChartData.num,
          z: 8
        }]
      })
      this.initEcharts('b', () => {
        this.bChart.clear()
        this.bChart.setOption(options)
      })
    }
  }
}
</script>