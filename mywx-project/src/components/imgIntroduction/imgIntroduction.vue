<template>
  <div>
    <van-tabs :active="active" :change="onChange">
      <!-- tab1 -->
      <van-tab title="音乐小子">
        <div class="musicBoy">
          <van-cell-group>
            <van-cell
              v-for="(item, index) of favoriteMusic"
              :key="index"
              :title="item.songName"
              :value="item.singer"
              :label="item.info"
            />
          </van-cell-group>
        </div>
      </van-tab>
      <!-- tab2 -->
      <van-tab title="爱宠">
        <div class="myPet flex-sb">
          <div v-for="(item, index) of petImg" :key="index">
            <img :src="item.url" alt="" />
            <p class="text-twoRow">{{ item.describe }}</p>
          </div>
        </div>
      </van-tab>
      <!-- tab3 -->
      <van-tab title="运动达人">
        <van-card 
          v-for="(item,index) of sport"
          :key="index"
          :num="item.time"
          :title="item.name"
          :desc="item.describe"
          :thumb="item.imgUrl"
          thumb-mode="aspectFill"
          class="card"
        />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      petImg: [
        {
          url: "/static/images/index/pet1.jpg",
          describe: "半岁的拉布拉多在仔细听你说话",
        },
        { url: "/static/images/index/pet2.jpg", describe: "金毛在眺望" },
        { url: "/static/images/index/pet3.jpg", describe: "拉布拉多长大啦" },
      ],
      favoriteMusic: [
        { songName: "成都", singer: "赵雷", info: "第一首吉他曲" },
        { songName: "青花瓷", singer: "周杰伦", info: "听不懂但又好听" },
        { songName: "演员", singer: "薛之谦", info: "情歌Nice" },
      ],
      sport:[
        {imgUrl:"/static/images/index/Sport1.jpg",name:'山地骑行',time:'1',describe:'山上的风景好美'},
        {imgUrl:"/static/images/index/Sport2.jpg",name:'慢跑',time:'3',describe:'慢跑可以增加肺活量'},
        {imgUrl:"/static/images/index/Sport3.jpg",name:'打篮球',time:'6',describe:'经常打球可以长高'}
      ]
    };
  },
};
</script>

<style scoped>
.myPet {
  padding: 15px;
  flex-wrap: wrap;
}
.myPet div {
  padding: 10rpx 10px;
  text-align: center;
}
.myPet img {
  width: 150px;
  height: 150px;
}
.card{
  margin-top: 10rpx;
}
</style>

