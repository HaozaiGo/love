<template>
  <view class="flex-col page">
    <view class="flex-col flex-auto group_2 space-y-16">
      <view class="flex-row items-center section space-x-16">
        <image
          class="image_5"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328637855616.png"
        />
        <text class="font_1 text_3">Fan Chen</text>
      </view>
      <view class="flex-col section_2">
        <text class="self-start text_4">我的订单</text>
        <view class="flex-row equal-division">
          <view class="flex-col items-center group_3 equal-division-item space-y-10">
            <image
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/11c343daba34f80e9f51260fa869b5ef.png"
            />
            <text class="font_2">待付款</text>
          </view>
          <view class="flex-col items-center group_3 equal-division-item space-y-10">
            <image
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337794454995.png"
            />
            <text class="font_2">待使用</text>
          </view>
          <view class="flex-col items-center group_3 equal-division-item space-y-10">
            <image
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337834988033.png"
            />
            <text class="font_2">待评价</text>
          </view>
          <view class="flex-col items-center group_3 equal-division-item space-y-10">
            <image
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337859367126.png"
            />
            <text class="font_2">退款/售后</text>
          </view>
        </view>
      </view>
      <view class="flex-col section_3 space-y-26">
        <view class="flex-row items-center space-x-16">
          <image
            class="image_7"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/2c3a4658e76a6e573921d83d6f875bca.png"
          />
          <text class="font_3">我的浏览记录</text>
        </view>
        <view class="flex-row space-x-17">
          <image
            class="image_8"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328709050413.png"
          />
          <text class="font_3">我的收藏</text>
        </view>
        <view class="flex-row space-x-18">
          <image
            class="image_9"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/21b67446fbf45b66e7d7c917011bd0e2.png"
          />
          <text class="font_3">我的预约</text>
        </view>
      </view>
      <view class="flex-row items-center section_3 space-x-17">
        <image
          class="image_10"
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328724869484.png"
        />
        <text class="font_3">咨询热线</text>
      </view>
      <view class="flex-col section_3 space-y-26">
        <view class="flex-row space-x-18">
          <image
            class="image_11"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/f0bb102a5d7cf722957ed4683149706f.png"
          />
          <text class="font_3">服务条款</text>
        </view>
        <view class="flex-row space-x-16">
          <image
            class="image_12"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632328615957223.png"
          />
          <text class="font_3">我要反馈</text>
        </view>
        <view class="flex-row space-x-17">
          <image
            class="image_10"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16240632337181384256.png"
          />
          <text class="font_3">关于我们</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    components: {},
    props: {},
    data() {
      return {};
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #f2f2f2;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .font_1 {
    font-size: 34rpx;
    font-family: 'PingFangSC-Semibold';
    line-height: 48rpx;
    font-weight: 600;
    color: #000000;
  }
  .group_2 {
    padding: 32rpx 0 126rpx;
    overflow-y: auto;
  }
  .space-y-16 > view:not(:first-child),
  .space-y-16 > text:not(:first-child),
  .space-y-16 > image:not(:first-child) {
    margin-top: 32rpx;
  }
  .section {
    padding: 32rpx 40rpx;
    background-color: #ffffff;
  }
  .space-x-16 > view:not(:first-child),
  .space-x-16 > text:not(:first-child),
  .space-x-16 > image:not(:first-child) {
    margin-left: 32rpx;
  }
  .image_5 {
    border-radius: 50%;
    width: 128rpx;
    height: 128rpx;
  }
  .text_3 {
    font-size: 36rpx;
    line-height: 50rpx;
  }
  .section_2 {
    padding: 40rpx 40rpx 28rpx;
    background-color: #ffffff;
  }
  .text_4 {
    color: #000000;
    font-size: 30rpx;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    line-height: 42rpx;
  }
  .equal-division {
    margin-top: 16rpx;
  }
  .group_3 {
    flex: 1 1 168rpx;
  }
  .equal-division-item {
    padding: 12rpx 0;
  }
  .space-y-10 > view:not(:first-child),
  .space-y-10 > text:not(:first-child),
  .space-y-10 > image:not(:first-child) {
    margin-top: 20rpx;
  }
  .image_6 {
    width: 54rpx;
    height: 54rpx;
  }
  .font_2 {
    font-size: 26rpx;
    font-family: 'PingFangSC-Regular';
    line-height: 36rpx;
    color: #000000;
  }
  .section_3 {
    padding: 28rpx 40rpx;
    background-color: #ffffff;
  }
  .space-y-26 > view:not(:first-child),
  .space-y-26 > text:not(:first-child),
  .space-y-26 > image:not(:first-child) {
    margin-top: 52rpx;
  }
  .image_7 {
    width: 48rpx;
    height: 30rpx;
  }
  .font_3 {
    font-size: 34rpx;
    font-family: 'PingFangSC-Regular';
    line-height: 48rpx;
    color: #000000;
  }
  .space-x-17 > view:not(:first-child),
  .space-x-17 > text:not(:first-child),
  .space-x-17 > image:not(:first-child) {
    margin-left: 34rpx;
  }
  .image_8 {
    margin: 4rpx 0;
    width: 44rpx;
    height: 42rpx;
  }
  .space-x-18 > view:not(:first-child),
  .space-x-18 > text:not(:first-child),
  .space-x-18 > image:not(:first-child) {
    margin-left: 36rpx;
  }
  .image_9 {
    width: 40rpx;
    height: 46rpx;
  }
  .image_10 {
    width: 44rpx;
    height: 44rpx;
  }
  .image_11 {
    width: 38rpx;
    height: 44rpx;
  }
  .image_12 {
    width: 42rpx;
    height: 44rpx;
  }
</style>