<template>
  <div class="wrapper">
    <CloseHead class="CloseHead" />
    <div class="wrapper_box">
      <div class="swiper_box">
        <!-- <el-image :src="require('../../assets/img/banner_2.png')" fit="contain"></el-image> -->
        <el-carousel
          indicator-position="outside"
          arrow="never"
          :interval="8000"
          trigger="click"
          height="500px"
        >
          <el-carousel-item v-for="(item,index) in banner" :key="index">
            <div>
              <h3 class="small">{{ item.title }}</h3>
              <p>{{ item.dir }}</p>
              <p>{{ item.dir1 }}</p>
            </div>
            <div class="banner">
              <el-image style="width: 100%; height: 100%" :src="item.img" fit="contain"></el-image>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="login_form">
        <div class="login_form_centent">
          <div class="login_form_Log">
            <i>
              <el-image
                style="width: 100%; height: 100%"
                src="https://cdn.docschina.org/static/media/antdesign.b29324c4.svg"
                fit="contain"
              ></el-image>
            </i>
            <h5>MY CreatedApp</h5>
          </div>
          <p>登录</p>
          <div class="login_form_sub">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
              <el-form-item prop="phone">
                <el-input placeholder="请输入账号" prefix-icon="el-icon-user" v-model="ruleForm.phone"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  prefix-icon="el-icon-lock"
                  placeholder="请输入密码"
                  v-model="ruleForm.password"
                  show-password
                ></el-input>
              </el-form-item>

              <el-checkbox>下次自动登录</el-checkbox>
            </el-form>
            <el-button type="primary" :loading="loading" @click="hanndelsubmit('ruleForm')">登录</el-button>
          </div>
          <div class="login_tops">
            <span>忘记密码？</span>
            <span>注册新账号</span>
          </div>
        </div>
        <div class="login_form_footer">
          <p>Copyright © 2014-2019 All Rights Reserved</p>
          <span>Mr.ZhangZhenya 版权所有</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CloseHead from "@/components/closeheader/index.vue";

export default {
  components: { CloseHead },
  data() {
    return {
      loading: false,
      ruleForm: {
        phone: "admin",
        password: "admin"
      },
      rules: {
        phone: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      },
      banner: [
        {
          title: "智能审批",
          dir: "团队日程共享，轻松订阅日历",
          dir1: "会话内看忙闲，一键预约会议",
          img: require("../../assets/img/banner_1.png")
        },
        {
          title: "房屋评估",
          dir: "团队日程共享，轻松订阅日历",
          dir1: "会话内看忙闲，一键预约会议",
          img: require("../../assets/img/banner_4.png")
        },
        {
          title: "征信查询",
          dir: "团队日程共享，轻松订阅日历",
          dir1: "会话内看忙闲，一键预约会议",
          img: require("../../assets/img/banner_5.png")
        },
        {
          title: "档案管理",
          dir: "团队日程共享，轻松订阅日历",
          dir1: "会话内看忙闲，一键预约会议",
          img: require("../../assets/img/banner_7.png")
        },
        {
          title: "智能日历",
          dir: "团队日程共享，轻松订阅日历",
          dir1: "会话内看忙闲，一键预约会议",
          img: require("../../assets/img/banner_8.png")
        },
        {
          title: "智能日历",
          dir: "团队日程共享，轻松订阅日历",
          dir1: "会话内看忙闲，一键预约会议",
          img: require("../../assets/img/banner_9.png")
        }
      ]
    };
  },
  methods: {
    hanndelsubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.$router.push("/info");
          }, 3000);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.wrapper {
  background: #f2f2f2;
  position: relative;
  transition: all 0.3s ease-in;

  .CloseHead {
    position: absolute;
    width: 100%;
  }
  .wrapper_box {
    display: flex;
    height: 100vh;
    box-sizing: border-box;
    .swiper_box {
      background: #fff;
      flex: 1;
      display: flex;
      align-items: center;
      .el-carousel {
        width: 400px;
        margin: 0 auto;
        .el-carousel__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          h3 {
            margin-bottom: 20px;
            font-size: 22px;
          }
          p {
            font-size: 14px;
            color: #999;
            line-height: 2;
          }
        }
        .banner {
          width: 350px;
          height: 350px;
        }
      }
    }
    .login_form {
      width: 400px;
      background: #fff;
      padding: 80px 50px 50px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .login_form_centent {
        .login_form_Log {
          height: 60px;
          display: flex;
          align-items: center;
          i {
            display: block;
            height: 100%;
            width: 50px;
          }
          h5 {
            flex: 1;
            font-size: 18px;
            font-weight: bold;
            vertical-align: middle;
            margin-left: 20px;
          }
        }
        & > p {
          margin: 20px 0 40px;
          font-size: 22px;
        }
        .login_form_sub {
          display: flex;
          flex-direction: column;
          .el-button {
            margin-top: 20px;
          }
        }
        .login_tops {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          span {
            font-size: 12px;
            color: #999;
            cursor: pointer;
            &:last-child {
              color: #409eff;
            }
          }
        }
      }
      .login_form_footer {
        font-size: 11px;
        color: #999;
        line-height: 2;
      }
    }
  }
}
</style>
