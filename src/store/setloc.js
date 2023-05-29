import http from "../http"
import { router } from '../router.js'

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        locinfo:{
            postcode: "",
            roadAddress: "",
            jibunAddress: "",
            detailAddress: "",
            extraAddress: "",
        },
    },
    actions: {
        async setLocInfo(context) {
            return http
              .post("http://localhost:3000/rest/api/", context.state.locinfo)
              .then(() => {
                console.log("보낸 요청 객체" + context.state.locinfo);
                
                router.push('/HomePageView');
              })
              .catch(err => {
                console.log(err);
              });
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setLocInfo(state, locinfo){
            state.locinfo = locinfo;
        }
    },
    getters : {
        getLocInfo: state => state.locinfo,
    },
});