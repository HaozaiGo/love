<template>
  <div>
    <swiper class="swiper">
      <!-- 第一页 -->
      <swiper-item>
        <div class="profire-Name flex-sb">
          <div class="myName">
            <span>啊豪</span>
            <span>Wu JiaHao</span>
          </div>
          <div>
            <span>我的简历</span>
            <van-icon name="arrow" dot class="myResume" />
          </div>
        </div>
        <div class="myPicBox rel">
          <img
            src="/static/images/profile/jiahao1.jpg"
            alt=""
            srcset=""
            class="myPic"
          />
          <div class="layer">
            <p>前端开发工程师</p>
            <p>2年开发经验</p>
          </div>
        </div>
      </swiper-item>
      <!-- 第二页 -->
      <swiper-item>
        <div class="content">
          <!-- 基本资料 -->
          <div>
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">1</div>
              <div class="topTex">基本资料</div>
            </div>
            <van-row>
              <van-col span="12"><div class="th">姓名：吴嘉豪</div> </van-col>
              <van-col span="12"
                ><div class="th">电话：13326745183</div></van-col
              >
              <van-col span="12"><div class="th">性别：男</div> </van-col>
              <van-col span="12"><div class="th">年龄：22</div> </van-col>
              <van-col span="24"
                ><div class="th">
                  学历：本科
                  <br />毕业于：广东技术师范大学天河学院
                </div>
              </van-col>
              <van-col span="24"
                ><div class="th">邮箱：1029172530@qq.com</div>
              </van-col>
              <van-col span="24"
                ><div class="th">英语等级：大学英语4级</div>
              </van-col>
            </van-row>
          </div>

          <!-- 主要技术 -->
          <div class="mainTechnology">
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">2</div>
              <div class="topTex">主要技术</div>
            </div>
            <div>
              <view
                class="progress-box"
                v-for="(item, index) of mainTechnology"
                :key="index"
              >
                {{ item.technology }}
                <progress :percent="item.percent" active stroke-width="5" />
              </view>
            </div>
          </div>
        </div>
      </swiper-item>
      <!-- 第三页 -->
      <swiper-item>
        <div class="content">
          <!-- 工作经历 -->
          <div class="workExperience">
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">3</div>
              <div class="topTex">工作经历和项目经验</div>
            </div>
            <div class="experience">
              <van-collapse
                accordion
                :value="activeNames"
                @change="onChange"
                @open="onOpen"
                @click="handleClick"
              >
                <van-collapse-item title="碧桂园数字化中心——2019/6至2020/1" name="1">
                  项目描述：项目主要面对管理员工的开发流程的一套后台管理系统，整体用react编写，用了Ant Design和Ant Design Pro UI组件库，
                  绘图和表格用的是Bizcharts，项目包含员工工时日报填写，管理团队大小，相关负责人，项目进行程度，以及对应员工成本。本人负责前端开发，
                  参与项目的整个生命周期，与后端人员，测试人员密切配合，完成需求。
                </van-collapse-item>
                <van-collapse-item title="基于Vue2+Node的线上报修平台——2020/2-2020/4" name="2">
                  项目描述：一个类似于万师傅的线上报修平台，这个项目是后面参加毕业设计的项目，技术盏前端使用了Vue + iView。后端用Node+express，
                  数据库是MongoDB开发的一款报修平台，内容包括用户/维修师傅的登陆注册，个人信息修改，发布需要报修的订单，订单管理，对订单点赞和评论等。
                  维修师傅可以对应选择接单，并可以在个人信息中查看订单管理，钱包管理等。
                </van-collapse-item>
                <van-collapse-item title="广东美态科技——美智盈商城——2020/5-2021/2" name="3">
                  项目描述：一款可用于小程序和app的商城，前端技术盏使用了uni-app和uView，从搭建项目开始，到项目完成全程参与，其中在用户登陆时要携带token，
                  识别身份，并存在setStorage数据存储，用户名，头像，门店的选择，都需要存到VueX状态集中管理。地理定位，签到打卡，用到了百度地图 + wx中getWifi
                  Api，产品的种类也可以分为普通，拼团，砍价，秒杀达到引流的效果，其中加入了vip开卡，每日签到，领取优惠卷，以及预约功能等，在项目较大时，需要考虑对
                  网络请求的拦截以及封装。重点需要注意的是购物车结算时与后端的价格对比。
                </van-collapse-item>
              </van-collapse>
            </div>
          </div>
        </div>
      </swiper-item>
      <!-- 第四页 -->
      <swiper-item>
        <div class="content">
          <!-- 个人介绍 -->
          <div>
            <!-- topNum -->
            <div class="topNum flex-c">
              <div class="number">4</div>
              <div class="topTex">个人介绍</div>
            </div>
            <div class="personalIntroduction">
              <p>
                自我评价：{{myIntroduction}}
              </p>
              <p>
                兴趣爱好:篮球、k哥、弹吉他
              </p>
              <p>1、获得荣誉:第九届港澳台赛互联网大赛前10名。</p>
              <p>2、曾帮助学校搭建官网，并获得赞助.</p>
            </div>
          </div>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {

  data() {
    return {
      mainTechnology: [
        { technology: "vue", percent: "75" },
        { technology: "HTML5/CSS3/JavaScript", percent: "90" },
        { technology: "react", percent: "70" },
        { technology: "Node", percent: "68" },
        { technology: "小程序开发", percent: "80" },
        { technology: "服务端运维", percent: "60" },
      ],
      activeNames: "",
      myIntroduction:`为人开朗乐观,面对问题不逃避,积极面对问题，善于与人沟通，接触前端开发3年，有一定的Pc和移动端开发经验，会使用Vue和React框架。喜欢接触有挑战的项目，
      善于总结经验，熟悉ES6和TS规范,会使用Node写后台，会使用Mongodb和MySql数据库，熟悉使用git代码管理工具，有一年以上的团队开发经验，自身有良好的审美观，有逛博客的习惯，
      不断学习新知识跟上时代的进步。`
    };
  },
  methods: {
    onChange(event) {
      if (event.target[0]) {
        let active = event.target[0];
        this.activeNames != event.target[0]
          ? (this.activeNames = active)
          : (this.activeNames = "");
      } else {
        this.activeNames = "";
      }
    },
  },

  created() {},
};
</script>

<style scoped>
.swiper {
  height: 100vh;
}
.profire-Name {
  padding: 30rpx;
  align-items: center;
}
.personalIntroduction p{
  margin-top: 15px;
  letter-spacing: 1.5px;
}
.personalIntroduction :nth-child(2){
  font-weight: 600;
}
.personalIntroduction :nth-child(3){
  font-weight: 600;
}
.progress-box {
  margin-top: 10px;
}
.mainTechnology {
  margin-top: 30px;
}
.experience {
  margin-top: 20px;
}
.number {
  padding: 3px 8px;
  background: #444444;
  color: #ffffff;
  margin-right: 10px;
}
.content {
  padding: 15px;
}
.topTex {
  font-size: 18px;
  font-weight: 550;
}
.th {
  padding: 8px 0px;
  border-bottom: 1px dotted #444444;
}

.topNum {
  padding: 5px 0px;
  border-bottom: 1px solid #444444;
}
.layer {
  position: absolute;
  bottom: 12vh;
  width: 100%;
  height: 15vh;
  background: rgba(0, 0, 0, 0.5);
}
.layer p {
  color: #ffffff;
  text-align: center;
}
.layer p:first-child {
  font-size: 18px;
  margin: 15px 0px 10px 0px;
}
.myPicBox {
  width: 100%;
  height: 90vh;
}
.myPic {
  width: 100%;
  height: 100%;
}
.myName {
  text-align: center;
}
.myName span {
  display: block;
}
.myName span:first-child {
  font-size: 18px;
  letter-spacing: 3px;
  font-weight: 600;
}
.myResume {
  vertical-align: middle;
}
</style>
