<template>
<div>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['sub1']">
      
          <a-sub-menu key="sub1">
            <template #title>
             <span><user-outlined style="margin-right: 10px;" />我的空间</span>
            </template>
            <a-menu-item  v-for="(item,index) of indexOptions" :key="index" @click="routerLink(item.url)">{{item.name}}</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span><audit-Outlined style="margin-right: 10px;" />基础报表</span>
            </template>
            <a-menu-item v-for="(items) of profile" :key="items" >{{items}}</a-menu-item>
          </a-sub-menu>
           <a-sub-menu key="sub3">
            <template #title>
              <span><appstore-Outlined style="margin-right: 10px;" />商店应用</span>
            </template>
            <a-menu-item key="1">option1</a-menu-item>
            <a-menu-item key="2">option2</a-menu-item>
            <a-menu-item key="3">option3</a-menu-item>
            <a-menu-item key="4">option4</a-menu-item>
          </a-sub-menu>
        <a-menu-item key="4">
          <areaChart-Outlined />
          <span>统计</span>
        </a-menu-item>
      </a-menu>

    </a-layout-sider>

    <a-layout>
      <!-- 头部 -->
      <a-layout-header style="background: #fff; padding: 0">
          <BarsOutlined class="trigger" @click="()=>(collapsed = !collapsed)"/>
            <a class="compaireId" @click="loginOut">退出</a>
            <a class="compaireId" @click="showModal">认证AppId</a>
         
      </a-layout-header>

      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', height: minHeight + 'px' }"
        style="overflow-y: hidden;"
      >
      <img v-if="showImg" src="@/assets/images/Background.jpg" alt="" srcset="" style="width: 100%;"
        :style="`height:${minHeight}px`"
        >
      <router-view>
      
      </router-view>
  
      </a-layout-content>
    </a-layout>
  </a-layout>



      <a-modal v-model:visible="visible" title="绑定AppId" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">返回</a-button>
        <a-button key="submit" type="primary" @click="handleOk">确认</a-button>
      </template>
  
       <a-input v-model:value="value" placeholder="appid" />
    </a-modal>
  </div>
</template>
<script>
import {UserOutlined,AuditOutlined,AppstoreOutlined,BarsOutlined,AreaChartOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue'
import {uploadAppID} from '@/api/api'
import { message } from 'ant-design-vue';
export default {
  setup(){
    const minHeight = window.innerHeight - 110
    const value = ref('')
    const visible = ref(false);
    const showImg = ref(true);
    //打开modal
    const showModal = () =>{
      visible.value = true
    }
    //取消modal
    const handleCancel = () =>{
      visible.value = false
    }
    //提交appid
    const handleOk = () => {
      uploadAppID({appId:value.value}).then(res=>{
        message.success('认证成功');
        visible.value = false
      })
    }
    return {
      visible,
      value,
      minHeight,
      showImg,
      showModal,
      handleCancel,
      handleOk,

    }
  },
  components:{
      UserOutlined,AuditOutlined,AppstoreOutlined,BarsOutlined,AreaChartOutlined
  },
  data() {
    return {
      collapsed: false,
      indexOptions:[
          {name:'代办列表',url:'/banner'},{name:'美好时刻',url:'/easyIntroduction'},{name:'实用工具',url:'/pick1'},{name:'pick2',url:'/pick2'},{name:'pick3',url:'/pick3'}
      ],
      profile:['page1','page2','page3','page4']
    };
  },
  methods:{
    routerLink(item){
      this.showImg = false;
      console.log(item);

      this.$router.push(item)
  
      },
    loginOut(){
      this.$router.replace('/');
    }
  }
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.compaireId{
  float: right;
  margin-right: 30px;
}
</style>

