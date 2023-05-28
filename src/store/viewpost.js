import axios from "axios";

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
            return axios.post('http://localhost:3000/rest/api/post')
            .then((res) => {
                console.log(res);
                context.commit('setUser', res.data);
            });
        },
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setViewPost(state, viewpost){
            console.log("setVP");
            state.viewpost = viewpost;
            console.log(state.viewpost);
        },
        // setTest(state, p){
        //     console.log("setT" + p);
        //     // state.viewpost.content = content;
        //     // console.log(state.viewpost.content);
        // }
    },
    getters : {
        getViewpost: state => state.viewpost,
    },
});