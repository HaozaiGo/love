<template>
  <div class="starBg">
    <div class="registerBox">
      <p class="registerTitle">注册中心</p>
      <label for="username" class="user">用户名:</label>
      <div>
         <input type="text" v-model="form.username" id="username" placeholder="请输入您的用户名" class="userInput">
      </div>
      <label for="password" class="user">密码:</label>
      <div>
         <input type="text" v-model="form.password" id="password" placeholder="请输入您的密码" class="userInput">
      </div>
      <div>
        <button class="handleRegister" @click="handleRegister">点击注册</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'ant-design-vue';
import { Registered } from '@/api/api'
export default {
  data(){
    return{
      form:{
        username:'',
        password:'',
      }
     
    }
  },
  methods:{
    async register(params){
      const registerData = await Registered(params);
      console.log(registerData)
      if(registerData.status == 401){
        Modal.warn({
          title:'账号已经被他人注册,请重新输入'
        })
      }
      if(registerData.data == 'success'){
        Modal.success({
          title:'恭喜,注册成功'
        })
        setTimeout(()=>{
          console.log(this)
          this.$router.replace('/')
        })
      }
    },
    handleRegister(){
      const registerData = {username:this.form.username, password:this.form.password}
      // 账号为空
      if(!this.form.username || !this.form.password){
        Modal.error({
          title:'请重新检查账号或者密码'
        });
        return
      }
      this.register(registerData)
    }
  }

};
</script>

<style scoped>
.starBg {
  height: 100vh;
  background: url("../../assets/images/starBg.jpg");
  background-position: center;
  background-size: 100% 100%;
}
.user{
  color: #ffffff;
  font-size: 18px;
  display: block;
  margin: 15px 0;
}
.handleRegister{
  background: #0794f1;
  color: #fff;
  width: 20vw;
  padding: 10px 0;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  margin-top: 30px;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 600;
}
.userInput{
  padding: 5px 8px;
  margin-bottom: 20px;
  width: 20vw;
  border: none;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid #fff;
  color: #fff;
}

.registerBox {
  position: fixed;
  left: 13vw;
  top: 25vh;
  width: 30vw;
}
.registerTitle {
  font-size: 28px;
  color: #ffffff;
}
</style>