<template>
  <div class="wrapper">
    <div class="Tree_pre">
      <IndexTree :date="treeDataSource" />
    </div>
    <div class="Tree_cen">
      <el-table header-cell-class-name="table-head" :data="tableData">
        <el-table-column prop="date" label="头像" width="80">
          <template>
            <div>
              <el-avatar
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              >
                user
              </el-avatar>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="130">
          <template slot-scope="scope">
            <div class="table-flex">
              <span>{{ scope.row.name }}</span
              ><i class="tips">在职</i>
            </div>
          </template>
        </el-table-column>
        <el-table-column class="1" prop="name" label="部门"> </el-table-column>
        <template v-if="isTableSize">
          <el-table-column prop="name" label="职位"> </el-table-column>
          <el-table-column prop="name" label="电话"> </el-table-column>
          <el-table-column prop="name" label="企业微信"> </el-table-column>
          <el-table-column prop="date" label="入职时间"> </el-table-column>
        </template>

        <el-table-column label="操作" width="280">
          <template>
            <el-button-group size="small">
              <el-button type="text">文字按钮</el-button>
              <el-button type="text">文字按钮</el-button>
              <el-button type="text">文字按钮</el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import IndexTree from "./pertree/index";

export default {
  components: { IndexTree },
  data() {
    return {
      treeDataSource: [
        {
          label: "一级 1",
          pid: 0,

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
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      isTableSize: true,
    };
  },
  methods: {
    handleResize() {
      this.isTableSize = document.documentElement.clientWidth > 1000;
    },
  },
  computed: {},
  mounted() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  margin-left: 10px;
  display: flex;
  overflow: hidden;
  .Tree_pre {
    background: #fff;
    width: 238px;
    border-radius: 4px;
  }
  .Tree_cen {
    flex: 1;
    display: flex;
    margin-left: 10px;
    flex-direction: column;
    align-content: space-between;
    overflow-y: auto;
    overflow-x: hidden;
    background: #fff;
    transition: 0.5s all ease;
    .table-flex {
      display: flex;
      align-items: center;
    }
  }
  .el-table .el-button {
    padding: 0 10px;
    border-right: 1px #ccc solid;
  }
  .el-table .el-button:last-child {
    border-right: none;
  }
}
</style>
