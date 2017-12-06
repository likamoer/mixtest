<template>
<div class="view-user-index">
  <el-container>
    <el-aside width="100px">
      <div class="user-head"></div>
      <div class="tab">
        <div class="tab-item">
          <router-link to="mining"></router-link>
        </div>
        <div class="tab-item">
          <router-link to="miner"></router-link>
        </div>
        <div class="tab-item">
          <router-link to="price"></router-link>
        </div>
        <div class="tab-item">
          <router-link to="profit"></router-link>
        </div>
        <div class="tab-item">
          <router-link to="setting"></router-link>
        </div>
        <div class="tab-item">
          <router-link to="billing"></router-link>
        </div>
      </div>
      <div class="logout" @click="logout">
        <i class="icon icon-power"></i>
      </div>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</div>
</template>

<script>
import cookie from 'common/cookie'

export default {
  methods: {
    logout() {
      cookie.delCookie('token')
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="sass" src="styles/views/user/index.scss"></style>