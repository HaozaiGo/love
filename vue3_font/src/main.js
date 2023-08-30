/*
 * @Author: xiaohao
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-06-11 16:59:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywx-backSystem\antd-back\src\main.js
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/antd.css';
// import 'ant-design-vue/dist/antd.less';
import router from './router/router.js'
require('@/assets/style/public.css')
// Vuex
import store from './store/index'
import {resquest} from '@/api/api.js'
import moment from "moment";


const app = createApp(App);



app.provide('$resquest',resquest); //全局注入resquest
app.config.globalProperties.$moment = moment; //全局注入moment
app.config.productionTip = false;
app.use(Antd);
app.use(router);
app.use(store);
app.mount('#app')