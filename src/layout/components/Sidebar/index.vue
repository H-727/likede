<template>
  <div>
    <el-menu>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu" />
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location" />
          <span>导航一</span>
        </template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-submenu> -->
      <sidebar-item v-for="(item,index) in sidebarlist" :key="index" :sum="(index+1)" :value="item" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data() {
    return {
      sidebarlist: [
        { title: '帝可得', icon: 'home' },
        { title: '工单管理', icon: 'gongdan', children: ['运营工单', '运维工单'] },
        { title: '点位管理', icon: 'dianwei', children: ['区域管理', '点位管理', '合作商管理'] },
        { title: '设备管理', icon: 'shebei', children: ['设备管理', '设备状态', '设备类型管理'] },
        { title: '人员管理', icon: 'renyuan', children: ['人员列表', '人员统计', '工作量列表'] },
        { title: '商品管理', icon: 'shangpin', children: ['商品类型', '商品管理'] },
        { title: '策略管理', icon: 'celue' },
        { title: '订单管理', icon: 'dingdan' },
        { title: '对账统计', icon: 'duizhang' }
      ]
    }
  }

}
</script>
