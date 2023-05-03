import { createRouter, createWebHistory } from "vue-router"

import LoginView from "./views/LoginView"
import HomePageView from "./components/HomePageView"
import SetLocView from "./components/SetLocView"
import UserInfoView from "./components/UserInfoView"
import ViewPostView from "./components/ViewPostView"
import WritePostView from "./components/WritePostView"
import ChatView from "./components/ChatView"
import ChatListView from "./components/ChatListView"
import PayView from "./components/PayView"

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
