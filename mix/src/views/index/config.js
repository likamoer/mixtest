import $ from 'zepto'

const lineColor = '#D7D7D7'
const mainColor = '#4d5768'

const lineChartConfig = {
  legend: {
    show: false
  },
  grid: {
    top: 20,
    left: 100,
    right: 16,
    bottom: 20
  },
  tooltip: {
    trigger: 'axis',
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    axisPointer: {
      type: 'none'
    }
  },
  xAxis: {
    data: [],
    boundaryGap: false,
    interval: 0,
    axisLine: {
      lineStyle: {
        color: lineColor
      }
    },
    splitLine: {
      show: true
    },
    axisTick: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: lineColor
      }
    },
    splitLine: {
      lineStyle: {
        color: [lineColor]
      }
    },
    axisTick: {
      show: false
    }
  },
  series: []
}

const barChartConfig = $.extend(true, {}, lineChartConfig, {
  color: [mainColor],
  tooltip: {
    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
      type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    containLabel: true
  },
  xAxis: {
    boundaryGap: true,
    axisTick: {
      alignWithLabel: false
    }
  }
})

export default {
  lineChartConfig,
  barChartConfig
}
