<template>
  <div
    class="todo_scroll"
    v-infinite-scroll="load"
    infinite-scroll-disabled="disabled"
  >
    <el-row :gutter="20">
      <el-col
        :xs="24"
        :sm="12"
        :md="8"
        :lg="8"
        :xl="6"
        v-for="item in count"
        :key="item"
      >
        <div class="grid-content bg-purple" @click="handelTag(item)">
          <div class="todo_header">
            <p>确认收费(二)测试24万</p>
            <span>2020-06-24</span>
          </div>
          <div class="todo_tip">
            <div>
              <p><i class="el-icon-postcard"></i><span>垫资</span></p>
              <p><i class="el-icon-user"></i><span>张三</span></p>
            </div>
            <div class="todo_tip_gurp">
              <p><i class="el-icon-alarm-clock"></i><span>2020-06-24</span></p>
              <p><i class="tag"></i><span class="tag-text">正常</span></p>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <p v-if="loading">加载中...</p>
    <p v-if="noMore">没有更多了</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
      loading: false,
    };
  },
  computed: {
    noMore() {
      return this.count >= 20;
    },
    disabled() {
      return this.loading || this.noMore;
    },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    },
    handelTag(item) {
      this.$emit("handelTag", item);
    },
  },
};
</script>

<style lang="scss">
.todo_scroll {
  flex: 1;
  // overflow: auto;
  .bg-purple {
    min-width: 272px;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    cursor: pointer;
    box-shadow: 0 0 0 0 #ccc;
    margin-bottom: 20px;
  }
}
.todo_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;
  p {
    font-size: 14px;
  }
  span {
    font-size: 14px;
    color: #999;
  }
}
.todo_tip {
  .todo_tip_gurp {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  p {
    display: flex;
    font-size: 12px;
    padding: 5px 0;
    align-items: center;
    i {
      font-size: 16px;
    }
    span {
      margin-left: 10px;
      color: #666;
    }
    .tag {
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #409eff;
    }
    .tag-text {
      color: #409eff;
      font-size: 12px;
    }
  }
}
</style>
