<template>
  <div class="wrapper">
    <div class="asideItem">
      <el-tooltip
        v-for="item in asidedate"
        :key="item.id"
        class="item"
        effect="dark"
        :content="item.title"
        placement="right"
      >
        <router-link
          :to="item.path"
          tag="div"
          class="asideItem_card"
          exact
          active-class="router-link-exact-activ"
        >
          <span :class="item.icon"></span>
        </router-link>
      </el-tooltip>
    </div>

    <div class="asideItem_footer">
      <el-tooltip class="item" effect="dark" content="提醒" placement="right">
        <div class="asideItem_card">
          <el-badge :value="12" class="item">
            <span class="el-icon-bell"></span>
          </el-badge>
        </div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="设置" placement="right">
        <div class="asideItem_card">
          <span class="el-icon-setting"></span>
        </div>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      asidedate: [
        {
          id: 1,
          title: "消息提醒",
          icon: "el-icon-chat-line-round",
          path: "/info"
        },
        { id: 2, title: "代办列表", icon: "el-icon-collection", path: "/todo" },
        { id: 3, title: "财务管理", icon: "el-icon-bank-card", path: "/" },
        { id: 4, title: "风控管理", icon: "el-icon-data-line", path: "/" },
        { id: 5, title: "人事管理", icon: "el-icon-user", path: "/" },
        { id: 6, title: "工作台", icon: "el-icon-table-lamp", path: "/workbench" },
        { id: 7, title: "应用", icon: "el-icon-menu", path: "/app" },
      ],
      active: 1
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="css">
  .asideItem .router-link-exact-activ {
  color: #fff !important;
  background: #409eff;
}
</style>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .asideItem {
    flex: 1;
  }
}

.asideItem_card {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 22px;
  color: #afafaf;
  transition: background 0.3s;
  cursor: pointer;
  &:hover {
    color: #fff;
    //   background: #409EFF;
  }
  span {
    // font-weight: 700;
  }
}

</style>