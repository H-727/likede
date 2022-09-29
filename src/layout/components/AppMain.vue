<template>
  <div id="app-main">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style lang="scss" scoped>
#app-main {
  /*50 = navbar  */
  padding: 20px;
  min-height: calc(100vh - 60px);
  position: relative;
  overflow: hidden;
  flex: 1;
  background-color: #f8fafd;
}
</style>

