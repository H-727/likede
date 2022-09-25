<template>
  <div class="navbar">
    <div class="logo"><img src="@/assets/logo/logoone.png" alt=""></div>
    <el-row class="userinfo">
      <el-col style="height:35px;" :span="5"><img src="@/assets/images/user.png" alt=""></el-col>
      <el-col :span="14">欢迎您，{{ $store.state.user.data.userName }}</el-col>
      <el-col style="cursor: pointer;" :span="5"><div @click="logout">退出<i class="el-icon-caret-bottom" /></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('user/SET_TOKEN', '')
      this.$store.commit('user/SET_DATA', {})
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1999;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABwEAAAA8CAYAAACOysV5AAADG0lEQVR4nO3aR04DURBF0bYHhPWxFDbMLggDjIQEIjh0+O2uqn/OEt70vt3D49NhAAAA4Crub/fD3c3O2AAAAKxqb14AAIDreX59H17efDEBAABYlwgIAABwZUIgAAAAaxMBAQAANiAEAgAAsCYREAAAYCNCIAAAAGsRAQEAADYkBAIAALAGERAAAGBjQiAAAACtiYAAAAABCIEAAAC0JAICAAAEIQQCAADQiggIAAAQiBAIAABACyIgAABAMEIgAAAAS4mAAAAAAQmBAAAALCECAgAABCUEAgAAMJcICAAAEJgQCAAAwBwiIAAAQHBCIAAAAFOJgAAAAAkIgQAAAEwhAgIAACQhBAIAADCWCAgAAJCIEAgAAMAYIiAAAEAyQiAAAACXiIAAAAAJCYEAAACcIwICAAAkJQQCAABwiggIAACQmBAIAADAMSIgAABAckIgAAAAf4mAAAAABQiBAAAA/CQCAgAAFCEEAgAA8EUEBAAAKEQIBAAAYBABAQAA6hECAQAAEAEBAAAKEgIBAAD6JgICAAAUJQQCAAD0SwQEAAAoTAgEAADokwgIAABQnBAIAADQHxEQAACgA0IgAABAX0RAAACATgiBAAAA/RABAQAAOiIEAgAA9EEEBAAA6IwQCAAAUJ8ICAAA0CEhEAAAoDYREAAAoFNCIAAAQF0iIAAAQMeEQAAAgJpEQAAAgM4JgQAAAPWIgAAAAAiBAAAAxYiAAAAAfBICAQAA6hABAQAA+CYEAgAA1CACAgAA8IsQCAAAkJ8ICAAAwD9CIAAAQG4iIAAAAEcJgQAAAHmJgAAAAJwkBAIAAOQkAgIAAHCWEAgAAJCPCAgAAMBFQiAAAEAuIiAAAACjCIEAAAB5iIAAAACMJgQCAADkIAICAAAwiRAIAAAQnwgIAADAZEIgAABAbCIgAAAAswiBAAAAcYmAAAAAzCYEAgAAxCQCAgAAsIgQCAAAEI8ICAAAwGJCIAAAQCwiIAAAAE0IgQAAAHGIgAAAADQjBAIAAMQgAgIAANCUEAgAALA9ERAAAIDmhEAAAIANDcPwAWT/XbLChBneAAAAAElFTkSuQmCC);
    background-size: cover;
    background-repeat: no-repeat;
  .logo{
    margin-top: 10px;
    margin-left: 15px;
    width: 88px;
    img{
      width: 100%;
    }
  }
  .userinfo{
    margin-right: 24px;
    width: 240px;
    display: flex;
    align-items: center;
    color:#fff;
  }
}
</style>
