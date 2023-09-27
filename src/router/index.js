import * as Vue from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import userList from '../views/userList.vue'
import overview from '../views/overview.vue'

// Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: userList
    },
    {
        path: '/overview',
        name: 'Overview',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: overview
    }
]

const router = createRouter({
    history: createWebHistory(),
    // base: process.env.BASE_URL,
    routes
})
app.use(router)

app.mount('#app')