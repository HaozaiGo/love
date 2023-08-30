import Vue from 'vue'
import App from './App'
import store from './store/index.js' //vuex
import './common/share.css' //公共样式


Vue.config.productionTip = false;
Vue.prototype.$store = store; //全局注入vuex

App.mpType = 'app'

const app = new Vue(App)
app.$mount()