import axios from "axios";
//import { router } from '../router.js'

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        homeitem: [
            {
                title: "",
                place: "",
                time: "",
                people: "",
                img: ""
            },
            // {
            //     title: "title",
            //     place: "place",
            //     time: "time",
            //     people: "peoples",
            //     img: ""
            // }
        ]
    },
    actions: {
        async fetchHomeItemList(context) {
            return axios.get('http://localhost:3000/rest/api/home')
            .then((res) => {
                console.log(res);
                context.commit('setHomeItem', res.data);
            });
        }
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setHomeItem(state, homeitem){
            state.homeitem = homeitem;
        }
    },
    getters : {
        getHomeItemList: state => state.homeitem,
    },
});