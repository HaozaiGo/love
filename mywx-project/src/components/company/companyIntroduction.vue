<template>
  <div class="companyIntroduction flex-c">
  <!-- 介绍 -->
      <img src="http://codeve.online/onlineImg/logo.png" alt="">
      <div class="myIntroduction">
        <span> 啊豪的宣传日志</span>
         
        <p>
          地址:佛山市南海区
        </p>
      </div>
      <div class="Icon-call">
        <img src="/static/images/index/phone.png" alt="">
        <img src="/static/images/index/exchange.png" alt="">
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  
  .companyIntroduction{
    padding: 15px;
  }
  .companyIntroduction img{
    width: 80px;
    height: 80px;
  }
  .myIntroduction{
    flex: 1;
    margin-left: 15px;
  }
  
  .myIntroduction p {
    color: gray;
    font-size: 13px;
    margin-top: 15px;
  }

  .Icon-call img{
    width: 30px;
    height: 30px;
    display: block;
    margin-top: 10px;
  }
</style>