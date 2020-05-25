<template>
  <div class="wrapper">
    <div class="info">
      <div class="info_left">
        <!--检索-->
        <div class="info_left_seach">
          <el-input class="seach" size="small" placeholder="搜索">
            <i slot="suffix" class="suffix">(⌘+k)</i>
            <i slot="prefix" class="suffix el-input__icon el-icon-search"></i>
          </el-input>
          <el-button size="small" icon="el-icon-plus" circle></el-button>
        </div>
        <!--消息列表-->
        <div class="info_list">
          <!--应用-->
          <div class="info_box info_actve">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div class="application">
              <div>
                <h5>小白白</h5>
                <i class="tips">部门</i>
              </div>
              <span class="time">今天</span>
            </div>
          </div>
          <!--消息-->
          <div class="info_box">
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
            <div class="information">
              <div class="information_top">
                <div>
                  <h5>小白白</h5>
                  <i class="tips">TOP</i>
                </div>
                <span class="time">3月24日</span>
              </div>
              <p>这是提升内容</p>
            </div>
          </div>
        </div>
      </div>
      <div class="info_right"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.suffix {
  line-height: 32px !important;
  font-style: normal;
  color: #999;
}
.el-input__inner {
  border-radius: 50px;
}
.wrapper {
  background: #fff;
  height: 100%;
  .info {
    display: flex;
   height: 100%;
    .info_left {
      width: 296px;
      box-sizing: border-box;
      border-right: 1px solid #ccc;
      .info_left_seach {
        display: flex;
        justify-content: space-between;
        padding: 20px 18px;
      }
      .seach {
        width: 215px;
      }
    }
    .info_right {
      flex: 1;
    }
  }
}
.info_actve {
  background: #e6e6e6;
  &::before {
    content: " ";
    position: absolute;
    width: 4px;
    height: 100%;
    top: 0;
    left: 0;
    background: #409eff;
  }
}
.info_box {
  display: flex;
  padding: 0 15px;
  height: 60px;
  position: relative;
  align-items: center;
  cursor: pointer;
  transition: background 0.4s ease-in-out;

  &:hover {
    background: #d6d6d8ec;
    p {
      color: #999 !important;
    }
  }
  .el-avatar {
    margin-right: 5px;
  }
  .application,
  .information {
    flex: 1;
    display: flex;
  }
  h5 {
    font-weight: initial;
    font-size: 14px;
  }
  i {
    font-style: normal;
  }
  .time {
    font-size: 12px;
    color: #999;
  }
  .application {
    justify-content: space-between;
    & > div {
      display: flex;
      align-items: center;
      flex: 1;
    }
  }
  .information {
    flex-direction: column;
    p {
      text-align: left;
      font-size: 12px;
      color: #bfbfbf;
    }
    .information_top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
