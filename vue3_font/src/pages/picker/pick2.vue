<!--
 * @Author: xiaohao
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-11 14:59:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywx-backSystem\antd-back\src\pages\picker\pick2.vue
-->
<template>
  <div>
    <!-- 添加按钮 -->
    <div style="text-align: center">
      <a-button type="primary" shape="round" :size="size" @click="addCard">
        <template #icon>
          <PlusOutlined />
          添加
        </template>
      </a-button>
    </div>
    <a-row :gutter="16">
      <a-col :span="4" v-for="(item, index) in state.pick2Cards" :key="index">
        <!-- 卡片 -->
        <a-card hoverable>
          <!-- 封面 -->
          <template #cover>
            <img
              alt="example"
              :src="request + '/' + item.img"
              style="height: 25vh"
            />
            <!-- :src="request + `/20210518093836_1565.png`" -->
          </template>
          <template class="ant-card-actions" #actions>
            <setting-outlined key="setting" @click="showDelete(item.key)" />
            <edit-outlined key="edit" @click="showModal(item._id)" />
            <ellipsis-outlined key="ellipsis" />
          </template>
          <a-card-meta title="描述" :description="item.description">
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>

    <!-- 编辑添加 -->
    <div>
      <a-modal
        :visible="visible"
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
              state.edit ? request + '/editPick2' : request + `/pick2UpLoad`
            "
            :headers="{ authorization: getToken }"
            :before-upload="beforeUpload"
          >
            <img v-if="state.imageUrl" :src="state.imageUrl" alt="avatar" />
            <div v-else>
              <!-- todo -->
              <loading-outlined v-if="loading" />
              <plus-outlined v-else />
              <div class="ant-upload-text">上传图片</div>
            </div>
          </a-upload>
        </p>
        <p>{{ getToken }}</p>
        <p><a-input v-model:value="state.disValue" placeholder="输入描述" /></p>
      </a-modal>
    </div>
    <!-- 删除提示 -->

    <a-modal
      v-model:visible="delVisible"
      title="提示"
      @ok="handleComfirmDelete"
    >
      <p>
        <ExclamationCircleOutlined
          style="fontsize: 26px; color: rgb(255, 165, 0); margin-right: 20px"
        />确认要删除此项吗？
      </p>
    </a-modal>
  </div>
</template>

<script>
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  LoadingOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
import { ref, inject, reactive, onMounted } from "vue";
import { mapGetters } from "vuex";
import { message } from "ant-design-vue";
import {
  uploadPick2Drs,
  getPick2Data,
  deletePick2One,
  editPick2,
} from "@/api/pick2.js";
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}
export default {
  components: {
    SettingOutlined,
    EditOutlined,
    EllipsisOutlined,
    LoadingOutlined,
    PlusOutlined,
    ExclamationCircleOutlined,
  },

  setup() {
    const request = inject("$resquest");
    const visible = ref(false);
    const delVisible = ref(false);
    const loading = ref(false);

    const state = reactive({
      disValue: "", //描述
      pick2Cards: [], //cards
      imageUrl: "", //显示base64图片
      uploadImg: [],
      imgfile: "",
      cardIndex: 0, //card的编号
      edit: false, //是否编辑状态
    });
    //获取列表数据
    const getPick2List = () => {
      getPick2Data().then((res) => {
        console.log(res);
        state.pick2Cards = res.data;
      });
    };

    // 打开编辑
    const showModal = (index) => {
      state.cardIndex = index;
      state.edit = true;
      console.log(state.cardIndex);
      visible.value = true;
    };
    // 图片提交前勾子
    const beforeUpload = (file) => {
      console.log(file);
      state.uploadImg = [...state.uploadImg, file]; //将file赋值到uploadImg
      message.success("图片添加完成");
      return false;
    };
    //确认
    const handleOk = (e) => {
      console.log(state.uploadImg.length);
      if (state.uploadImg.length == 0) {
        message.error("必须上传图片");
        return;
      } else {
        const formData = new FormData();
        state.uploadImg.forEach((file) => {
          formData.append("file", file);
        });
        formData.append("disValue", state.disValue);
        formData.append("key", state.cardIndex); //key

        //编辑操作
        if (state.edit) {
          console.log(formData);
          editPick2(formData).then((res) => {
            console.log(res);

            res.status === 200
              ? message.success("编辑成功")
              : message.error("编辑失败");
            getPick2List();
          });
          state.edit = false;
        } else {
          uploadPick2Drs(formData).then((res) => {
            // console.log(res);
            if (res.status === 200) {
              message.success("上传成功");
              getPick2List();
            } else {
              message.error("上传失败");
            }
          });
          state.edit = false;
        }

        visible.value = false;
      }
    };
    //关闭编辑框
    const handleCanel = () => {
      visible.value = false;
    };
    // addcards
    const addCard = () => {
      visible.value = true;
    };
    //showDelete
    const showDelete = (index) => {
      state.cardIndex = index;
      console.log(state.cardIndex);
      delVisible.value = true;
    };
    // 确认删除按钮
    const handleComfirmDelete = () => {
      deletePick2One(state.cardIndex).then((res) => {
        console.log(res);
        res.status == 200
          ? message.success("删除成功")
          : message.error("删除失败");
        delVisible.value = false;
        getPick2List();
      });
    };

    onMounted(() => {
      getPick2List();
    });
    return {
      visible,
      showModal,
      handleOk,
      request,
      loading,
      state,
      handleCanel,
      addCard,
      beforeUpload,
      getPick2List,
      showDelete,
      delVisible,
      handleComfirmDelete,
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