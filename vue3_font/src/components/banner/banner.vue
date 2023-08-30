<!--
 * @Description: 
 * @Author: xiaoHao
-->
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
        <a class="ant-dropdown-link">
          More actions
          <down-outlined />
        </a>
      </span>
    </template>
  </a-table>
</template>
<script>
import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref,getCurrentInstance  } from 'vue';
import {getTodoList,deleteTodoList} from '@/api/api'
import { message } from 'ant-design-vue';
export default defineComponent({
  setup() {
    const columns = ref([
      {
        title: '想做的事情',
        dataIndex: 'Matter',
        key: 'Matter',
      
      },
      {
        title: '创建时间',
        dataIndex: 'CreatedAt',
        key: 'CreatedAt',
      },
      {
        title: '是否完成',
        dataIndex: 'HadDone',
        key: 'HadDone',
      },
      
      {
        title: '操作',
        key: 'action',
        slots: { customRender: 'action' },
      },
    ]);
    const data = ref([
     
    ]);
    const getTodoListData = async () => {
      const res = await getTodoList()
      let list = res.data.data.list;
      const instance = getCurrentInstance()
  
      list.forEach(item=>{
        item.HadDone = item.HadDone?'已完成':'未完成';
        const date = new Date(item.CreatedAt)
        item.CreatedAt = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
  
      })
      data.value = res.data.data.list
     
    }
    const handleDel = async (record) =>{

      const res = await deleteTodoList(record.ID)
   
      if(res.data.code === 200){
        message.success('删除成功');
        getTodoListData()
      }else{
        message.error('删除失败');
      }
  
    }
    return {
      data,
      columns,
      getTodoListData,
      handleDel
    };

  },
  mounted() {
  
    this.getTodoListData()
  },
  components: {
    SmileOutlined,
    DownOutlined,
  },
});
</script>