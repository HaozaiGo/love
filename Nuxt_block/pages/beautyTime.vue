<!--
 * @Author: xiaoHao
-->
<template>
  <div>
    <div class="bg">
      <div class="top flex">
        <div class="flex top_tip">
            <img src="@/static/img/beauty1.jpg" style="width:40px;height:40px;margin-right: 10px;"></img>
            <div> 巴黎</div>
        <div>
         
        </div>
        </div>
     
    </div>

  </div>

  
  <div class="bottom_bg flex">
    <div class="tabs">
      <p style="font-size:18px;font-weight:bold">相似景点</p>
      <p>西瓜系数据库来得及</p>
      <div class="flex">
        <img src="@/static/img/OIP-C.jpg" alt="" style="width:110px;height:140px"></img>
        <div>
          <p>亚龙湾</p>
          <div><img src="@/static/img/local.png" alt="" style="width:15px;height:15px"> 地点: 南海：三亚</div>
        </div>
        
      </div>
    </div>
  </div>
  <div>

  </div>
</div>
</template>

<script>
export default {}
</script>

<style>
.bg {
  background: url('@/static/img/Beautybg2.png');
  height: 50vh;
  background-size: 100% 100%;
  padding-top: 60px;
  display: block;
}
.bottom_bg{
  background-color: #28B4DF;
  height: 50vh;
  text-align: center;
 
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
  height: 46vh;
  transform: translateY(-50px);
  border-radius: 20px;
}
</style>