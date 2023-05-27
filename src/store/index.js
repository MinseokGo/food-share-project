import { createStore } from 'vuex'
import userinfo from './userinfo'
import login from './login'
import chatlist from './chatlist'



export default createStore({
  modules: {
    userinfo,
    login,
    chatlist
  },
})