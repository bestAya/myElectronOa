<template>
  <div class="tabs-nav-list" ref="tabs-nav" >
    <div
      class="tabs-tab"
      :class="[active == index ? 'tabs-ink-bar-animated' : '']"
      v-for="(item, index) in list"
      :key="index"
      @click="active = index"
    >
      <div class="tabs-tab-btn" :name="index">{{ item.name }}</div>
    </div>
    <div class="tabs-ink-bar" ref="tabsbar"></div>
  </div>
</template>

<script>
export default {
  props: {
    tablist: {
      type: Array,
      default: function() {
        return [
          {
            name: "信息汇总",
          },
          {
            name: "已办任务",
          },
        ];
      },
    },
  },
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    active(val) {
      this.setStyle(val);
    },
  },
  mounted() {
      this.setStyle(this.active)
  },
  computed: {
    list() {
      return this.tablist;
    },
  },
  methods: {
    setStyle(active) {
      this.$nextTick(() => {
        let dome = document.querySelectorAll(".tabs-tab")[active];
        this.$refs.tabsbar.style.width = dome.clientWidth + "px";
        this.$refs.tabsbar.style.left = dome.offsetLeft + "px";
      });
    },
  },
};
</script>

<style>
.tabs-nav-list {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  display: flex;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s;
}
.tabs-tab {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 0 32px 0 0;
  padding: 12px 0;
  font-size: 14px;
  background: 0 0;
  border: 0;
  outline: none;
  cursor: pointer;
}
.tabs-tab-btn {
  outline: none;
}
.tabs-ink-bar {
  position: absolute;
  background: #1890ff;
  pointer-events: none;
  height: 2px;
  bottom: 0;
  transition: width 0.3s, left 0.3s, right 0.3s;
}
.tabs-ink-bar-animated {
  color: #1890ff;
}
</style>
