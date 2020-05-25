<template>
  <div class="wrapper">
    <!--我的应用-->
    <div class="my_app">
      <el-row :gutter="15">
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </div>
    <!--全部应用-->
    <div class="all_app">
      <div>
        <div class="app_title">全部应用</div>
        <el-row :gutter="15">
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple">12312312</div></el-col
          >
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple"></div
          ></el-col>
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
          <el-col :xs="6" :sm="6" :md="4" :lg="4" :xl="4"
            ><div class="grid-content bg-purple-light"></div
          ></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px;
  .el-row {
    margin: 0 !important;
  }
  .el-col {
    border-radius: 4px;
    margin-bottom: 15px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 36px;
  }
}
.all_app {
  box-sizing: border-box;
}
.app_title {
  text-align: left;
  font-size: 22px;
  font-weight: bold;
}
</style>
