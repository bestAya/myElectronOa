<template>
  <div
    class="wrapper_layout menu-list"
    :class="['menu-list', setpullFlag ? 'menu-list-push' : 'menu-list-pull']"
  >
    <div>
      <div class="search">
        <slot name="header"></slot>
      </div>
      <div class="menu-list-ul" v-for="(item, index) in menuList" :key="index">
        <div class="menu-list-title">
          <p class="title">{{ item.title }}</p>
        </div>
        <ul v-for="(itemList, Lindex) in item.dataList" :key="Lindex">
          <li>
            <router-link
              :to="itemList.path"
              tag="div"
              exact-active-class="active-list"
            >
              <i :class="[itemList.icon ? itemList.icon :'el-icon-finished']"></i>
              <div>
                <span>{{ itemList.title }}</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="menu_btn el-icon-d-arrow-right"
      @click="pullFlag = !pullFlag"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    menuList: {
      type: Array,
      default: function() {
        return [
          {
            title: "任务",
            dataList: [{ title: "待办", path: "/todo/list" }],
          },
        ];
      },
    },
  },
  computed: {
    setpullFlag() {
      return this.pullFlag;
    },
  },
  data() {
    return {
      pullFlag: true,
    };
  },
};
</script>

<style lang="scss">
.menu-list-push {
  width: 287px;
  left: 0 !important;
}
.menu-list-pull {
  left: 0 !important;
  width: 20px;
  .menu_btn {
    background: #fff;
  }
}
.menu-list {
  height: 100vh;
  background: #fff;
  padding: 0 8px;
  position: relative;
  transition: 0.5s all ease;
  left: 0;
  display: flex;
  overflow: hidden;
  > div:first-child {
    flex: 1;
  }
  .menu_btn {
    width: 20px;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    color: #ccc;
    text-align: center;
    line-height: 100vh;
    cursor: pointer;
  }
  .search {
  }
  .menu-list-ul {
    border-bottom: 1px solid #e5e5e5;
    border-top: 1px solid #e5e5e5;
    padding-bottom: 5px;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    overflow-x: hidden;
    &:last-of-type {
      border: 0;
    }
  }
  .menu-list-ul:last-of-type{
    border-top: 0;
  }
  .menu-list-title {
    padding: 10px 8px;
    height: 40px;
  }
  li {
    padding: 4px 0;
    height: 44px;
    width: 100%;
    user-select: none;
    display: flex;
    align-items: center;
    .active-list {
      background: #f7f7f7;
    }
    div {
      display: flex;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 0 8px;
      width: 100%;
      height: 36px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background: #f7f7f7;
      }
      i {
        font-size: 16px;
        width: 20px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        margin-right: 8px;
        color: #595959;
      }
      span {
        font-size: 14px;
        color: #595959;
      }
    }
  }
}
</style>
