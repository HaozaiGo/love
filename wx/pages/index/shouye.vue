<template>
  <view class="flex-col page">
    <view class="flex-col flex-auto group">
      <image
        class="image_4"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093791214053.png"
      />
      <view class="flex-row equal-division">
        <view class="flex-col items-center group_2 equal-division-item space-y-6">
          <image
            class="image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/45b4e7289b37f56154aab442fbe878ec.png"
          />
          <text class="font_1">地图找楼</text>
        </view>
        <view class="flex-col items-center group_2 equal-division-item space-y-6">
          <image
            class="image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/0bd0bb4d36b778f945c84563de6d2356.png"
          />
          <text class="font_1">核心商圈</text>
        </view>
        <view class="flex-col items-center group_2 equal-division-item space-y-6">
          <image
            class="image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/e6ff79d6a0b9e960c7df41eb76f37229.png"
          />
          <text class="font_1">全景参观</text>
        </view>
        <view class="flex-col items-center group_2 equal-division-item space-y-6">
          <image
            class="image_5"
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/6177b0ffe4f145001134c2f1/6177b0ffe4f145001134c2f2/84c3c23951d803da5d922ec1f5fb4442.png"
          />
          <text class="font_1">咨询热线</text>
        </view>
      </view>
      <view class="flex-col group_3">
        <text class="self-start text_3">热推空间</text>
        <view class="flex-col">
          <view class="flex-row group_4 list-item space-x-16" v-for="(item, index) in items" :key="index">
            <image
              class="image_6"
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/5eedc9543259190011441867/60c321886d32e90012f09dc4/16234010093853079242.png"
            />
            <view class="flex-col flex-auto space-y-29">
              <view class="flex-col items-start space-y-8">
                <text class="font_2">维新软件科学园</text>
                <text class="font_3">深圳市南山区中心路3331号</text>
              </view>
              <view class="flex-row justify-end items-baseline space-x-3-reverse">
                <text class="font_4">¥1,870</text>
                <text class="font_3">起/工位/月</text>
              </view>
            </view>
          </view>
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
      return {
        items: [null, null, null],
      };
    },

    methods: {},
  };
</script>

<style scoped lang="css">
  .page {
    background-color: #ffffff;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;
  }
  .group {
    padding: 18rpx 38rpx 44rpx;
    overflow-y: auto;
  }
  .image_4 {
    border-radius: 16rpx;
    width: 670rpx;
    height: 300rpx;
  }
  .equal-division {
    margin-top: 54rpx;
  }
  .group_2 {
    flex: 1 1 168rpx;
  }
  .equal-division-item {
    padding: 8rpx 0;
  }
  .space-y-6 > view:not(:first-child),
  .space-y-6 > text:not(:first-child),
  .space-y-6 > image:not(:first-child) {
    margin-top: 12rpx;
  }
  .image_5 {
    border-radius: 50%;
    width: 96rpx;
    height: 96rpx;
  }
  .font_1 {
    font-size: 26rpx;
    font-family: 'PingFangSC-Regular';
    line-height: 36rpx;
    color: #000000;
  }
  .group_3 {
    margin-top: 46rpx;
  }
  .text_3 {
    color: #000000;
    font-size: 30rpx;
    font-family: 'PingFangSC-Semibold';
    font-weight: 600;
    line-height: 42rpx;
  }
  .group_4 {
    padding: 24rpx 0 32rpx;
  }
  .image_6 {
    border-radius: 8rpx;
    width: 200rpx;
    height: 200rpx;
  }
  .space-y-29 > view:not(:first-child),
  .space-y-29 > text:not(:first-child),
  .space-y-29 > image:not(:first-child) {
    margin-top: 58rpx;
  }
  .space-y-8 > view:not(:first-child),
  .space-y-8 > text:not(:first-child),
  .space-y-8 > image:not(:first-child) {
    margin-top: 16rpx;
  }
  .font_2 {
    font-size: 30rpx;
    font-family: 'PingFangSC-Regular';
    line-height: 42rpx;
    color: #000000;
  }
  .font_3 {
    font-size: 26rpx;
    font-family: 'PingFangSC-Regular';
    line-height: 36rpx;
    color: #888888;
  }
  .space-x-3-reverse > view:not(:last-child),
  .space-x-3-reverse > text:not(:last-child),
  .space-x-3-reverse > image:not(:last-child) {
    margin-right: 6rpx;
  }
  .font_4 {
    font-size: 34rpx;
    font-family: 'PingFangSC-Regular';
    line-height: 48rpx;
    color: #000000;
  }
  .list-item:not(:last-of-type) {
    border-bottom: solid 2rpx #dddddd;
  }
  .space-x-16 > view:not(:first-child),
  .space-x-16 > text:not(:first-child),
  .space-x-16 > image:not(:first-child) {
    margin-left: 32rpx;
  }
</style>