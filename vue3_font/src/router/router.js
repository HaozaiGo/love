// import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'

import Index from '@/pages/index/index.vue';
import Login from '@/pages/login/login.vue';
import EasyIntroduction from '../components/easyIntroduction/easyIntroduction.vue';
import Pick1 from '@/pages/picker/pick1.vue';
import Pick2 from '@/pages/picker/pick2.vue';
import Pick3 from '@/pages/picker/pick3.vue';
import Banner from '@/components/banner/banner.vue';
import Registered from '@/pages/registered/registered.vue'



const routes = [{
        path: '/',
        component: Login
    },
    {
        path: '/index',
        component: Index,
        children: [
            { path: '/banner', component: Banner },
            { path: '/easyIntroduction', component: EasyIntroduction },
            { path: '/pick1', component: Pick1 },
            { path: '/pick2', component: Pick2 },
            { path: '/pick3', component: Pick3 }
        ]
    },
    {
        path: '/registered',
        component: Registered
    }


]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
