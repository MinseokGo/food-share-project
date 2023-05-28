import axios from "axios";

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        viewpost:{
            title:"t",
            content:"c",
            menu:"m",
            time:"t",
            place:"p",
            people:"",
            sotre:"",
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
        printTest(){
            console.log("test");
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setViewPost(state, viewpost){
            state.viewpost = viewpost;
        }
    },
    getters : {
        getUsername: state => state.userinfo.username,
        getUserid: state => state.userinfo.userid,
    },
});