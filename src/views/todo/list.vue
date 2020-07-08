<template>
  <div>
    <!---->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      custom-class="dialog_box"
      :show-close="false"
    >
      <div slot="title" class="dialog_header">
        <span>这是一段信息</span>
        <div class="task-detail-action-list">
          <span class="el-icon-turn-off"></span>
          <span class="el-icon-edit"></span>
          <span class="el-icon-tickets"></span>
          <span class="el-icon-circle-close"></span>
        </div>
      </div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-row :gutter="20">
      <el-col :span="24">
        <p class="title">待办任务</p>
        <TodoList @handelTag="handelTag"></TodoList>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TodoList from "@/components/todolist/index.vue";

export default {
  components: { TodoList },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    handelTag(item) {
      console.log(item);
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-size: 14px;
  margin: 10px 0;
  font-weight: bold;
}
.el-row {
  flex: 1;
}
.el-row,
.el-col {
  height: 100%;
}
.el-row {
  overflow-x: auto;
}
.el-col {
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  min-width: 340px;
}
.dialog_box {
  .dialog_header {
    padding: 15px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .task-detail-action-list {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: block;
        width: 32px;
        height: 32px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
        transition: 218ms;
        background: transparent;
        transition-property: background, color;
        text-align: center;
        font-size: 18px;
        line-height: 24px;
        font-weight: 400;
        margin-left: 12px;
        &:hover {
          background: #ecf6fe;
          color: #1b9aee;
        }
      }
    }
  }
}
</style>
