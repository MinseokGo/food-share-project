import { router } from '../router.js'
import jwt from "../common/jwt"
import http from "../http"

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        logininfo:{
            userId: "",
            password: "",
        },
        token: {
            accessToken: jwt.getToken(),
        }, // 토큰정보
        isAuthenticated: !!jwt.getToken(),
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        updateLoginInfo(state, logininfo){
            state.logininfo = logininfo;
        },
        login: function (state, payload = {}) {
            state.token.accessToken = payload.accessToken
            state.isAuthenticated = true
            jwt.saveToken(payload.accessToken)
        },
    },
    actions: {
        async login(context) {
            return http
                .post("http://localhost:3000/rest/api/login", context.state.logininfo)
                .then((res) => {
                    const data = res.data
                    context.commit("login", {accessToken: data})

                    if (res.status == 200) {
                        console.log(res)
                        router.push("/HomePageView")
                    }
                })
                .catch(err => {
                    console.log(err);
                });
          },
    },
    getters : {
        getAccessToken: jwt.getToken(),
        // getAccessToken: function (state) {
        //     return state.token.accessToken
        // },
        isAuthenticated: !!jwt.getToken(),
        // isAuthenticated: function (state) {
        //     return state.isAuthenticated
        // },
        getLoginid: state => state.logininfo.id,
        getLoginpassword: state => state.logininfo.password,
        getL: state => state.logininfo,
    },
});