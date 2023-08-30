<template>
  <div>
    <img src="@/assets/images/loginBg.jpg" alt="" class="loginBg" />
    <div class="loginBox">
      <div class="welcome">Welcome</div>

      <a-form :label-col="labelCol" :wrapper-col="wrapperCol" ref="ruleForm" :model="form" :rules="rules">
        <a-form-item name="name">
          <a-input v-model:value="form.name" placeholder="请输入账号">
            <template #prefix><user-outlined type="user" /></template>
          </a-input>
        </a-form-item>
        <a-form-item name="password">
          <a-input-password v-model:value="form.password" placeholder="输入您的密码">
            <template #prefix>
              <UnlockOutlined />
            </template>
          </a-input-password>
        </a-form-item>

        <a-form-item :wrapper-col="{ span: 24, offset: 6 }">
          <a-button type="primary" @click="onSubmit" html-type="submit"> 登录 </a-button>
          <a-button style="margin-left: 2vw" @click="resetFields">
            重置
          </a-button>
        </a-form-item>
      </a-form>
    </div>
    <div class="footer">
      <p> <a href="http://beian.miit.gov.cn">粤ICP备2020128838号</a> </p>
    </div>
  </div>
</template>

<script>
// import { useForm } from "@ant-design-vue/use";
import { Modal } from 'ant-design-vue'
import { UserOutlined, UnlockOutlined } from "@ant-design/icons-vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode } from 'vue';
import { login } from "@/api/api";

export default {
  components: {
    UserOutlined,
    UnlockOutlined,
  },
  data() {
    return {
      labelCol: { span: 2 },
      wrapperCol: { span: 20, offset: 2 },
      form: {
        name: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input username",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input password",
          },
          {
            min: 3,
            max: 10,
            message: "Length should be 3 to 5",
            trigger: "blur",
          },
        ],
      },
    };
  },

  methods: {
    // 登录
    async loginMethod(formData) {
      var that = this

      const logining = await login(formData);
      console.log(logining.data)
      //存入sessionStorage
      sessionStorage.setItem('token', logining.data.username);
      // 将用户名存入vuex
      this.$store.commit('M_userName', logining.data.username);
      this.$store.dispatch('setToken', logining.data.username);
      // that.$router.push('/index')
      if (logining && logining.status != 400) {
        Modal.success({
          title: '登录成功,请稍候'
        })

        setTimeout(function () {
          that.$router.push('/index')
        }, 1000)
      }
      else if (logining.status == 400) {
        Modal.confirm({
          title: '账号密码错误咯',
          icon: createVNode(ExclamationCircleOutlined),
          cancelText: '注册',
          onCancel() {
            that.$router.push('/registered')
          }
        })
      }
    },
    // 提交
    onSubmit() {
      if (process.env.NODE_ENV == 'development') {
        this.form = {
          name: "sa",
          password: "admin",
        },
          Modal.success({
            title: '登录成功,请稍候'
          })
      
          this.$router.push('/index')
      
        return
      }

      const Data = { username: this.form.name, password: this.form.password };
      this.$refs.ruleForm
        .validate()
        .then(() => {
          this.loginMethod(Data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>

<style scoped>
.loginBg {
  height: 100vh;
  width: 100%;
}

.loginBox {
  position: absolute;
  width: 25vw;
  height: 450px;
  top: 20%;
  right: 22%;
  padding: 60px 3vw 100px 3vw;
  background: rgba(0, 0, 0, 0.3);
}

.welcome {
  color: #8ebfd0;
  font-size: 48px;
  text-align: center;
  padding-bottom: 20px;
  border-bottom: 2px solid #8ebfd0;
  margin-bottom: 80px;
}

.footer {
  background-color: #333;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  text-align: center;
  color: #666;
}
</style>