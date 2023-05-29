import http from "../http"


// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        viewpost:{
            title:"",
            content:"",
            menu:"",
            time:"",
            place:"",
            people:"",
            store:"",
            tip:""
        },
    },
    actions: {
        async fetchUserInfo(context) {
            return http.post('http://localhost:3000/rest/api/post')
            .then((res) => {
                console.log(res);
                context.commit('setUser', res.data);
            });
        },
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setViewPost(state, viewpost){
            state.viewpost = viewpost;
        },
    },
    getters : {
        getTest: state => state.viewpost
    },
});