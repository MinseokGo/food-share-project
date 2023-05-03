import { createRouter, createWebHistory } from "vue-router"

import LoginView from "./views/LoginView.vue"
import HomePageView from "./views/HomePageView.vue"
import SetLocView from "./views/SetLocView.vue"
import UserInfoView from "./views/UserInfoView.vue"
import ViewPostView from "./views/ViewPostView.vue"
import WritePostView from "./views/WritePostView.vue"
import ChatView from "./views/ChatView.vue"
import ChatListView from "./views/ChatListView.vue"
import PayView from "./views/PayView.vue"

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
