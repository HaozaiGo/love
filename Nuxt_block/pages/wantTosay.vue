<template>
  <div class="content">
    <div class="header"></div>
    <div v-for="(item,index) in myGrilSayList" :key="index" class="flex" style="margin-top:8px" >
      
        <img v-if="item.MyGril" src="@/static/img/R-C.jpg" alt="" srcset="" style="width:40px;height:40px;border-radius: 50%;"></img>
        <img v-if="!item.MyGril" src="@/static/img/me.png" alt="" style="width:40px;height:40px">：
        <p>{{item.Msg}}</p>

    </div>
    
    <el-input
      v-model="textarea"
    	type="textarea"
  		:rows="8"
  		placeholder="请输入"
  		class="textA"
 >
</el-input>
<div style="position:fixed;bottom:10px;text-align: center;width: calc(100% - 60px);">
      <el-button type="primary" size="medium" @click="handleSubmitSay"
        >提 交</el-button
      >
    </div>

		<el-dialog
  title="身份"
  :visible.sync="dialogVisible"
  width="70%"
  >
  <el-input v-model="identity" placeholder="你是？"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="routerBack">取 消</el-button>
    <el-button type="primary" @click="comfirmIdentity ">确 定</el-button>
  </span>
</el-dialog>

<tips :showTips="showTips" :message="message"></tips>
  </div>
</template>

<script>
import tips from "@/component/showTips"
import {myGril} from '@/assets/js/common.js'
export default {
	components:{tips},
  data() {
    return {
			showTips:false,
      dialogVisible: true,
      textarea: '',
      identity: '',
			myGril:false,
			message:"",
      myGrilSayList:[],
    }
  },
  methods: {
    handleSubmitSay() {
      this.showTips = false;
			this.$axios.post('/writeWantSay',{
				MyGril:this.myGril,
				Msg:this.textarea
			}).then(res=>{
				
					this.showTips = true;
					this.message = "Love you！^. ^";
					this.textarea = "";
          this.myGrilSay();
          this.iSay()
			})
		},
    routerBack() {
      this.$router.push('/menu')
    },
    comfirmIdentity() {
      this.showTips = false;
      if (!this.identity) {
				this.showTips = true;
        this.message = '请输入身份'

      } 
			if(myGril(this.identity)){
        // mygril
				this.myGril = true;
        this.showTips = true;
        this.message = '欢迎我的女孩';
				this.dialogVisible = false;
        this.iSay()

			}else if(this.identity === "小豪"||this.identity === "xiaohao"){
        // 我自己登陆
				this.myGril = false;
				this.showTips = true;
        this.message = '欢迎豪哥';
				this.dialogVisible = false;
				this.myGrilSay()
			} else{
				this.myGril = false;
				this.dialogVisible = false;
				this.showTips = true;
				this.message = '验证失败,2秒后退出';
				setTimeout(()=>{
					this.$router.push("/menu")
				},2000)
			}

    },

		myGrilSay(){
			this.$axios.get('/getSayList', {params:{MyGril:this.myGril}}).then(res=>{
        this.myGrilSayList = res.data.data.list
			})
		},
    iSay(){
      this.$axios.get('/getSayList',{params:{MyGril:this.myGril}}).then(res=>{
        this.myGrilSayList = res.data.data.list
			})
    },
  },
}
</script>

<style>
.content {
  padding: 40px 30px;
  height: calc(80vh - 150px);
  overflow-y: auto;
}
.header {
  height: 25px;
  /* width: 100vw; */
  position: fixed;
  background: blueviolet;
  inset: 0 0 none 0;
}
.textA {
  position: fixed;
  bottom: 70px;
  width: calc(100% - 60px);
}
</style>