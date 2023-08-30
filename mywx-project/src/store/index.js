import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        username:'',
        appId:'11'
    },
    mutations:{
        setUserName(state,n){
            state.username = n
        }
    }
})
export default store;