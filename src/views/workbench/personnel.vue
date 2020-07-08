<template>
  <div class="personnel">
    <div class="personnel_header">
      <el-avatar
        shape="square"
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar>
      <div class="personnel_icon">
        <h5>张振亚</h5>
        <p><span>web前端开发</span></p>
      </div>
    </div>
    <div class="personnel_footer">
      <div>
        <span>3000</span>
        <p>销售</p>
      </div>
      <div>
        <span>3000</span>
        <p>销售</p>
      </div>
      <div>
        <span>3000</span>
        <p>销售</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.personnel {
  padding: 20px 24px 8px;
  height: 170px;
  .personnel_header {
    display: flex;
    align-items: center;
    .personnel_icon {
      flex: 1;
      margin-left: 20px;
      h5 {
        height: 30px;
        margin-top: 4px;
        margin-bottom: 0;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.85);
        font-size: 18px;
        line-height: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        word-break: break-all;
        font-weight: bold;
      }
    }
  }
  .personnel_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-top: 20px;
    div {
      width: 28%;
      span {
        margin-top: 4px;
        margin-bottom: 0;
        overflow: hidden;
        color: rgba(0, 0, 0, 0.85);
        font-size: 18px;
        line-height: 30px;
      }
      p {
        height: 22px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        line-height: 22px;
      }
      &:nth-child(2) {
        border-left: 1px solid #f0f0f0;
        border-right: 1px solid #f0f0f0;
      }
    }
  }
}
</style>
