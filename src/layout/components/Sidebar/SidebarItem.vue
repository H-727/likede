<template>
  <el-submenu v-if="!!value.children" :index="sum">
    <template slot="title">
      <i :class="'iconfont icon-'+value.icon" />
      <span>{{ value.title }}</span>
    </template>
    <el-menu-item v-for="(item,index) in value.children" :key="item" :index="`${sum}-${index+1}`">{{ item }}</el-menu-item>
  </el-submenu>
  <el-menu-item v-else :index="sum">
    <i :class="'iconfont icon-'+value.icon" />
    <span slot="title">{{ value.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    sum: {
      type: Number,
      required: true
    }
  }

}
</script>

<style>

</style>
