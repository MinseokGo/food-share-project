import { createStore } from 'vuex'
import userinfo from './userinfo'
import login from './login'


export default createStore({
  modules: {
    userinfo,
    login,
  },
})