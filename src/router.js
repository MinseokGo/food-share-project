import { createRouter, createWebHistory } from "vue-router"

import chatView from "./components/chatView"
import chatListView from "./components/chatListView"
import payView from "./components/payView"

// 라우터 설계
const routes = [
        {path:"/", component: chatListView},
        {path:"/chatView", component: chatView},
        {path:"/payView", component: payView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}