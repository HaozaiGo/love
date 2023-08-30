<template>
  <div>
    <a-table :columns="columns" :data-source="pick1List">
      <template #name="{ text }">
        <a>{{ text }}</a>
      </template>
      <template #customTitle>
        <span><smile-outlined /> Name</span>
      </template>
      <template #tags="{ text: Tags }">
        <span>
          <a-tag
            v-for="tag in Tags"
            :key="tag"
            :color="
              tag === 'loser'
                ? 'volcano'
                : tag.length > 5
                ? 'geekblue'
                : 'green'
            "
          >
            {{ tag.toUpperCase() }}
          </a-tag>
        </span>
      </template>
      <template #action="{ record }">
        <span>
          <a>Invite 一 {{ record.name }}</a>
          <a-divider type="vertical" />
          <a @click="deletePick1(record.key)">Delete</a>
          <a-divider type="vertical" />
          <a class="ant-dropdown-link"> More actions <down-outlined /> </a>
        </span>
      </template>
    </a-table>
    <div class="addDiv">
      <a-button type="primary" large class="addList" @click="showModel"
        >添加</a-button
      >
    </div>

    <a-modal :visible="visible" title="请输入" @ok="handleOk" @cancel="cancel">
      <a-form
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        :rules="rules"
        ref="formRef"
      >
        <a-form-item label="Name" name="name">
          <a-input v-model:value="formState.name" />
        </a-form-item>
        <a-form-item label="描述" name="description">
          <a-input v-model:value="formState.description" />
        </a-form-item>
        <a-form-item label="Tags" name="tags">
          <a-input v-model:value="formState.tags" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { ref, reactive, toRaw, onMounted, toRefs } from "vue";
import { message } from "ant-design-vue";
import { SmileOutlined, DownOutlined } from "@ant-design/icons-vue";
import { pick1Upload, getPick1Data, deletePick1List } from "@/api/api";

const columns = [
  {
    dataIndex: "Name",
    key: "Name",
    slots: { title: "customTitle", customRender: "name" },
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "tags",
    key: "tags",
    dataIndex: "Tags",
    slots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    slots: { customRender: "action" },
  },
];

export default {
  setup() {
    const formRef = ref();
    const visible = ref(false);
    let state = reactive({
      pick1List: [],
    });
    //规则限制
    const rules = {
      name: [{ required: true, message: "请输入名称", trigger: "blur" }],
      description: [{ required: true, message: "请输入描述", trigger: "blur" }],
      tags: [{ required: true, message: "请输入tags", trigger: "blur" }],
    };

    //打开弹窗
    const showModel = () => {
      visible.value = true;
    };
    //获取列表信息
    const Pick1Data = async () => {
      const result = await getPick1Data();
      state.pick1List = result.data.pick1List;
      // result.data
      console.log(state.pick1List);
    };
    // 确认提交pick1
    const handleOk = () => {
      formRef.value
        .validate()
        .then(() => {
          // 提交pick1
          pick1Upload(toRaw(formState)).then((res) => {
            res.status == 200
              ? message.success("提交成功")
              : message.error("提交失败");
          });
          visible.value = false;
          Pick1Data();
        })
        .catch(() => {
          message.error("请认真填写信息");
          formRef.value.resetFields();
        });

      // console.log(toRaw(formState));
    };
    //删除列
    const deletePick1 = async (key) => {
      console.log(key);
      const result = await deletePick1List({ key: key });
      state.pick1List = result.data.pick1List;
      Pick1Data();
    };
    // 点击弹窗的关闭
    const cancel = () => {
      visible.value = false;
    };
    // 表单信息
    const formState = reactive({
      name: "",
      description: "",
      tags: "",
    });

    onMounted(() => {
      Pick1Data();
    });

    return {
      ...toRefs(state),
      visible,
      showModel,
      formRef,
      columns,
      handleOk,
      deletePick1,
      cancel,
      rules,
      formState,
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 16,
      },
    };
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.addDiv {
  text-align: center;
}
.addList {
  margin: 30px auto;
}
</style>