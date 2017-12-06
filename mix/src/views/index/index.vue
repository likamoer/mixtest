<template>
  <div class="view-index">
    <el-container>
      <el-main>
        <first></first>
        <section class="sec what">
          <h2 class="title">{{$t("index.what.title")}}</h2>
          <p class="desc">{{$t("index.what.desc")}}</p>
          <el-row class="content">
            <el-col :span="8">
              <div class="grid-content">
                <div class="icon icon-cloud"></div>
                <h3>{{$t("index.what.cloudName1")}}</h3>
                <p class="desc">{{$t("index.what.cloudDesc1")}}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="icon icon-hash"></div>
                <h3>{{$t("index.what.cloudName2")}}</h3>
                <p class="desc">{{$t("index.what.cloudDesc2")}}</p>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content">
                <div class="icon icon-profit"></div>
                <h3>{{$t("index.what.cloudName3")}}</h3>
                <p class="desc">{{$t("index.what.cloudDesc3")}}</p>
              </div>
            </el-col>
          </el-row>
        </section>
        <products></products>
        <section class="sec why">
          <h2 class="title">{{$t("index.why.title")}}</h2>
          <p class="desc">{{$t("index.why.desc")}}</p>
          <el-col :span="8">
            <circle-loading></circle-loading>
            <h3 class="number">{{$t("index.why.first.somenumber")}}</h3>
            <p class="number-desc">{{$t("index.why.first.numberdesc")}}</p>
          </el-col>
          <el-col :span="8">
            <circle-loading :num="756.8"></circle-loading>
            <h3 class="number">{{$t("index.why.second.somenumber")}}</h3>
            <p class="number-desc">{{$t("index.why.second.numberdesc")}}</p>
          </el-col>
          <el-col :span="8">
            <circle-loading :num="8756"></circle-loading>
            <h3 class="number">{{$t("index.why.third.somenumber")}}</h3>
            <p class="number-desc">{{$t("index.why.third.numberdesc")}}</p>
          </el-col>
        </section>
        <datachart></datachart>
        <section class="sec glance">
          <h2 class="title">{{$t("index.glance.title")}}</h2>
          <p class="desc">{{$t("index.glance.desc")}}</p>
          <div class="btn-wrap"><button class="btn btn-default join-btn">{{$t("index.glance.join")}}</button></div>
          <el-carousel type="card" interval="1000000" height="440px" autoplay="false" indicator-position="none">
            <el-carousel-item>
              <div class="item item1"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item item2"></div>
            </el-carousel-item>
            <el-carousel-item>
              <div class="item item3"></div>
            </el-carousel-item>
          </el-carousel>
        </section>
        <customer></customer>
        <section class="sec worldwide">
          <h2 class="title">{{$t("index.worldwide.title")}}</h2>
          <p class="desc">{{$t("index.worldwide.desc")}}</p>
          <div class="global mix-row">
            <div class="img">
              <div class="point-area" :style="{top: c.top, left: c.left}" v-for="c in cityInfo">
                <p class="point-name">{{$t('index.worldwide.'+c.name)}}</p>
                <div class="point-dot"></div>
                <div class="point point-shadow" :class="{ 'animate-1': c.ani, 'ripple-1': !c.ani}"></div>
                <div class="point point-shadow" :class="{ 'animate-2': c.ani, 'ripple-2': !c.ani}"></div>
                <div class="point point-shadow" :class="{ 'animate-3': c.ani, 'ripple-3': !c.ani}"></div>
              </div>
            </div>
          </div>
        </section>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CircleLoading from 'components/CircleLoading'
import First from './first'
import Products from './products'
import Datachart from './datachart'
import Customer from './customer'

export default {
  components: {
    CircleLoading,
    First,
    Products,
    Datachart,
    Customer
  },
  data() {
    return {
      cityInfo: [
        {
          name: 'silicon',
          top: '140px',
          left: '130px',
          ani: 'animate'
        }, {
          name: 'newyork',
          top: '110px',
          left: '230px'
        }, {
          name: 'paris',
          top: '90px',
          left: '450px'
        }, {
          name: 'israel',
          top: '130px',
          left: '540px',
          ani: 'animate'
        }, {
          name: 'moscow',
          top: '60px',
          left: '544px'
        }, {
          name: 'beijing',
          top: '110px',
          left: '750px',
          ani: 'animate'
        }, {
          name: 'singapore',
          top: '230px',
          left: '720px'
        }
      ]
    }
  }
}
</script>

<style lang="sass" src="styles/views/index.scss"></style>

