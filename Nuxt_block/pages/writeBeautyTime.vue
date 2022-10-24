<!--
 * @Author: xiaoHao
-->
<!--
 * @Author: xiaoHao
-->
<template>
  <div class="content">
    <div class="flex-sb row">
        <div style="width:100px">上传图片:</div>
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
        <div>
            活动日期:
        </div>
      <el-date-picker v-model="form.time" type="date" placeholder="选择日期">
      </el-date-picker>
    </div>

    <div class="flex-sb row">
        <div style="width:100px">
            地点:
        </div>
        <el-input v-model="form.localtion" ></el-input>
    </div>

    <div class="flex-sb row">
        <div style="width:100px">
            评论:
        </div>
        <el-input v-model="form.comment" type="textarea"  :rows="4" ></el-input>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                time:'',
                localtion:"",
                comment:"",
            },
           
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
    handleUpload(file){
        console.log(file.file);
        const form = new FormData();
        form.append("file", file.file);
        this.$axios.post("/upLoad/beauty",form)
    }
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
.row{
    margin-bottom: 20px;
}
</style>