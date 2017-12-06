<template>
<div class="view-login view-sign-index">
  <div class="login-wrap">
    <p class="welcome">{{$t("login.welcome")}}</p>
    <el-form :model="loginForm" :rules="rules" ref="loginForm">
      <el-form-item prop="login">
        <el-input placeholder="Usename or Email" v-model="loginForm.login">
          <i slot="suffix" class="icon-people"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd" class="password">
        <el-input placeholder="Password" v-model="loginForm.pwd" type="password" auto-complete="off">
          <i slot="suffix" class="icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-button @click="login">LOGIN</el-button>
      <div class="forget-link">
        <router-link class="link" :to="{name: 'signup_index', params: { type: 'pwd' }}">Forget password?</router-link>
      </div>
    </el-form>
  </div>
  <div class="signup-link"><router-link to="/signup" class="link">{{$t("login.signup")}}</router-link></div>
</div>
</template>

<script>
import request from 'common/request'
import cookie from 'common/cookie'
import md5 from 'blueimp-md5'

const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  // eslint-disable-line
const pwdReg = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9]{8,}/  // eslint-disable-line

export default {
  data() {
    return {
      loginForm: {
        login: null,
        pwd: null
      },
      rules: {
        login: [
          { validator: (rule, value, callback) => {
            if (!value) {
              this.$error(this.$t('invalid.erequired'))
              callback(new Error(''))
            } else if (!emailReg.test(value)) {
              this.$error(this.$t('invalid.ecorrect'))
              callback(new Error(''))
            } else {
              callback()
            }
          }, message: '', trigger: 'blur' }
        ],
        pwd: [
          { validator: (rule, value, callback) => {
            if (!value) {
              this.$error(this.$t('invalid.prequired'))
              callback(new Error(''))
            } else if (!pwdReg.test(value)) {
              this.$error(this.$t('invalid.pcorrect'))
              callback(new Error(''))
            } else {
              callback()
            }
          }, message: '', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(md5(this.loginForm.pwd))
          const data = {
            LoginSubmit: {
              login: this.loginForm.login,
              pwd: md5(this.loginForm.pwd)
            }
          }
          request.post('/s/rest/mmrs/loginSubmit', data).then(data => {
            cookie.setCookie('tk', data.tk)
            this.$router.push({ name: 'user_index' })
          }, data => {
            data && this.$alert(data.info)
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style lang="sass" src="styles/views/login/login.scss"></style>