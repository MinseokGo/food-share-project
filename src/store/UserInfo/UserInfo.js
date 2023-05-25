import { createStore } from "vuex";
import axios from "axios";

// state, getters, mutations, actions, modules
export default createStore({
    // data
    state : {
        userinfo:{
            username: "준아",
            userid: "junna1999",
        }
    },
    actions: {
        fetchUserInfo(context) {
            return axios.get('http://localhost:3000/backend/api/auth/juna')
            .then((res) => {
                console.log(res);
                context.commit('setUser', res)
            });
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setUser(state, fetchUserInfo){
            state.userinfo = fetchUserInfo.data;
        }
    },
    getters : {
        username(state){
            return state.userinfo.username;
        },
        userid: state => {
            return state.userinfo.userid;
        }
    },
});