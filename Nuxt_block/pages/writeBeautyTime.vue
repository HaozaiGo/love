<!--
 * @Author: xiaoHao
-->
<template>
  <div class="content">
    <div class="flex-sb row">
      <div style="width: 100px">上传图片:</div>
      <el-upload
        action="#"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :http-request="handleUpload"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
    </div>

    <div class="flex-sb row">
      <div>活动日期:</div>
      <el-date-picker
        v-model="form.ActionTime"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
    </div>

    <div class="flex-sb row">
      <div style="width: 100px">地点:</div>
      <el-input v-model="form.Local"></el-input>
    </div>

    <div class="flex-sb row">
      <div style="width: 100px">评论:</div>
      <el-input v-model="form.Remark" type="textarea" :rows="4"></el-input>
    </div>

    <div>
      <el-button type="primary" size="medium" @click="handleSubmit"
        >提 交</el-button
      >
    </div>
    <tips :showTips="showTips" :message="message"></tips>
  </div>
</template>

<script>
import tips from "@/component/showTips"
export default {
  components:{tips},
  data() {
    return {
      form: {
        ActionTime: '',
        Local: '',
        Remark: '',
        Pic: '',
      },
      message:"",
      showTips:false,
    }
  },
  
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handleUpload(file) {
      // console.log(file.file);
      const form = new FormData()
      form.append('file', file.file)
      this.$axios.post('/upLoad/beauty', form).then((res) => {
        if (res.data.code === 200) {
          this.showTips = true;
          this.message = res.data.msg
          this.form.Pic = res.data.name;
        } else{
          this.showTips = true;
          this.message = res.data.msg
        }
      })
    },
    handleSubmit() {
      this.showTips = false;
      this.$axios.post('/beautyTime', this.form).then((res) => {
        console.log(res)
        if(res.data.code === 200){
          this.showTips = true;
          this.message = res.data.msg;
          setTimeout(()=>{
            this.$router.push('/beautyTime')
          },1000)
     
        }
      })
    },
  },
}
</script>

<style>
.content {
  height: 100vh;

  background-image: url('@/static/img/thank.png');
  background-size: 90% 150%;

  padding: 20px;
}
.row {
  margin-bottom: 20px;
}
</style>