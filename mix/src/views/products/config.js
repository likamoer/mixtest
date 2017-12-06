// const lineColor = '#131723'
const backColor = '#9c8e74'

const lineChartConfig = {
  legend: {
    show: false
  },
  grid: {
    top: 20,
    left: 20,
    right: 20,
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
        color: backColor,
        width: 2
      }
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  yAxis: {
    show: false
    // type: 'value',
    // axisLine: {
    //   lineStyle: {
    //     color: backColor,
    //     width: 2
    //   }
    // },
    // axisTick: {
    //   show: false
    // },
    // splitLine: {
    //   show: false
    // }
  },
  series: []
}

export default {
  lineChartConfig
}
