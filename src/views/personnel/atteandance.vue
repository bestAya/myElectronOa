<template>
  <div class="wrapper">
    <div class="Tree_pre">
      <IndexTree :date="treeDataSource" />
    </div>
    <div class="Tree_cen">
      <div class="Tree_cen_hader">
        <el-row :gutter="10">
          <el-col v-for="item in 12" :key="item" :span="3"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></el-col>
        </el-row>
      </div>
      <div class="calendar">
        <el-calendar>
          <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
          <template slot="dateCell" slot-scope="{ date, data }">
            <p :class="data.isSelected ? 'is-selected' : ''">
              {{
                data.day
                  .split("-")
                  .slice(1)
                  .join("-")
              }}
              {{ data.isSelected ? "✔️" : "" }}
            </p>
          </template>
        </el-calendar>
      </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  margin-left: 10px;
  display: flex;
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
    .Tree_cen_hader{
      background: #fff;
      border-radius: 4px;
      padding: 20px ;
      margin-bottom: 10px;
    }
    .calendar {
      flex: 1;
      background: #fff;
      border-radius: 4px;
    }
  }
}
</style>
