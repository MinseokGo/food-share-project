import axios from "axios";

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        chatlist: [{
            title: "dsa",
            place: "dsa",
            time: "d",
            people: "d",
            }
        ]
    },
    actions: {
        async fetchChatList(context) {
            return axios.get('http://localhost:3000/rest/api/home')
            .then((res) => {
                console.log(res);
                context.commit('setUser', res.data);
            });
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setUser(state, chatlist){
            state.chatlist = chatlist;
        }
    },
    getters : {
        getTitle: state => state.chatlist.title,
        getLmsg: state => state.chatlist.lastmsg,
        getPlace: state => state.chatlist.place,
    },
});