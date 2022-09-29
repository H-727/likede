<template>
  <el-menu-item v-if="obj.children.length === 1" :index="obj.children[0].path">
    <i :class="'iconfont icon-'+obj.children[0].meta.icon" />
    <span slot="title">{{ obj.children[0].meta.title }}</span>
  </el-menu-item>
  <el-submenu v-else :index="obj.path">
    <template slot="title">
      <i :class="'iconfont icon-'+obj.meta.icon" />
      <span>{{ obj.meta.title }}</span>
    </template>
    <el-menu-item v-for="(item) in obj.children" :key="item.path" :index="item.path">{{ item.meta.title }}</el-menu-item>
  </el-submenu>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
