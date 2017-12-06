<template>
  <section class="first">
    <div class="earth">
      <div class="first-layer"></div>
      <div class="second-layer"></div>
      <div class="third-layer"></div>
    </div>
    <div class="content">
      <h3 class="title">{{$t("index.first.title")}}</h3>
      <h2 class="cont">{{$t("index.first.cont")}}</h2>
      <p class="more">{{$t("more")}} ></p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'first'
}
</script>