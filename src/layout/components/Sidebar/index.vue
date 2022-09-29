<template>
  <div>
    <el-menu
      router
    >
      <sidebar-item v-for="(router,index) in routers" :key="index" :obj="router" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    routers() {
      return this.$router.options.routes.filter(item => !item.hidden)
    }
  }
}
</script>
