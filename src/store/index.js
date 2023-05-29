import { createStore } from 'vuex'
import userinfo from './userinfo'
import login from './login'
import homepage from './homepage'
import setloc from './setloc'
import viewpost from './viewpost'
import writepost from './writepost'
import chatlist from './chatlist'
import chat from './chat'

export default createStore({
  modules: {
    userinfo,
    login,
    homepage,
    setloc,
    viewpost,
    writepost,
    chatlist,
    chat
  },
})