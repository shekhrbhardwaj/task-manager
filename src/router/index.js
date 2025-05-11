import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/HomeComponent.vue"
import About from "../components/AboutusComponent.vue"

const routes = [
    {path:"/", name:"home", component:Home},
    {path:"/about", name:"about", component: About}
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes,
    linkActiveClass:"nav-active"
});

export default router