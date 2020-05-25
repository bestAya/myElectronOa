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
        <div class="drag_hader">
          <div>
            <span class="el-icon-minus" @click="minimize"></span>
            <span class="el-icon-full-screen" @click="maximize"></span>
            <span class="el-icon-close" @click="close"></span>
          </div>
        </div>
        <el-main>
          <router-view class="router-view" />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import asideItem from "./asideitem/index.vue";
const { ipcRenderer } = require("electron");
export default {
  components: { asideItem },
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
  },
  methods: {
    minimize() {
      ipcRenderer.send("minimize");
    },
    close() {
      ipcRenderer.send("close");
    },
    maximize() {
      ipcRenderer.send("maximize");
    },
  },
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
          box-shadow: 0 0 0 3px #fff;
        }
      }
      .asideItem {
        flex: 1;
      }
    }
    .view_box {
      display: flex;
      flex-direction: column;
      .drag_hader {
        height: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        -webkit-app-region: drag;

        div {
          display: flex;
          height: 100%;
          align-items: center;
          line-height: 100%;
          span {
            display: block;
            height: 100%;
            width: 30px;
            font-size: 16px;
            text-align: center;
            line-height: 30px;
            cursor: pointer;
            // -webkit-app-region: no-drag;
            &:hover {
              background: #22283d;
              color: #fff;
            }
          }
        }
      }
      .el-main {
        flex: 1;
        padding: 0 !important;
        background: #f2f2f2;
      }
    }

    .router-view {
      width: 100%;
    }
  }
}
</style>
