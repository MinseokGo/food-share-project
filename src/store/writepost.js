import http from "../http"
import { router } from '../router.js'

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        writepost:{
            title:"",
            content:"",
            menu:"",
            time:"",
            place:"",
            people:"",
        },
    },
    actions: {
        async writePost(context) {
            return http
            .post('http://localhost:3000/rest/api/post', context.state.writepost)
            .then(() => {
                router.push("/HomePageView")
            });
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        updateWritePost(state, writepost){
            state.writepost = writepost;
        }
    },
    getters : {
        // getUsername: state => state.userinfo.username,
        // getUserid: state => state.userinfo.userid,
    },
});