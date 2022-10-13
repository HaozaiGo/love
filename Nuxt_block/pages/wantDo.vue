<!--
 * @Author: xiaoHao
-->
<!--
 * @Author: xiaoHao
-->

<template>
  <div class="content">
    <div class="title">期待已久的事</div>
    <div v-for="(item, index) in rowList" :key="index" class="flex-sb rowSty">
      <input
        :checked="item.selected"
        :value="item.selected"
        name="123"
        type="radio"
        @click="handleSelect(item)"
      />
      <span style="margin-right: 10px"
        ><i class="iconfont iconbianji" style="font-size: 26px"></i
      ></span>
      <span style="flex: 1" class="oneRow">{{ item.Matter }}</span>
      <span style="margin-left: 10px"
        ><i
          class="iconfont iconsuccess-filling"
          style="font-size: 26px"
          :style="item.HadDone ? 'color:green' : 'none'"
        ></i
      ></span>
    </div>

    <div
      style="position: fixed; bottom: 40px; text-align: center; width: 100vw"
    >
      <button class="buttomBtn" style="margin-right: 10vw" @click="handleDone">
        Done
      </button>
      <button class="buttomBtn">Writing</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rowList: [1, 2],
      selected:"",
    }
  },
  created() {
    // console.log(this.$axios);
    this.asyncData()
  },
  methods: {
    asyncData(ctx) {
      this.$axios.get('/matter/list').then((res) => {
        const arr = res.data.data.list
        for (let i = 0; i < arr.length; i++) {
          arr[i].selected = false
        }

        this.rowList = arr
        console.log(this.rowList)
      })
    },
    handleSelect(val) {
    
      this.selected = val.ID;
      val.selected = !val.selected;
   
    },
    handleDone(){
      this.$axios.put(`/matter/done/${this.selected}`).then(res=>{
        console.log(res);
      })
    },
    
  },
}
</script>

<style scoped>
.title {
  font-size: 18px;
  padding: 30px 20px;
  font-weight: bold;
}
.content {
  background: #253035;
  min-height: 100vh;
  color: #ffffff;
}
.rowSty {
  padding: 12px 15px;
  border-top: 1px solid #c1c1c1;
}
.buttomBtn {
  padding: 12px 32px;
  border: 2px solid #c1c1c1;
  border-radius: 20px;
  background: #253035;
  color: #ffffff;
}
</style>