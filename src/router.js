import { createRouter, createWebHistory } from "vue-router"

import LoginView from "/src/views/LoginView.vue"
import HomePageView from "/src/views/HomePageView.vue"
import SetLocView from "/src/views/SetLocView.vue"
import UserInfoView from "/src/views/UserInfoView.vue"
import ViewPostView from "/src/views/ViewPostView.vue"
import WritePostView from "/src/views/WritePostView.vue"
import ChatView from "/src/views/ChatView.vue"
import ChatListView from "/src/views/ChatListView.vue"
import PayView from "/src/views/PayView.vue"

// 라우터 설계
const routes = [
        {path: "/", component: LoginView},
        {path: "/HomePageView", component: HomePageView},
        {path: "/SetLocView", component: SetLocView},
        {path: "/UserInfoView", component: UserInfoView},
        {path: "/ViewPostView", component: ViewPostView},
        {path: "/WritePostView", component: WritePostView},
        {path:"/ChatView", component: ChatView},
        {path:"/ChatListView", component: ChatListView},
        {path:"/PayView", component: PayView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}
