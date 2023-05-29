import http from "../http"


// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        userinfo:{
            nickname: "",
            userId: "",
            postTitle: [
                {
                  title: "",
                },
            ],
        },
    },
    actions: {
        async fetchUserInfo(context) {
            return http.get('http://localhost:3000/rest/api/user')
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
        getUserObj: state => state.userinfo,
    },
});