<!--
 * @Author: xiaoHao
-->

<template>
  <div class="content">
    <div class="title">期待已久的事</div>
    <div v-for="(item, index) in rowList" :key="index" class="flex-sb rowSty">
      <input
        :checked="item.selected"
        :value="item.selected"
        name="123"
        type="radio"
        @click="handleSelect(item)"
      />
      <span style="margin-right: 10px"
        ><i class="iconfont iconbianji" style="font-size: 26px"></i
      ></span>
      <span style="flex: 1" class="oneRow">{{ item.Matter }}</span>
      <span style="margin-left: 10px"
        ><i
          class="iconfont iconsuccess-filling"
          style="font-size: 26px"
          :style="item.HadDone ? 'color:green' : 'none'"
        ></i
      ></span>
    </div>

    <div
      style="position: fixed; bottom: 40px; text-align: center; width: 100vw"
    >
      <button class="buttomBtn" style="margin-right: 10vw" @click="handleDone">
        Done
      </button>
      <button class="buttomBtn" @click="showWriting">Writing</button>


    </div>
    <!-- write -->
    <div v-show="showForm" class="form autoCenter" >
      写下想做的事情:  <input v-model="wantDo" type="text"  style="margin-left:5px;padding: 3px;" name="" />

      <div style="text-align:center;margin-top: 20px;">
        <button class="buttomBtn1" style="margin-right:20px" @click="matterAdd">
        确认
      </button>
        
      <button class="buttomBtn1"  @click="showForm = false">
        取消
      </button>
      </div>
  
    </div>

    <tips :showTips="showTips" :message="message"></tips>
     
  </div>
</template>

<script>
import tips from "@/component/showTips"
export default {
  components:{
    tips
  },
  data() {
    return {
      rowList: [1, 2],
      selected:"",
      wantDo:"",
      showTips:false,
      showForm:false,
      message:""
    }
  },
 
  created() {
    // console.log(this.$axios);
    this.asyncData()
  },
  methods: {
    asyncData(ctx) {
      this.$axios.get('/matter/list').then((res) => {
        const arr = res.data.data.list
        for (let i = 0; i < arr.length; i++) {
          arr[i].selected = false
        }

        this.rowList = arr
       
      })
    },
    handleSelect(val) {
    
      this.selected = val.ID;
      val.selected = !val.selected;
   
    },
    handleDone(){
      this.$axios.post(`/matter/done/${this.selected}`).then(res=>{
       
        if(res.data.code === 200){
          this.showTips = true;
          this.asyncData()
        }

      })
    },

    matterAdd(){
      if(this.wantDo){
        this.$axios.post('/matter/add',{
        Matter: this.wantDo,
        HadDone: false,
      }).then(res=>{
        if(res.data.code === 200){
          
          this.message = "添加了一个新的事件";
          this.showTips = true;
          this.asyncData()
          this.showForm = false;
        }else{
          
          this.message = res.data.msg;
          this.showTips = true;
        }
      })
      }else{
       
        this.message = "添加失败！请检查添加内容";
        this.showTips = true;
      }
   
    },
    showWriting(){
      this.showForm = true;
    }
    
  },
}
</script>

<style scoped>

.form{
  padding: 20px;
}

.title {
  font-size: 18px;
  padding: 30px 20px;
  font-weight: bold;
}
.content {
  
  background: #253035;
  min-height: 100vh;
  color: #ffffff;
}
.rowSty {
  padding: 12px 15px;
  border-top: 1px solid #c1c1c1;
}
.buttomBtn {
  padding: 12px 32px;
  border: 2px solid #c1c1c1;
  border-radius: 20px;
  background: #253035;
  color: #ffffff;
}
.buttomBtn1{
  padding: 8px 30px;
  border: 2px solid #c1c1c1;
  border-radius: 20px;
  background: #253035;
  color: #ffffff;
}
</style>