<!--
 * @Author: xiaoHao
-->

<template>
  <div class="content">
    <div class="flex-sb toolList" style="flex-wrap: wrap;">
      <div @click="linkTo()"><img src="@/static/img/tool4.jpg"></img>
        <p class="titleColor">Pexels</p>
      </div>
      <div @click="btn2">
        <img src="@/static/img/tool2.png" style=" border-radius: 50%"></img>
        <p class="titleColor">帮小忙</p>
      </div>

      <div @click="btn3"><img src="@/static/img/tool3.png" style=" border-radius: 50%"></img>
        <p class="titleColor">慕课</p>

      </div>

      <div @click="btn5"><img src="@/static/img/tool5.png" ></img>
        <p class="titleColor">试题库</p>
      </div>
      <div @click="btn6"><img src="@/static/img/tool6.png" style=" border-radius: 50%"></img>
        <p class="titleColor">电影网</p>
      </div>

      <div @click="btn7"><img src="@/static/img/tool7.png" style=" border-radius: 50%" ></img>
        <p class="titleColor">抠图</p>

      </div>

      <div @click="btn8"><img src="@/static/img/tool8.png" style=" border-radius: 50%" ></img>
        <p class="titleColor">今日热搜</p>

      </div>


    </div>



  </div>
</template>

<script>
export default {
  name: "OtherTools",
  methods: {
    linkTo() {
      window.location.href = "https://www.pexels.com/zh-cn/"
    },
    btn2() {
      window.location.href = `https://tool.browser.qq.com/`
    },
    btn3() {
      window.location.href = `https://www.icourse163.org/`
    },
    btn5() {
      window.location.href = `https://www.asklib.com/`
    },
    btn6() {
      window.location.href = `https://subhd.tv/`
    },
    btn7(){
      window.location.href = `https://www.remove.bg/zh`
    },
    btn8(){
      window.location.href = `https://tophub.today/`
    }
  }
}
</script>

<style scoped>
.content {
  background: linear-gradient(to bottom left, #44bcc0, #18474b);
  min-height: 100vh;
  padding: 20px;
}

.toolList {}

.toolList div {
  text-align: center;
  width: 85px;
  height: 90px;
  margin: 15px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 10px #00000033;

}

.toolList div img {

  width: 60px;

}

.titleColor {
  color: #000;
  text-align: center;
  font-weight: bold;
}
</style>