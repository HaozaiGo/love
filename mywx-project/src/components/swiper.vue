<template>
   <div>
    <swiper
      indicator-dots="true"
      autoplay="true"
      interval="5000"
      duration="1000"
      indicator-active-color="#fff"
      class="swiper"
    >
      <block v-for="(item, index) in banner" :index="index" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" mode="aspectFill" />
        </swiper-item>
      </block>
    </swiper>
  </div>
</template>

<script>
import {Banner} from '$api'
export default {
  data(){
    return{
        banner: [] //轮播
    }
  },
  mounted(){
    this.getBannerData()
  },
  methods:{
    async getBannerData(){
      // const bannerList = await Banner();
      
      // this.banner = bannerList
      // console.log(this.banner)
    }
  }
  
}
</script>

<style scoped>
  .slide-image{
  width: 100%;
}
.swiper{
  height: 30vh;
}
</style>