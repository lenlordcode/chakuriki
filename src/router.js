import {createRouter, createWebHashHistory} from 'vue-router'
import Pages from "@/pages/path.js";
import Home from '@/pages/home/Home.vue'
import error from '@/pages/404.vue'

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        ...Pages.options.routes,
        {
            path: '/',
            component:Home,
        },
    ]
})
