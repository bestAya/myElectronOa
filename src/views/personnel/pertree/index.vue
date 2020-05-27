<template>
  <div class="wapper">
    <div class="td-title no_before">
      <span class="el-icon-caret-right tree-open"></span>
      <div class="is_letter no_before">
        <div>
          <i class="el-icon-office-building"></i><span>金融科技中心</span>
        </div>
        <div class="is_child_box td-title">
          <span class="tree-close tree-open"></span>
          <div class="is_letter no_before">
            <i class=""></i><span>金融科技中心</span>
          </div>
        </div>
      </div>
    </div>
    <div class="td-title">
      <span class="tree-close tree-open"></span>
      <div class="is_letter no_before">
        <i class=""></i><span>金融科技中心</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      trerDate: {},
    };
  },
};
</script>

<style lang="scss" scoped>
.no_before::before {
  display: none;
}
.no_after::after {
  display: none;
}
.is_letter {
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    top: -20px;
    left: 5px;
    width: 5px;
    height: 40px;
    border-left: 2px dotted #ccc;
    z-index: 0;
  }
  &::after {
    content: " ";
    position: absolute;
    bottom: -20px;
    left: 5px;
    width: 1px;
    height: 40px;
    border-left: 2px dotted #ccc;
    // width: 1px;
    z-index: 1;
  }
}
.wapper {
  padding: 20px;
  .td-title {
    min-height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    & > span {
      display: block;
      height: 20px;
      width: 20px;
      margin-left: -4px;
      position: relative;
      font-size: 16px;
      cursor: pointer;
      z-index: 99;
    }
    .is_letter {
      display: flex;
      flex-direction: column;
      div:first-child {
        flex: 1;
        height: 40px;
        display: flex;
        align-items: center;
        line-height: 40px;
        i {
          display: block;
          width: 10px;
          height: 20px;
          line-height: 20px;
          margin-right: 10px;
          background: #fff;
        }
        span {
          font-size: 12px;
        }
      }
      .is_child_box {
      }
    }
  }
}
</style>
