<!--
 * @Author: xiaoHao
-->
<template>
  <div class="content">
    <div class="flex-sb toolList" >
      <div @click="linkTo()"><img src="@/static/img/tool1.png"></img>
        <p class="titleColor">出行疫情</p>
      </div>
      <div><img src="@/static/img/tool2.png"></img></div>
      <div><img src="@/static/img/tool3.png"></img></div>
    </div>
  </div>
</template>

<script>
export default {
    name:"OtherTools",
    methods:{
      linkTo(){
        window.location.href = "https://wp.m.163.com/163/page/news/virus_report/index.html"
      }
    }
}
</script>

<style scoped>
  .content{
    background: linear-gradient(to bottom left, #44bcc0,#18474b);
    min-height: 100vh;
    padding: 20px;
  }
   .toolList{
      padding: 0 20px;
   }
  .toolList div img{
    border-radius: 60%;
      width: 60px;
    
  }
  .titleColor{
    color: #d6d3d3;
  }
</style>