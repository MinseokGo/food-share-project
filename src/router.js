import { createRouter, createWebHistory } from "vue-router"

import loginView from "./components/loginView"
import homePageView from "./components/homePageView"
import setlocView from "./components/setlocView"
import userinfoView from "./components/userinfoView"
import viewpostView from "./components/viewpostView"
import writepostView from "./components/writepostView"
import chatView from "./components/chatView"
import chatListView from "./components/chatListView"
import payView from "./components/payView"

// 라우터 설계
const routes = [
        {path: "/", component: loginView},
        {path: "/homePageView", component: homePageView},
        {path: "/setlocView", component: setlocView},
        {path: "/userinfoView", component: userinfoView},
        {path: "/viewpostView", component: viewpostView},
        {path: "/writepostView", component: writepostView},
        {path:"/chatListView", component: chatListView},
        {path:"/chatView", component: chatView},
        {path:"/payView", component: payView}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 라우터 추출 (main.js에서 import)
export {router}
