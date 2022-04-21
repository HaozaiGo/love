<!--
 * @Description: xiaoHao
 * @Date: 2022-04-19 11:08:41
 * @LastEditTime: 2022-04-21 16:06:14
 * @FilePath: \Nuxt_block\pages\index.vue
-->
<template>
  <div>
   
      <div class="content" @click="routeLink">
        <!-- <img src="/img/index.jpg" alt="" srcset="" style="with:100vw;height:100vh"> -->
        <div class="name">
          <div class="flex">
            <div class="animate__animated animate__backInLeft">{{ me }}</div>
            &&
            <div class="animate__animated animate__backInRight">{{ baby }}</div>
          </div>
        </div>

        <h2 class="timeLimit">至今已经{{ time }}天{{ hour }}小时</h2>
      </div>
   
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  asyncData(context) {
    return {
      me: 'hello nuxt',
      baby: 'babyyeyey',
    }
  },
  data() {
    return {
      time: '',
      hour: '',
    }
  },
  created() {
    // this.runningTime()
  },
  mounted() {
    this.runningTime()
  },
  methods: {
    runningTime() {
      const now = new Date().getTime()
      // 因为上面的new Date() 月份少1
      const start = new Date(2022, 2, 27).getTime()
      const today = now - start
      // 获取至今多少天
      const passDay = today / (1000 * 3600 * 24)
      const hour = String(passDay.toFixed(1)).split('.')[1]
      window.console.log(hour * 2.4)

      this.time = Math.round(passDay)
      this.hour = Math.round(hour * 2.4)
    },
    routeLink(){
      this.$router.push({
        path:'/menu'
      })
    }
  },
}
</script>

<style scoped>
.name {
  position: absolute;
  top: 250px;
  width: 100%;
}
.content {
  position: relative;
  background: url('/img/place3.jpg');
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.timeLimit {
  text-align: center;
  margin-top: 300px;
}
</style>
