<template>
  <div class="wrapper">
    <el-container>
      <el-aside>
        <div class="avatar_header">
          <el-avatar size="medium">user</el-avatar>
        </div>
        <asideItem class="asideItem"></asideItem>
      </el-aside>
      <el-container class="view_box">
        <CloseHead />
        <el-main>
          <router-view class="router-view" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideItem from "./asideitem/index.vue";
import CloseHead from "@/components/closeheader/index.vue";
export default {
  components: { asideItem, CloseHead },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},

  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  .el-container {
    height: 100vh;
    .el-aside {
      width: 66px !important;
      background: #22283d;
      display: flex;
      flex-direction: column;

      .avatar_header {
        margin: 20px 0;
        .el-avatar {
          background: #0068ff;
          box-shadow:0 0 4px 0 #e2e2e2;
        }
      }
      .asideItem {
        flex: 1;
      }
    }
    .view_box {
      display: flex;
      flex-direction: column;

      .el-main {
        flex: 1;
        padding: 0 !important;
        background: #e6ecf3;
        border-top: 1px solid #ccc;
      }
    }

    .router-view {
      width: 100%;
    }
  }
}
</style>
