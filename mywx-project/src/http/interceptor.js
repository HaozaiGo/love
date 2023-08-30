
var Fly = require("flyio/dist/npm/wx")
var fly = new Fly

//请求拦截
fly.interceptors.request.use((request)=>{
    console.log(request)
    /*
    request对象结构

    baseURL 请求的基地址
    body 请求的参数
    headers  自定义请求头
    timeout 超时时间
    url 本次请求地址
    withCredentials 跨域是否发送第3方cookie
    */
    return request;
})
//响应拦截
fly.interceptors.response.use((response)=>{
    return response.data
    /*
    data //服务器返回数据
    engine //http engine
    headers  响应头信息
    request 请求信息，同上结构
    */
},(err)=>{
    //发生网络错误时候
    console.log(err)
})

export default fly
