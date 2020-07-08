<template>
  <div class="m_t wrapper_layout">
    <div class="todo_list">
      <MenuList :menuList="menuData" class="menuList">
        <div class="menu_header" slot="header">
          <el-input
            size="small"
            placeholder="请输入内容"
            class="input-with-select"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="search"
            ></el-button>
          </el-input>
        </div>
      </MenuList>
      <router-view class="router-view" />
    </div>
  </div>
</template>

<script>
import MenuList from "@/components/menu/index.vue";
import { remote } from "electron";
let menuTemplate = [
  {
    label: "New Window",
    click() {
      console.log("New Window");
    },
  },
  {
    label: "New Window with Settings",
    submenu: [{ label: "Basic" }, { label: "Pro" }],
  },
];
let m = remote.Menu.buildFromTemplate(menuTemplate);
export default {
  components: { MenuList },
  data() {
    return {
      menuData:[
        {
          title:'代办任务',
          dataList:[
            {
              title:'代办',
              path:'/todo/list'
            },
            {
              title:'已办',
              path:'/todo/overlist'
            },
          ]
        }
      ],
    };
  },
  mounted() {
    window.addEventListener("contextmenu", this.setMuen);
  },
  methods: {
    setMuen(e) {
      e.preventDefault();
      m.popup({ window: remote.getCurrentWindow() });
    },
    search() {
      let option = {
        title: "这是待办列表",
        icon: require("../../assets/img/favicon.png"),
        body: "需要做出一线操作",
        silent: true,
      };
      let myNotification = new window.Notification(option.title, option);
      myNotification.onclick = () => {
        console.log("通知被点击");
        this.$router.push("/info");
      };
    },
  },
  beforeDestroy() {
    window.removeEventListener("contextmenu", this.setMuen);
  },
};
</script>

<style lang="scss" scoped>
.bg-purple {
  background: #fff;
  margin-bottom: 10px;
}

.m_t {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0;
  .todo_list {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    .menuList {
      margin-right: 20px;
      .menu_header{
        padding: 20px 0;
      }
    }
    .router-view{
      flex: 1;
    }
  }
}
</style>
