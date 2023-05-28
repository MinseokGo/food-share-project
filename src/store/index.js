import { createStore } from 'vuex'
import userinfo from './userinfo'
import login from './login'
import chatlist from './chatlist'
import homepage from './homepage'




export default createStore({
  modules: {
    userinfo,
    login,
    homepage,
    chatlist,

  },
})