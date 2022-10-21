<!--
 * @Author: xiaoHao
-->
<!--
 * @Author: xiaoHao
-->
<template>
  <div>
    <div class="bg">
      <div class="top flex" @click="becomeHeight = false;">
        <div class="flex top_tip">
            <img src="@/static/img/beauty1.jpg" style="width:40px;height:40px;margin-right: 10px;"></img>
            <div> 巴黎</div>
            <div><i class="iconfont iconfavorite" style="color:green"></i></div>
        </div>

        <div class="linkToWrite" @click="linkToWrite">

        </div>
     
    </div>

  </div>

  
  <div class="bottom_bg flex"  >
    <div class="tabs" @click="becomeHeight = true;" :style="becomeHeight?`height:70vh; transform:translateY(-160px)`:`height:44vh;transform:translateY(-50px)`">
      <p style="font-size:18px;font-weight:bold;margin: 20px">相似景点</p>
      <p style="margin-left:20px;margin-bottom: 10px;">西瓜系数据库来得及</p>
      <!-- row -->
      <div class="flex">
        <img src="@/static/img/OIP-C.jpg" alt="" class="bottom_Img"></img>
        <div class="row_right">
          <p>亚龙湾</p>
          <div><img src="@/static/img/local.png" alt="" style="width:15px;height:15px"> 地点: 南海：三亚</div>
          <p>评论:索拉卡进度款拉所经历的即可拉伸的了空间阿萨德</p>
        </div>


        
      </div>
    </div>
  </div>
  <div>

  </div>
</div>
</template>

<script>
export default {
  data(){
    return{
      becomeHeight:false,
    }
  },
  methods:{
    linkToWrite(){
      this.$router.push('/writeBeautyTime')
    }
  }
}
</script>

<style>
.row_right p{
  margin: 8px 0;
}
.bg {
  background: url('@/static/img/Beautybg2.png');
  height: 50vh;
  background-size: 100% 100%;
  padding-top: 60px;
  display: block;
  position: relative;
}
.linkToWrite{
  width: 60px;
  height: 350px;
  
  position: absolute;
  right: 0;
  top: 36px;
}
.bottom_bg{
  box-shadow: 0px -20px 20px #28B4DF;
  background-image: linear-gradient(#71d2f0,#358ba8) ;
  height: 50vh;
  

}
.top {
  padding: 20px;
}
.top_tip {
  width: 120px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
}
.tabs{
  width: 92vw;
  background-color: #ffffff;
  height: 44vh;
  transform: translateY(-50px);
  border-radius: 20px;
  transition: all .5s;
}
.bottom_Img{
  width:110px;
  height:130px;
  border-radius: 20px;
  margin: 0 10px;
}
</style>