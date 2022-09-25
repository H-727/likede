<template>
  <div id="app-main">
    主页
  </div>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
#app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
  flex: 1;
  background-color: #f8fafd;
}
</style>

