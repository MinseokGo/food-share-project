import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router.js'
import store from "./store/index.js"

const app = createApp(App)
app.use(store)
app.use(router)  // 라우터 사용
app.mount('#app')