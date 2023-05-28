import axios from "axios";
import { router } from '../router.js'

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        logininfo:{
            id: "",
            password: "",
            //loginresult: false,
        },
    },
    actions: {
        async login(context) {
            return axios
              .post("http://localhost:3000/rest/api/login", context.state.logininfo)
              .then((res) => {
                if(res.data){
                    //context.commit('setResult',true)
                    router.push('/HomePageView');
                    console.log("로그인 성공입니다.");
                }else {
                    //context.commit('setResult',false)
                    console.log("로그인 실패입니다.");
                }
                //console.log(context.state.logininfo.loginresult);
              })
              .catch(err => {
                console.log(err);
              });
          },
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        updateLoginInfo(state, logininfo){
            state.logininfo = logininfo;
        },
        // setResult(state, loginresult){
        //     state.logininfo.loginresult = loginresult
        // }
    },
    getters : {
        getLoginid: state => state.logininfo.id,
        getLoginpassword: state => state.logininfo.password,
        getL: state => state.logininfo,
    },
});