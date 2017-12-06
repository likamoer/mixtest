<template>
<div class="view-login view-signup">
  <div class="signup-wrap login-wrap">
    <p class="welcome" v-if="type === 'pwd'">{{$t("signup.resetpwd")}}</p>
    <p class="welcome" v-else>{{$t("signup.welcome")}}</p>
    <el-form :model="signupForm" :rules="rules" ref="signupForm">
      <el-form-item prop="login">
        <el-input placeholder="Enter Email" v-model="signupForm.login">
          <i slot="suffix" class="icon-email"></i>
        </el-input>
      </el-form-item>
      <el-form-item prop="captcha" class="captcha">
        <el-input placeholder="Verify Code" v-model="signupForm.captcha">
          <template slot="append">
            <span @click="getCode">Get Verify Code</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input placeholder="Password" v-model="signupForm.pwd" type="password" auto-complete="off">
          <i slot="suffix" class="icon-lock"></i>
        </el-input>
      </el-form-item>
      <el-button @click="signup">{{$t("signup.submit")}}</el-button>
      <div class="login-link">
        <router-link v-if="type != 'pwd'" class="forget link" to="/login">{{$t("signup.already")}}</router-link>
      </div>
    </el-form>
  </div>
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
      signupForm: {
        login: null,
        pwd: null,
        captcha: null
      },
      type: null,  // pwd: 找回密码，否则是注册状态,
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
        captcha: [
          { validator: (rule, value, callback) => {
            if (!value) {
              this.$error(this.$t('invalid.crequired'))
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
  mounted() {
    this.type = this.$route.params && this.$route.params.type
    console.log(this.type)
  },
  methods: {
    getCode() {
      if (!this.signupForm.login) { // 获取验证码前，检查邮件的合法性
        this.$error(this.$t('invalid.erequired'))
        return false
      } else if (!emailReg.test(this.signupForm.login)) {
        this.$error(this.$t('invalid.ecorrect'))
        return false
      }
      request.post('/s/rest/mmrs/sendCaptchaMsg', {
        CaptchaSendRequest: {
          login: this.signupForm.login,
          action: this.type === 'pwd' ? 'login' : 'reg'  // 操作类型： 注册：reg，找回密码：login
        }
      }).then(data => {
        this.$notify({ // eslint-disable-line
          title: this.$t('signup.hassent'),
          message: this.$t('signup.message1') + this.login + this.$t('signup.message2'),
          duration: 0
        })
      }, data => {
        data && this.$alert(data.info)
      })
    },
    signup() {
      this.$refs.signupForm.validate(valid => {
        if (valid) {
          console.log(md5(this.signupForm.pwd))
          const data = {
            RegSubmit: {
              login: this.signupForm.login,
              pwd: md5(this.signupForm.pwd),
              captcha: this.signupForm.captcha
            }
          }
          const url = '/s/rest/mmrs/' + (this.type === 'pwd' ? 'findPwdSubmit' : 'regSubmit')
          request.post(url, data).then(data => {
            if (data && data.tk) {
              cookie.setCookie('tk', data.tk)
              this.$router.push({ name: 'user_index' })
            } else {
              this.$info(this.$t('signup.resetsuc'))
              this.$router.push({ name: 'login_index' })
            }
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
