<!--
 * @Description: 
 * @Author: xiaoHao
-->
<template>
  <a-table :columns="columns" :data-source="data">

    <template #action="{ record }">
      <span>

        <a @click="handleDel(record)">Delete</a>
        <a-divider type="vertical" />

      </span>
    </template>
    <template #Pic="{ record }">
      <span>
        <a-image :width="120" :src="url + '/static/企业微信截图_20220802211532.png'" />
      </span>
    </template>

  </a-table>
</template>

<script>
import { getBeautyTime, deleteBeautyTime, resquest } from '@/api/api'
import { message } from 'ant-design-vue';
export default {

  data() {
    return {
      columns: [
        {
          title: '时间',
          dataIndex: 'ActionTime',
          key: 'ActionTime',
        },
        {
          title: '地点',
          dataIndex: 'Local',
          key: 'Local',
        },
        {
          title: '图片',

          key: 'Pic',
          slots: { customRender: 'Pic' },
        },
        {
          title: '评论',
          dataIndex: 'Remark',
          key: 'Remark',
        },
        {
          title: '操作',
          key: 'action',
          slots: { customRender: 'action' },
        },
      ],
      data: [],
      url: resquest
    }
  },
  mounted() {
    this.getBeautyTime()
  
  },
  methods: {
    // 获取美好时刻
    async getBeautyTime() {
      const res = await getBeautyTime()
      if (res.data.code === 200) {
        let list = res.data.data.list;
        list.forEach(item => {
          item.key = item.ID
        })
        this.data = list
      }
     

    },
    // 删除
    async handleDel(record) {
      const res = await deleteBeautyTime(record.ID)

      if (res.data.code === 200) {
        message.success('删除成功')
        this.getBeautyTime()
      } else {
        message.error('删除失败')
      }

    }
  },

};
</script>

<style scoped></style>