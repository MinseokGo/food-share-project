import { createStore } from 'vuex'
import userinfo from './userinfo'
import login from './login'
import chatlist from './chatlist'
import homepage from './homepage'
import setloc from './setloc'




export default createStore({
  modules: {
    userinfo,
    login,
    homepage,
    chatlist,
    setloc

  },
})