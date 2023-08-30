<!--
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-11 17:51:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \antd-back\src\pages\picker\pick3.vue
-->
<template>
  <div>
    <a-card hoverable style="width: 300px">
      <!-- 封面 -->
      <template #cover>
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      </template>
      <template class="ant-card-actions" #actions>
        <setting-outlined key="setting" />
        <edit-outlined key="edit" />
        <ellipsis-outlined key="ellipsis" />
      </template>
      <a-card-meta title="Card title" description="This is the pick3">
      </a-card-meta>
    </a-card>
    <!-- 添加按钮 -->
    <div style="text-align: center">
      <a-button type="primary" shape="round" @click="addCard">
        <template #icon>
          <PlusOutlined />
          添加
        </template>
      </a-button>
    </div>

    <a-modal
      :visible="state.visible"
      title="Basic Modal"
      @ok="handleOk"
      @cancel="handleCanel"
    >
      <p>
        <!-- 上传头像 -->
        <a-upload
          v-model="state.imgfile"
          list-type="picture-card"
          class="avatar-uploader"
          :show-upload-list="false"
          :action="
            state.edit ? request + '/editPick3' : request + `/pick3UpLoad`
          "
          :headers="{ authorization: getToken }"
          :before-upload="beforeUpload"
        >
        <!--这里会转base64Img -->
          <img v-if="state.imageUrl" :src="state.imageUrl" alt="avatar" />
          <div v-else>
            
            <loading-outlined v-if="true" />
            <plus-outlined v-else />
            <div class="ant-upload-text">上传图片</div>
          </div>
        </a-upload>
      </p>
      <p>{{ getToken }}</p>
      <p><a-input v-model:value="state.title" placeholder="输入title" /></p>
      <p><a-input v-model:value="state.description" placeholder="输入描述" /></p>
    </a-modal>
  </div>
</template>

<script>

import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons-vue";
import { ref, inject, reactive } from "vue";
import { mapGetters } from "vuex";
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
  },
  setup() {
    const request = inject("$resquest");
    const state = reactive({
      visible: false,
      imgfile:"",
      edit:false,
      title:"",
      uploadImg:{}
    });
    const addCard = () => {
      state.visible = true;
    };
    const handleCanel = () => {
      state.visible = false;
    };
     // 图片提交前勾子
    const beforeUpload = (file) => {
      console.log(file);
      state.uploadImg = {file}; //将file赋值到uploadImg
      message.success("图片添加完成");
      return false;
    };
    const handleOk = () => {
       if (state.uploadImg.length == 0) {
        message.error("必须上传图片");
        return;
      } else{
        const formData = new FormData();
        formData.append("file", state.uploadImg );
        formData.append('title',state.title);
        formData.append('title',state.description);
      }
    }
    return {
      state,
      addCard,
      handleCanel,
      request,
      beforeUpload,
      handleOk
    };
  },
  data() {
    return {};
  },
   computed: {
    ...mapGetters(["getToken"]),
  },
};
</script>

<style>
</style>