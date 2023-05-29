import { createRouter, createWebHistory } from "vue-router"
import login from "./store/login.js"



import LoginView from "/src/views/LoginView.vue"
import HomePageView from "/src/views/HomePageView.vue"
import SetLocView from "/src/views/SetLocView.vue"
import UserInfoView from "/src/views/UserInfoView.vue"
import ViewPostView from "/src/views/ViewPostView.vue"
import WritePostView from "/src/views/WritePostView.vue"
import ChatView from "/src/views/ChatView.vue"
import ChatListView from "/src/views/ChatListView.vue"
import PayView from "/src/views/PayView.vue"

const beforeAuth = isAuth => (from, to, next) => {
    const isAuthenticated = login.state.isAuthenticated
    if ((isAuthenticated && isAuth) || (!isAuthenticated && !isAuth)) {
        if(isAuth){
            console.log("유효한 토큰 보유 및 인증 요구 페이지 접근")
        } else{
            console.log("토큰 없음 및 비인증 페이지 접근")
        }
      return next()
    } else {
      // 로그인 화면으로 이동
      next("/")
    }
  }

// 라우터 설계
const routes = [
        {path: "/", component: LoginView, },
        {path: "/HomePageView", component: HomePageView, beforeEnter: beforeAuth(true),},
        {path: "/SetLocView", component: SetLocView, beforeEnter: beforeAuth(true),},
        {path: "/UserInfoView", component: UserInfoView, beforeEnter: beforeAuth(true),},
        {path: "/ViewPostView", component: ViewPostView, beforeEnter: beforeAuth(true),},
        {path: "/WritePostView", component: WritePostView, beforeEnter: beforeAuth(true),},
        {path:"/ChatView", component: ChatView, beforeEnter: beforeAuth(true),},
        {path:"/ChatListView", component: ChatListView, beforeEnter: beforeAuth(true),},
        {path:"/PayView", component: PayView, beforeEnter: beforeAuth(true),}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}
