/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2023-08-03 16:37:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywx-backSystem\antd-back\src\api\api.js
 */
import http from '../utils/http'
import store from '../store/index'
// resquest 请求地址
// '/testIp'代表vue-cli中config, index.js中配置的代理

 let resquest = 'http://localhost:3001' //本地
//let resquest = 'http://146.56.208.175:3000'; //生产
//let resquest = 'https://codeve.online'; //https
var userName = store.getters.getUserName;

// 主页信息
export function getIndex(params) {
    return http.get(`${resquest}/banner`, params)
}
// 登录
export function login(params) {
    return http.post(`${resquest}/login`, params)
}
// 注册
export function Registered(params) {
    return http.post(`${resquest}/registered`, params)
}
// 删除轮播图
export function deleteImg(params) {
    return http.delete(`${resquest}/deleteImg`, params)
}
// 上传信息
export function uploadInfo(params) {
    console.log(store.getters.getUserName)
    console.log(userName)
    return http.get(`${resquest}/uploadInfo?user=${store.getters.getUserName}`, params)
}
// 获取pick1内容
export function getPick1Data() {
    return http.get(`${resquest}/getPick1Data`)
}
// 上传pick1内容
export function pick1Upload(params) {
    return http.get(`${resquest}/pick1Upload`, params)
}
export function deletePick1List(query){
    return http.delete(`${resquest}/deletePick1`,query)
}
//上传appid
export function uploadAppID(params){
    return http.post(`${resquest}/uploadAppId`, params)
}

// 获取代办列表
export function getTodoList(params) {
    return http.get(`${resquest}/matter/list`, params)
}

// 删除待办事件
export function deleteTodoList(params) {
    return http.delete(`${resquest}/matter/delete/${params}`)
}

// getBeautyTime
export function getBeautyTime(params) {
    return http.get(`${resquest}/getBeautyTime`, params)
}
// 删除美好时光
export function deleteBeautyTime(params) {
    return http.delete(`${resquest}/deleteBeautyTime/${params}`)
}

export { resquest }