<template>
  <div class="wapper">
    <div
      v-for="(item, index) in date"
      :key="index"
      :class="[item.pid == 0 ? 'item_tree_none' : '', 'item_tree']"
    >
      <div class="item_tree_child">
        <div :class="[item.pid == 0 ? 'item_less_none' : '', 'item_less']">
          <div
            :class="[
              item.pid == 0 ? 'item_less_header_none' : '',
              'item_less_header',
            ]"
          >
            <span
              :class="[item.pid == 0 ? 'el-icon-coin' : 'el-icon-postcard']"
            ></span>
            <div class="centent">
              <span>{{ item.label }}</span> <p></p>
            </div>
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
  name: "ItemTree",
  props: {
    date: {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data() {
    return {
      data: [],
    };
  },
  created() {
  },
};
</script>

<style lang="scss" scoped>
.item_tree_none {
  padding-left: 20px !important;
  &::before {
    content: "";
    display: none;
  }
  .item_less_none {
    &::before {
      content: "";
      display: none;
    }
  }
  .item_less_header_none {
    &::after {
      content: "";
      display: none;
    }
  }
}
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
  &::before {
    content: " ";
    position: absolute;
    top: -4px;
    left: 7px;
    border-left: 1px dashed #ccc;
    height: 100%;
  }
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
    font-size: 12px;
    cursor: pointer;
    color: #999;
    &::after {
      content: " ";
      position: absolute;
      top: -16px;
      left: -17px;
      border-left: 1px dashed #ccc;
      height: 100%;
    }
    &:hover {
      color: #409eff;
    }
    & > span {
      font-size: 16px;
    }
    .centent {
      margin-left: 10px;
    }
  }
  .item_tree_child {
    position: relative;
  }
  .opstion_box {
    position: relative;
  }
}
</style>
