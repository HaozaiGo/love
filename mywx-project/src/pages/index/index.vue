<template>
  <div>
    <Swiper></Swiper>
    <Compony-introduction></Compony-introduction>
    <Img-introduction></Img-introduction>
    <!-- <van-overlay show="show" bind:click="onClickHide" /> -->
    <van-popup show="show" :close="onClose" z-index=999 custom-style="text-align: center;height: 23%;width:70vw;padding:40rpx">
    请到后台绑定您的appId
    <van-button type="primary" custom-style="margin-top: 20px" >确认</van-button>
    </van-popup>
  </div>
</template>

<script>
import Swiper from "@/components/swiper.vue";
import ComponyIntroduction from "@/components/company/companyIntroduction.vue";
import ImgIntroduction from "@/components/imgIntroduction/imgIntroduction.vue";
export default {
  data() {
    return {
      show:true
    };
  },

  components: {
    Swiper,
    ComponyIntroduction,
    ImgIntroduction,
  },

  methods: {
    onChange(e) {
      wx.showToast({
        title: `切换到${e.detail.name}`,
        icon: "none",
      });
    },
  },


  created() {
    // let app = getApp()
  },
  mounted() {
    
  },
};
</script>

<style scoped>

</style>
