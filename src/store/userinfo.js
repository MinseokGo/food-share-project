import axios from "axios";

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        userinfo:{
            username: "준아",
            userid: "junna1999",
        },
    },
    actions: {
        async fetchUserInfo(context) {
            return axios.get('http://localhost:3000/backend/api/auth/juna')
            .then((res) => {
                console.log(res);
                context.commit('setUser', res.data);
            });
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setUser(state, userinfo){
            state.userinfo = userinfo;
        }
    },
    getters : {
        getUsername: state => state.userinfo.username,
        getUserid: state => state.userinfo.userid,
    },
});