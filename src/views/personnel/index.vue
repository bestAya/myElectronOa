<template>
  <div class="wrapper_layout">
    <div class="per_list">
      <MenuList class="menuList" :menuList="menuList">
      </MenuList>
    </div>
    <div class="per_right">
      <router-view class="router-view" />
    </div>
  </div>
</template>

<script>
// import treeTable from "./pertree/tree-table";
import MenuList from "@/components/menu/index.vue";

export default {
  components: { MenuList },
  data() {
    return {
      menuList: [
        {
          title: "权限管理",
          dataList: [
            {
              title: "工资计算",
              path: "/personnel/wagelist",
              icon: "el-icon-wallet",
            },
            {
              title: "考勤管理",
              path: "/personnel/atteandance",
              icon: "el-icon-date",
            },
            {
              title: "员工管理",
              path: "/personnel/employee",
              icon: "el-icon-user",
            },
            {
              title: "文件管理",
              path: "/",
              icon: "el-icon-files",
            },
            {
              title: "审批管理",
              path: "/",
              icon: "el-icon-tickets",
            },
          ],
        },
      ],
    };
  },
  methods: {
   
  },
};
</script>

<style lang="scss" scoped>
.wrapper_layout {
  display: flex;
  height: 100%;
  .per_list {
    border-radius: 5px;
    box-shadow: 0 0 0 0 #ccc;
    height: 100%;
  }
  .menuList {
    height: 100%;
  }
  .per_right {
    flex: 1;
    padding: 10px 0;
    text-align: left;
    overflow: hidden;
  }
  .el-tab-pane {
    height: 100%;
  }
}
</style>
