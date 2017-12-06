<template>
  <div class='circle-loading'>
    <canvas :width="size" :height="size"></canvas>
  </div>
</template>

<script>
  import utils from '../common/utils'
  import $ from 'zepto'

  export default {
    name: 'circle-loading',
    props: {
      size: {
        type: Number,
        default: 200
      },
      width: {
        type: Number,
        default: 6
      },
      rgb: {
        type: Array,
        default: [156, 142, 116]
      },
      num: {
        type: Number,
        default: 1000
      }
    },
    data() {
      return {
        stopLeft: null,
        stopRight: null,
        runRight: false,
        tempNum: 0
      }
    },
    computed: {
      rgba1() {
        return `rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, 0.1)`
      },
      rgba5() {
        return `rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, 0.5)`
      },
      rgba10() {
        return `rgba(${this.rgb[0]}, ${this.rgb[1]}, ${this.rgb[2]}, 1)`
      },
      halfSize() {
        return this.size / 2
      },
      radius() {
        return this.halfSize - this.width / 2
      }
    },
    methods: {
      drawLeftCircle(x, end, ctx) {
        ctx.clearRect(0, 0, this.size, this.size)
        ctx.beginPath()
        ctx.moveTo(this.halfSize, 0)
        const grd = ctx.createLinearGradient(0, 0, 0, this.halfSize)
        grd.addColorStop(0, this.rgba1)
        grd.addColorStop(1, this.rgba5)
        ctx.strokeStyle = grd
        if (x > end) {
          x -= Math.PI / 50
          this.tempNum = Number((1 - ((x - end) / (2 * Math.PI))) * this.num / 2).toFixed(0)
        } else {
          window.cancelAnimationFrame(this.stopLeft)
          this.runRight = true
        }
        ctx.arc(this.halfSize, this.halfSize, this.radius, -Math.PI / 2, x, true)
        ctx.stroke()
        this.drawText(this.tempNum, ctx)
        this.stopLeft = requestAnimationFrame(() => {
          this.drawLeftCircle(x, end, ctx)
        })
        if (this.runRight) {
          this.drawRightCircle(Math.PI / 2, -Math.PI / 2, ctx)
        }
      },
      drawRightCircle(x, end, ctx) {
        ctx.clearRect(this.halfSize, 0, this.halfSize, this.size)
        ctx.beginPath()
        ctx.moveTo(this.halfSize, this.halfSize + this.circle * 2)
        const grd1 = ctx.createLinearGradient(0, 0, 0, this.halfSize)
        grd1.addColorStop(0, this.rgba10)
        grd1.addColorStop(1, this.rgba5)
        ctx.strokeStyle = grd1
        if (x > end) {
          x -= Math.PI / 50
          this.tempNum = Number((this.num / 2) + ((1 - ((x - end) / (2 * Math.PI))) * this.num / 2)).toFixed(0)
        } else {
          window.cancelAnimationFrame(this.stopRight)
          this.drawText(this.num, ctx)
        }
        this.drawText(this.tempNum, ctx)
        ctx.arc(this.halfSize, this.halfSize, this.radius, Math.PI / 2, x, true)
        ctx.stroke()
        this.stopRight = requestAnimationFrame(() => {
          this.drawRightCircle(x, end, ctx)
        })
      },
      drawText(text, ctx) {
        ctx.clearRect(25, this.halfSize - 25, this.halfSize, 50)
        ctx.font = '48px Myriad Pro'
        ctx.textAlign = 'center'
        ctx.fillText(text, this.halfSize, this.halfSize + 16)
      },
      init() {
        const canvas = this.$el.querySelector('canvas')
        const ctx = canvas.getContext('2d')
        ctx.lineWidth = this.width
        this.drawLeftCircle(-Math.PI / 2, -Math.PI * 3 / 2, ctx)
      }
    },
    mounted() {
      this.$nextTick(() => {
        const scrollEvent = utils.throttle(() => {
          const scrollTop = $(this.$el).offset().top - $(window).scrollTop()
          const windowHeight = window.innerHeight
          if (scrollTop + this.size < windowHeight) {
            this.init()
            $(window).off('scroll', scrollEvent)
          }
        }, 500)
        $(window).on('scroll', scrollEvent)
      })
    }
  }
</script>