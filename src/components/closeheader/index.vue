<template>
  <div class="drag_hader">
    <div>
      <span class="el-icon-minus" @click="minimize"></span>
      <span class="el-icon-full-screen" @click="maximize"></span>
      <span class="el-icon-close" @click="close"></span>
    </div>
  </div>
</template>

<script>
const { remote } = require("electron");
const currentWindow = remote.getCurrentWindow();
export default {
  data() {
    return {
      maxFlag: false,
    };
  },
  methods: {
    minimize() {
      currentWindow.minimize();
    },
    close() {
      currentWindow.hide();
    },
    maximize() {
      this.maxFlag ? currentWindow.unmaximize() : currentWindow.maximize();
      this.maxFlag = !this.maxFlag;
    },
  },
};
</script>

<style lang="scss">
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
      -webkit-app-region: no-drag;
      &:hover {
        background: #22283d;
        color: #fff;
      }
    }
  }
}</style
>>
