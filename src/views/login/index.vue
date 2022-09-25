<template>
  <div class="login-container">
    <div class="login">
      <img src="../../assets/login_images/logo.png" class="logo" alt="">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >

        <el-form-item prop="loginName">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="loginName"
            v-model="loginForm.loginName"
            placeholder="请输入账号"
            name="loginName"
            tabindex="1"
            auto-complete="on"
          />
        </el-form-item>

        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="请输入密码"
            name="password"
            tabindex="2"
            auto-complete="on"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
        <el-form-item prop="code">
          <el-row>
            <el-col :span="17">
              <span class="svg-container">
                <svg-icon icon-class="user" />
              </span>
              <el-input
                ref="code"
                v-model="loginForm.code"
                placeholder="请输入验证码"
                name="code"
                tabindex="3"
                auto-complete="on"
              />
            </el-col>
            <el-col :span="7">
              <img class="code-img" :src="codeImg" alt="" @click="getImageCode">
            </el-col>
          </el-row>
        </el-form-item>

        <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="login">Login</el-button>

      </el-form>
    </div>
  </div>
</template>

<script>
import { getImageCodeAPI } from '@/api'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        loginName: 'admin',
        password: 'admin',
        code: '',
        clientToken: '',
        loginType: 0
      },
      rules: {
        loginName: [{ required: true, trigger: 'blur', message: '请输入账号' }],
        password: [{ required: true, trigger: 'blur', message: '请输入密码' },
          { min: 5, max: 16, trigger: 'blur', message: '密码格式错误' }],
        code: [{ required: true, trigger: 'blur', message: '请输入验证码' }]
      },
      loading: false,
      passwordType: 'password',
      codeImg: ''
    }
  },
  created() {
    this.getImageCode()
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    async login() {
      try {
        await this.$refs.loginForm.validate()
        this.loading = true
        await this.$store.dispatch('user/LOGIN', this.loginForm)
        const msg = this.$store.state.user.data.msg
        if (msg === '登录成功') {
          this.$router.push('/')
          this.$message({
            message: msg,
            type: 'success'
          })
        } else this.$message.error(msg)
      } catch (error) {
        new Error(error)
      } finally {
        this.loading = false
      }
    },
    async getImageCode() {
      this.loginForm.clientToken = Math.floor(Math.random() * 1000)
      const data = await getImageCodeAPI(this.loginForm.clientToken)
      this.codeImg = data.config.url
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#999;
$cursor: #999;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}
body{
  -webkit-font-smoothing: antialiased;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px #fff inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.logo{
  width: 96px;
  height: 96px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translate(-50%,-50%);
}
.login-container {
  position: relative;
  min-height: 100%;
  width: 100%;
  background:url('../../assets/login_images/background.be4fae7d.png') no-repeat;
  overflow: hidden;

  .login{
    position: absolute;
    width: 518px;
    height: 388px;
    top: 50%;
    left: 50%;
    margin-top: -194px;
    margin-left: -259px;
    padding: 76px 35px 0;
    background: #fff;
    -webkit-box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    box-shadow: 0 3px 70px 0 rgb(30 111 72 / 35%);
    border-radius: 10px;
    .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 0;
    margin: 0 auto;
    overflow: hidden;
    .el-col{
      height: 52px;
      img{
        height: 100%;
        width: 100%;
      }
    }
   }
   .el-button{
    height: 52px;
    background: linear-gradient(262deg,#2e50e1,#6878f0);
    opacity: .91;
    border-radius: 8px;
    color: #fff;
    text-shadow: 0 7px 22px #cfcfcf;
   }
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
