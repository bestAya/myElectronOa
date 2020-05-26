<template>
  <div class="wrapper">
    <CloseHead class="CloseHead" />
    <div class="wrapper_box">
      <div class="swiper_box">
        <div class="swiper-slide">
          <p
            class="ani"
            swiper-animate-effect="fadeInUp"
            swiper-animate-duration="0.5s"
            swiper-animate-delay="0.3s"
          >
            内容
          </p>
        </div>
      </div>
      <div class="login_form">
        <div class="login_form_centent">
          <div class="login_form_Log">
            <i
              ><el-image
                style="width: 100%; height: 100%"
                src="https://cdn.docschina.org/static/media/antdesign.b29324c4.svg"
                fit="contain"
              ></el-image
            ></i>
            <h5>MY CreatedApp</h5>
          </div>
          <p>登录</p>
          <div class="login_form_sub">
            <el-input
              placeholder="请输入账号"
              prefix-icon="el-icon-user"
              v-model="input1"
            >
            </el-input>
            <el-input
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
              v-model="input1"
              show-password
            ></el-input>

            <el-checkbox>下次自动登录</el-checkbox>
            <el-button type="primary" :loading="loading">登录</el-button>
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
      input1: "",
    };
  }, 
  mounted() {
    // var mySwiper = new Swiper(".swiper-container", {
    //   on: {
    //     init: function() {
    //       swiperAnimateCache(this); //隐藏动画元素
    //       swiperAnimate(this); //初始化完成开始动画
    //     },
    //     slideChangeTransitionEnd: function() {
    //       swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
    //       //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    //     },
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background: #f2f2f2;
  position: relative;
  .CloseHead {
    position: absolute;
    width: 100%;
  }
  .wrapper_box {
    display: flex;
    height: 100vh;
    .swiper_box {
      flex: 1;
    }
    .login_form {
      width: 400px;
      background: #fff;
      padding: 80px 50px 50px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .login_form_centent {
        height: 100%;
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
          margin: 20px 0 50px;
          font-size: 22px;
        }
        .login_form_sub {
          display: flex;
          flex-direction: column;
          .el-input {
            margin-bottom: 20px;
          }

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
