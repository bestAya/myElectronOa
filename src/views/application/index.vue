<template>
  <div class="wrapper">
    <!--我的应用-->
    <div class="my_app">
      <div>
        <div class="app_title">我的应用</div>
        <el-row :gutter="15">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
            <div class="grid-content bg-purple">
              <el-avatar src="https://cdn.docschina.org/static/media/element.ba99f6df.svg">user</el-avatar>
              <div class="app_centent">
                <h5>打卡</h5>
                <p class="Single_Omit">专业、智能的考勤</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
            <div class="grid-content bg-purple">
              <span class="add_plus el-icon-plus"></span>
              <div class="app_centent">
                <div>添加应用</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!--全部应用-->
    <div class="all_app">
      <div>
        <div class="app_title">全部应用</div>
        <el-row :gutter="15">
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
            <div class="grid-content bg-purple">
              <el-avatar src="https://cdn.docschina.org/static/media/element.ba99f6df.svg">user</el-avatar>
              <div class="app_centent">
                <h5>打卡</h5>
                <p class="Single_Omit">专业、智能的考勤</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
            <div class="grid-content bg-purple">
              <el-avatar src="https://cdn.docschina.org/static/media/antdesign.b29324c4.svg">user</el-avatar>
              <div class="app_centent">
                <div class="app_centent_title"><h5>打卡</h5><i class="tips tips_danger">部门</i></div>
                <p class="Single_Omit">专业、智能的考勤</p>
              </div>
            </div>
          </el-col>
          <el-col :xs="12" :sm="6" :md="6" :lg="6" :xl="4">
            <div class="grid-content bg-purple">
              <el-avatar src="https://cdn.docschina.org/static/media/sinon.bfa1254a.png">user</el-avatar>
              <div class="app_centent">
                <div class="app_centent_title"><h5>审批</h5><i class="tips tips_preoss">News</i></div>
                <p class="Single_Omit">专业、智能的审批,快捷方便</p>
              </div>
            </div>
          </el-col>
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
    // transition: all 0.1s ease-in;
  }
  .grid-content {
    border-radius: 4px;
    height: 80px;
    display: flex;
    align-items: center;
    padding: 20px;
    text-align: left;
    background: #fff;
    cursor: pointer;
    transition: box-shadow 0.3s ease-in;
    box-shadow: 0 0 2px 0 #ccc;
    &:hover {
      box-shadow: 0 6px 7px 0 #ccc;
    }
    .add_plus {
      display: inline-block;
      box-sizing: border-box;
      text-align: center;
      color: #fff;
      background: #c0c4cc;
      width: 40px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .el-avatar {
      margin-right: 10px;
      background: transparent;
    }
    .app_centent {
      flex: 1;
      overflow: hidden;
      .app_centent_title{
        display: flex;
        align-items: center;
      }
      h5 {
        font-size: 14px;
      }
      p {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.all_app {
  box-sizing: border-box;
}
.app_title {
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  padding: 20px 10px;
}
</style>
