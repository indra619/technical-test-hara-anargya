import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createRouter, createWebHistory } from 'vue-router'

// Import your route components
import userlist from './views/userList.vue'
import overview from './views/overview.vue'
// Import other route components as needed

const app = createApp(App)

// Create a router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: userlist, // This component will be rendered for the root path '/'
        },
        {
            path: '/overview',
            component: overview, // This component will be rendered for the '/about' path
        },
        // Add more routes here as needed
    ],
})

// Mount the router instance to your app
app.use(router)

app.mount('#app')