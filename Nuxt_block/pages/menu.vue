<!--
 * @Description: xiaoHao
 * @Date: 2022-04-19 11:51:40
 * @LastEditTime: 2022-04-21 16:26:41
 * @FilePath: \Nuxt_block\pages\menu.vue
-->
<template>
  <div >
    <div class="topBg">

    </div>
    <div class="content">
      <p class="title">--</p>
      <p>不忘初心</p>
      <i class="iconfont iconshouye baseColor" style="font-size:30px;position: absolute;right: 30px;top: 66px"> </i>

      <div class="flex" style="justify-content: space-around;margin-top: 40px;">
        <div>
          <i class="iconfont iconfavorite-filling yColor" style="font-size:26px"></i>
          <p style="font-size:13px">收藏空间</p>
        </div>
        <div>
          <i class="iconfont icondaichuli gColor" style="font-size:26px"></i>
          <p style="font-size:13px">美好时刻</p>
          </div>
        <div>
          <i class="iconfont iconmenu baseColor" style="font-size:26px"></i>
          <p style="font-size:13px">期待已久</p>
           
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
  name:'MenuPage'
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
    font-size: 30px;
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