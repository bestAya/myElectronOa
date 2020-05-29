<template>
  <div class="wrapper">
    <div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"
          ><a href="https://www.ele.me" target="_blank"
            >订单管理</a
          ></el-menu-item
        >
      </el-menu>
    </div>
    <div>
      <div class="per_list">
        <tree-table
          ref="recTree"
          @handlerExpand="handlerExpand"
          :list.sync="treeDataSource"
        ></tree-table>
      </div>
      <div class="per_right">
        <IndexTree :date="treeDataSource" />

        <router-view class="router-view" />
      </div>
    </div>
  </div>
</template>

<script>
import treeTable from "./pertree/tree-table";
import IndexTree from "./pertree/index";

export default {
  components: { treeTable, IndexTree },
  data() {
    return {
      activeIndex: "1",
      activeName: "second",
      treeDataSource: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "一级 2",
              children: [
                {
                  label: "二级 2-1",
                  children: [
                    {
                      label: "三级 2-1-1",
                    },
                  ],
                },
                {
                  label: "二级 2-2",
                  children: [
                    {
                      label: "三级 2-2-1",
                    },
                  ],
                },
              ],
            },
            {
              label: "一级 3",
              children: [
                {
                  label: "二级 3-1",
                  children: [
                    {
                      label: "三级 3-1-1",
                    },
                  ],
                },
                {
                  label: "二级 3-2",
                  children: [
                    {
                      label: "三级 3-2-1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handlerExpand(m) {
      m.isExpand = !m.isExpand;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;

  & > div:last-child {
    flex: 1;
    display: flex;
    box-sizing: border-box;
    .per_list {
      background: #fff;
      width: 250px;
      padding: 10px 0;
      border-radius: 5px;
      box-shadow: 0 0 0 0 #ccc;
      margin: 10px;
    }
    .per_right{
      flex: 1;
      padding: 10px 0;
      text-align: left;
    }

  }
  .el-tab-pane {
    height: 100%;
  }
}</style
>>
