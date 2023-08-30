// request.js 拦截器
import axios from 'axios';
import store from '@/store';
import { message } from 'ant-design-vue'

// 创建新的axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, //这里使用了webpack中的全局变量process.env.BASE_API，而不是写死的ip，为了适应多个后台或开发时候aip地址和发布的时候api地址不一样的情况
    timeout: 3 * 1000
})
//设置post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//请求拦截器
service.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token');
    token && (config.headers.Authorization = token);

  
    //发请求前做的一些处理，数据转化，配置请求头，设置token，设置loading等,根据需求去添加
    // config.data = JSON.stringify(config.data).JSON.parse(config.data);
    // config.data = JSON.parse(config.data)
    //数据转化,也可以qs转换
    // config.headers = {
    //         'Content-Type': 'application/x-www-form-urlencoded' //配置请求头
    //     }
    //注意使用token的使用需要引入cookie方法或者用本地localStorage等方法推荐js-cookie
    // const token = getCookie('名称');
    /** if (token) {
          config.params = { 'token': token } 
          //如果要求携带在参数中
          config.headers.token = token; 
          //如果要求携带在请求头中
      } */
    //   console.log(config)
    return config
  
}, error => {
    Promise.reject(error)
})

//响应拦截
service.interceptors.response.use(response => {
    //接收到响应数据并成功后的一些共有处理,关闭loading等
    return response
}, error => {
    //  接收到异常响应的处理开始
    if (error && error.response) {
        //1.公共错误处理
        //2,。根据响应码具体处理
        switch (error.response.status) {
            case 400:
                message.error = "错误请求"
                break;
            case 401:
                message.error = '未授权，请重新登录'
                break;
            case 403:
                message.error = '拒绝访问'
                break;
            case 404:
                message.error = '请求错误，没找到资源'
                //window.location.href = "/NotFound"
                break;
            case 405:
                message.error = "请求方法未允许"
                break;
            case 408:
                message.error = '请求超时'
                break;
            case 500:
                message.error = '服务器端出错'
                break;
            case 501:
                message.error = '网络未实现'
                break;
            case 502:
                message.error = '网路错误'
                break;
            case 503:
                message.error = '服务不可用'
                break;
            case 504:
                message.error = '网络超时'
                break;
            case 505:
                message.error = 'http版本不支持该请求'
                break;
            default:
                message.error = `链接错误${error.response.status}`
        }
    } else {
        //超时处理
        if (JSON.stringify(error).includes('timeout')) {
            console.log('服务器响应超时，请刷新当前页')
        }
        message.error('连接服务器失败')
    }
    console.log(error.response)
    return Promise.resolve(error.response)
})

//导出文件

export default service