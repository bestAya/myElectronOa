<template>
  <div class="calendar">
    <div class="calendar_header">
      <div class="calendar_header_time">
        <span class="time_year">{{ year }}年</span>
        <span class="time_month">{{ showMonth }}月</span>
      </div>
      <div class="calendar_header_btn">
        <i class="el-icon-d-arrow-left" @click="prevMonth"></i>
        <i class="el-icon-d-arrow-right" @click="nextMonth"></i>
      </div>
    </div>
    <div class="calendar_week">
      <div class="calendar_week_title">
        <span
          class="calendar_week_cell"
          v-for="(item_week, index) in weeks"
          :key="index"
          >{{ item_week }}</span
        >
      </div>
    </div>
    <div class="calendar_day" @click="handleClick">
      <div class="calendar_week_row" v-for="(row, index) in Rows" :key="index">
        <div
          class="calendar_week_cell"
          v-for="(cell, cellKey) in row"
          :key="cellKey"
          :class="getCellClasses(cell)"
        >
          <span>
            {{ cell.text }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      weeks: ["日", "一", "二", "三", "四", "五", "六"],
      rows: [],
      year: moment().year(),
      month: moment().month(),
    };
  },
  computed: {
    showMonth() {
      return this.month == 11 ? 12 : this.month == 0 ? 1 : this.month + 1;
    },
    getDay() {
      return moment([this.year, this.month]).daysInMonth();
    },
    today() {
      return this.gettoday(moment().year(), moment().month(), moment().date());
    },
    Rows() {
      console.log(this.today);
      let day = this.getDay; //当前月的天数
      let beforday = moment([this.year, this.showMonth - 1]).daysInMonth(); //上月的天数
      let datWeek = moment([this.year, this.month]).weekday(); //当前月第一天星期几
      let rows = [];
      let cell = beforday - datWeek + 1;
      let isCellFlag;
      for (let i = 0; i < 6; i++) {
        rows[i] = [];

        for (let j = 0; j < 7; j++) {
          if (j == datWeek && i == 0) {
            cell = 0;
            rows[i][j] = { text: cell++ };
          }
          if (j < datWeek && i == 0) {
            rows[i][j] = {
              text: beforday == cell ? cell : cell++,
              type: "prev-month",
            };
          } else {
            rows[i][j] = {
              text:
                cell > day ? ((isCellFlag = true), (cell = 1), cell++) : cell++,
              type: isCellFlag ? "next-month" : "normal",
            };
          }
          let time = this.gettoday(this.year, this.month, rows[i][j]["text"]);
          if (this.today == time && !isCellFlag) {
            rows[i][j]["type"] = "today";
          }
        }
      }
      return rows;
    },
  },
  methods: {
    gettoday(year, month, day) {
      return moment([year, month, day]).format("X");
    },
    handleClick(event) {
      let target = event.target;
      let className = target.className;
      if (className !== "calendar_week_cell") return;

      console.log(event);
    },
    setDate() {
      console.log(this.month);
    },
    //上一个月
    prevMonth() {
      if (this.month == 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
    },
    //下一个月
    nextMonth() {
      if (this.month == 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }
    },
    //上一年
    prevYear() {},
    //下一年
    nextYear() {},
    getCellClasses(cell) {
      return cell.type;
    },
  },
  created() {
    this.setDate();
  },
};
</script>

<style lang="scss">
.calendar_header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  .calendar_header_time {
    font-size: 16px;
    color: #409eff;
    font-weight: bolder;
    span {
      margin-right: 10px;
    }
  }
  .calendar_header_btn {
    display: flex;
    align-items: center;
    i {
      display: block;
      width: 20px;
      height: 20px;
      background: #f9f9f9;
      color: #dcd8d8;
      border-radius: 50%;
      margin-left: 20px;
      font-size: 12px;
      text-align: center;
      line-height: 20px;
      cursor: pointer;
      transition: 0.3s background ease-in-out;
      &:hover {
        background: #409eff;
        color: #fff;
      }
    }
  }
}

.calendar_week_title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 5px;
}
.calendar_week_row {
  display: flex;
  justify-content: space-between;
  font-family: "PingFang SC";

  .prev-month {
    color: #eaeaea;
  }
  .next-month {
    color: #eaeaea;
  }
  .normal {
  }
  .today {
    span {
      color: #fff;
      box-shadow: inset 0 0 0 15px #409eff;
    }
  }
}
.calendar_week_cell {
  display: block;
  padding: 5px;
  width: calc(100% / 7);
  height: 38px;
  color: #bac3cc;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
  // border-bottom: 1px solid #ebeef5;
  span {
    display: block;
    width: 30px;
    height: 30px;
    text-align: center;
    margin: 0 auto;
    border-radius: 50%;
    transition: 0.3s all ease-in-out;
    &:hover {
      color: #fff;
      box-shadow: inset 0 0 0 15px #409eff;
    }
  }
}
</style>
