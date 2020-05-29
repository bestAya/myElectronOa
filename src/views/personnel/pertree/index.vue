<template>
  <div class="wapper">
    <div class="item_tree" v-for="(item,index) in date" :key="index">
      <div class="item_tree_child">
        <div class="item_less">
          <div class="item_less_header">
            <span class="el-icon-school"></span>
            <div><i></i><span>{{item.label}}</span></div>
          </div>
          <div class="opstion_box" v-if="item.children">
            <ItemTree :date="item.children"></ItemTree>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'ItemTree',
  props:{
    date:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  data() {
    return {
      data: [],

    };
  },
  created(){
    console.log(this.date)
  }
};
</script>

<style lang="scss" scoped>
.item_tree {
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  position: relative;
  &:last-of-type {
    &::before {
      display: none;
    }
  }
  &:first-child {
    &::before {
      // height: calc(100% - 10px);
    }
  }

  &::before {
    content: " ";
    position: absolute;
    top: -4px;
    left: 7px;
    border-left: 1px dashed #ccc;
    height: 100%;
  }
  // &::after {
  //   content: " ";
  //   position: absolute;
  //   top: -4px;
  //   left: 7px;
  //   border-left: 1px dashed #ccc;
  //   height:100%;
  // }
  .item_less {
    display: flex;
    margin-left: -8px;
    flex-direction: column;
    position: relative;
    &::before {
      content: " ";
      position: absolute;
      top: 14px;
      left: -13px;
      border-top: 1px dashed #ccc;
      width: 20px;
    }
  }
  .item_less_header {
    display: flex;
    height: 30px;
    align-items: center;
    position: relative;

    &::after {
      content: " ";
      position: absolute;
      top: -16px;
      left: -17px;
      border-left: 1px dashed #ccc;
      height: 100%;
    }
  }
  .item_tree_child {
    position: relative;
    // &::before {
    //   content: " ";
    //   position: absolute;
    //   top: 15px;
    //   left: -25px;
    //   border-left: 1px dashed #ccc;
    //   height: 50%;
    // }
    // &::after {
    //   content: " ";
    //   position: absolute;
    //   top: -4px;
    //   left: 7px;
    //   border-left: 1px solid #000;
    //   height: 75%;
    // }
  }
  .opstion_box {
    position: relative;
    // &::before {
    //   content: " ";
    //   position: absolute;
    //   top: -4px;
    //   left: 7px;
    //   border-left: 1px dashed #ccc;
    //   height: 75%;
    // }
  }
}
</style>
