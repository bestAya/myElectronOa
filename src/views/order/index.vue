<template>
  <div class="layout_flex">
    <MenuList class="menuList" :pullFlag.sync="menuListActive" :menuList="menuList"></MenuList>

    <router-view class="router-view layout_flex_right_auto" :class="[menuListActive ? 'PullActice' :'layout_flex_right_auto']" />
  </div>
</template>

<script>
import MenuList from '@/components/menu/index.vue'
export default {
  components: { MenuList },
  data() {
    return {
      menuListActive: true,
      menuList: [
        {
          title: '订单管理',
          dataList: [
            {
              title: '全部订单',
              path: '/order/list',
              icon: 'el-icon-wallet',
            },
            {
              title: '已完成',
              path: '/personnel/atteandance',
              icon: 'el-icon-date',
            },
            {
              title: '待付款',
              path: '/personnel/employee',
              icon: 'el-icon-user',
            },
            {
              title: '待发货',
              path: '/',
              icon: 'el-icon-files',
            },
            {
              title: '待收货',
              path: '/',
              icon: 'el-icon-tickets',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style>
.PullActice {
  width: calc(100% - 287px);
}
</style>