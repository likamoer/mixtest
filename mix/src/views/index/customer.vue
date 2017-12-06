<template>
<section class="sec customer">
  <h2 class="title">{{$t("index.customer.title")}}</h2>
  <p class="desc">{{$t("index.customer.desc")}}</p>
  <el-carousel class="wrap" interval="1000000" height="468px" autoplay="false" indicator-position="outside">
    <el-carousel-item>
      <div class="img jeffery"></div>
      <p class="name">{{$t("index.customer.jeffery.name")}}</p>
      <p class="title">{{$t("index.customer.jeffery.title")}}</p>
      <p class="content">{{$t("index.customer.jeffery.content")}}</p>
    </el-carousel-item>
    <el-carousel-item>
      <div class="img jeffery"></div>
      <p class="name">{{$t("index.customer.jeffery.name")}}</p>
      <p class="title">{{$t("index.customer.jeffery.title")}}</p>
      <p class="content">{{$t("index.customer.jeffery.content")}}</p>
    </el-carousel-item>
    <el-carousel-item>
      <div class="img jeffery"></div>
      <p class="name">{{$t("index.customer.jeffery.name")}}</p>
      <p class="title">{{$t("index.customer.jeffery.title")}}</p>
      <p class="content">{{$t("index.customer.jeffery.content")}}</p>
    </el-carousel-item>
  </el-carousel>
</section>
</template>

<script>
export default {
  name: 'customer'
}
</script>

<style lang="sass" src="styles/views/common/customer.scss"></style>