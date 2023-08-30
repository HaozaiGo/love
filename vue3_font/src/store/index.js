/*
 * @Author: your name
 * @Date: 2021-04-27 09:49:15
 * @LastEditTime: 2021-05-12 14:55:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \mywx-backSystem\antd-back\src\store\index.js
 */
// import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            userName: '',
            token:''
        }
    },
    mutations: {
        M_userName(state, newName) {
            state.userName = newName
        },
        setToken(state,token){
            state.token = token
        }
    },
    getters: {
        getUserName(state) {
            return state.userName
        },
        getToken(state){
            return state.token
        }
    },
    actions:{
        setToken(context,token){
            context.commit('setToken',token)
        }
    }
})
export default store;