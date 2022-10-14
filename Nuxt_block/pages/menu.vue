<!--
 * @Description: xiaoHao
 * @Date: 2022-04-19 11:51:40
 * @LastEditTime: 2022-10-14 18:39:38
 * @FilePath: \Nuxt_block\pages\menu.vue
-->
<template>
  <div >
    <div class="topBg">

    </div>
    <div class="content">
      <p class="title">
        专属秘密空间
      </p>
      <p>不忘初心</p>
      <i class="iconfont iconshouye baseColor" style="font-size:30px;position: absolute;right: 30px;top: 66px"> </i>

      <div class="flex" style="justify-content: space-around;margin-top: 40px;">
       
       
        <div @click="handleWantToDo">
          <i class="iconfont iconmenu baseColor" style="font-size:26px"></i>
          <p style="font-size:13px">期待已久</p>
        </div>
           <div @click="hand">
          <i class="iconfont iconfavorite-filling yColor" style="font-size:26px"></i>
          <p style="font-size:13px">美好时刻</p>
          </div>
         <div @click="linkToTool">
          <i class="iconfont iconbrowse gColor" style="font-size:26px"></i>
          <p style="font-size:13px">实用工具</p>
        </div>
       
      </div>

      <div style="color:#9b9999">
        <p style="margin-top:40px">
          茫茫人海中，与你相遇，像是那次星辰之间的碰撞，你的温柔、你的关心、你笑起来的模样......  
         
        </p>
        <p> 未来的路很长，我们一起走过。</p>
      </div>

     
    </div>
     <button class="btn">
        想说的话
      </button>
  </div>
  
</template>

<script>
export default {
  name:'MenuPage',
  methods:{
    handleWantToDo(){
      this.$router.push('/wantDo')
    },
    linkToTool(){
      this.$router.push('/otherTools')
    }
  }
}
</script>

<style scoped>
.flex div{
  text-align: center;
}
  .topBg{
    background: url("/img/bg.jpg");
    background-size: 100% 100%;
    height: 40vh;
    width: 100vw;
  }
  .content{
    padding: 50px 30px;
    background: #ffffff;
    transform: translateY(-40px);
    border-radius: 30px;
    position: relative;
    /* min-height: 60vh; */
  }
  .title{
    font-size: 22px;
    color: #009dff;
  }
  .btn{
    padding: 15px 40px;
    background: #02a2f8;
    color: #ffffff;
    border: none;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 6px;
    position: fixed;
    bottom: 20px;
    right: 30px;
  }
</style>