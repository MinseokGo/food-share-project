import http from "../http"

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
        async fetchUserInfo(context) {
            return http.post('http://localhost:3000/rest/api/pay')
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
        // getUsername: state => state.userinfo.username,
        // getUserid: state => state.userinfo.userid,
    },
});