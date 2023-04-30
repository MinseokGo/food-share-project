import { createRouter, createWebHistory } from "vue-router"

import Home from "./components/homePageView"
import Login from "./components/loginView"

// 라우터 설계
const routes = [
        {path:"/", component: Login},
        {path:"/Home", component: Home},
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}
