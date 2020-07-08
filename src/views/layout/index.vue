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
          <el-scrollbar tag="div">
            <router-view class="router-view" />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
    <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
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
        margin: 20px auto;
        .el-avatar {
          background: #0068ff;
          box-shadow: 0 0 4px 0 #e2e2e2;
        }
      }
      .asideItem {
        flex: 1;
      }
    }
    .view_box {
      display: flex;
      flex-direction: column;
      .el-scrollbar {
        height: 100%;
      }
      .el-main {
        flex: 1;
        padding: 0 !important;
        background: #e6ecf3;
        border-top: 1px solid #ccc;
        overflow: hidden;
      }
    }
    .router-view {
      width: 100%;
    }
  }
}

</style>
