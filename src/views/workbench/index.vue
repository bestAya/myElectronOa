<template>
  <div class="wrapper">
    <div class="wrapper_header">
      <el-row :gutter="10">
        <el-col :xs="24" :sm="24" :md="16" :lg="16" :xl="18">
          <!---->
          <el-row :gutter="10">
            <el-col
              v-for="item in 4"
              :key="item"
              :xs="24"
              :sm="12"
              :md="6"
              :lg="6"
              :xl="6"
            >
              <div class="wrapper_header_card">
                <div class="wrapper_header_card_body">
                  <div class="card-index">
                    <div class="card-index-chartTop">
                      <div class="card-index-meta">
                        <p><span>总销售额</span></p>
                      </div>
                      <div class="card-index-chartTop-total">
                        <span>¥ 126,560</span>
                      </div>
                    </div>
                    <div class="card-index-metaWrap"></div>
                    <div class="card-index-footer">
                      <div>
                        <span>转化率</span>
                        <span>60%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <!--应用-->
          <el-row :gutter="10">
            <el-col
              :xs="24"
              :sm="6"
              :md="6"
              :lg="6"
              :xl="3"
              v-for="item in 8"
              :key="item"
            >
              <div class="wrapper_header_card ">
                <div class="grid-content bg-purple application_box">
                  <el-avatar
                    src="https://cdn.docschina.org/static/media/element.ba99f6df.svg"
                    >user</el-avatar
                  >
                  <div class="app_centent">
                    <h5>打卡</h5>
                    <p class="Single_Omit">专业、智能的考勤</p>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col class="hidden-md-only hidden-lg-only">
              <div class="wrapper_header_card ">
                <div class="grid-content bg-purple application_box">
                  +
                </div>
              </div>
            </el-col>
          </el-row>
          <div class="wrapper_header_card">
            <div class="wrapper_header_card_tab">
              <tabs></tabs>
              <div class="wrapper_header_card_tab_right">
                <el-date-picker
                  size="small"
                  type="daterange"
                  align="right"
                  unlink-panels
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                >
                </el-date-picker>
              </div>
            </div>
            <div class="wrapper_header_card_body">
              <el-row :gutter="30">
                <el-col :xs="24" :sm="12" :md="12" :lg="16" :xl="16">
                  <p class="rankingTitle">个人排行</p>
                  <chart></chart>
                </el-col>
                <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
                  <p class="rankingTitle">产品类比</p>
                  <piechart></piechart>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="6">
          <el-row :gutter="10">
            <el-col :span="24">
              <div class="wrapper_header_card">
                <personnel></personnel>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="wrapper_header_card">
                <div class="wrapper_header_card_tab">
                  <span>通知</span>
                </div>
                <div class="tops">
                  <div class="Notice">
                    <div class="Notice_list">
                      <div>
                        <i class="tips tips_preoss">News</i
                        ><span class="Single_Omit">今天通知是</span>
                      </div>
                      <span class="el-icon-arrow-right"></span>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
            <el-col :span="24">
              <div class="wrapper_header_card calendar">
                <div class="wrapper_header_card_tab">
                  <span>日历</span>
                </div>
                <div class="wrapper_header_card_body">
                  <calendar></calendar>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import tabs from "@/components/tabnar";
import calendar from "@/components/calendar";
import chart from "./chartbox/chart";
import piechart from "./chartbox/piechart";
import personnel from "./personnel";
export default {
  components: { tabs, chart, piechart, personnel, calendar },
};
</script>

<style lang="scss" scoped>
.wrapper_header {
  padding: 10px;
  .el-col {
    margin-bottom: 10px;
    height: auto;
  }
  .el-row {
    overflow: hidden;
  }
}
.wrapper_header_card {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum", "tnum";
  position: relative;
  background: #fff;
  border-radius: 2px;
  .wrapper_header_card_tab {
    padding: 0 10px;
    height: 47px;
    line-height: 47px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    .wrapper_header_card_tab_right {
      display: flex;
      align-items: center;
    }
  }
  .card-index-chartTop {
    .card-index-meta {
      height: 22px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
    }

    .card-index-chartTop-total {
      height: 30px;
      margin-top: 4px;
      margin-bottom: 0;
      overflow: hidden;
      color: rgba(0, 0, 0, 0.85);
      font-size: 24px;
      line-height: 30px;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-break: break-all;
    }
  }
  .wrapper_header_card_body {
    padding: 20px 24px 8px;
    overflow: hidden;
    .rankingTitle {
      margin-top: 0;
      margin-bottom: 0.5em;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
    }
  }
  .card-index-metaWrap {
    height: 46px;
  }
  .card-index-footer {
    margin-top: 8px;
    padding-top: 9px;
    border-top: 1px solid #f0f0f0;
    div {
      span {
        font-size: 14px;
        line-height: 22px;
        &:last-child {
          margin-left: 8px;
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
  }
}
.calendar {
  height: 420px;
}
.tops {
  height: 123px;
}
.application_box {
  border-radius: 4px;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 20px;
  text-align: left;
  background: #fff;
  cursor: pointer;
  transition: box-shadow 0.3s ease-in;
  box-shadow: 0 0 2px 0 #ccc;
  &:hover {
    box-shadow: 0 6px 7px 0 #ccc;
  }
  .add_plus {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    background: #c0c4cc;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .el-avatar {
    margin-right: 10px;
    background: transparent;
  }
  .app_centent {
    flex: 1;
    overflow: hidden;
    .app_centent_title {
      display: flex;
      align-items: center;
    }
    h5 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      color: #999;
    }
  }
}
.Notice {
  padding: 10px;
  .Notice_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 27px;
    > div {
      flex: 1;
      display: flex;
      align-items: center;
      span {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
</style>
