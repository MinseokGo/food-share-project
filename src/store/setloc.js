import axios from "axios";
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
            return axios
              .post("http://localhost:3000/rest/api/login", context.state.locinfo)
              .then((res) => {
                if(res.data){
                    //context.commit('setResult',true)
                    router.push('/HomePageView');
                    console.log("위치 설정 성공입니다.");
                }else {
                    //context.commit('setResult',false)
                    console.log("위치 설정 실패입니다.");
                }
                console.log(context.state.locinfo);
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