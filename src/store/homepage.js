import axios from "axios";
import { router } from '../router.js'

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        homeitem: [
            {
                title: "1",
                place: "2",
                time: "3",
                people: "4",
                img: "5",
                uid: "s",
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
        },
        async viewPost(context, uid) {
            router.push('/ViewPostView');
            return axios
            .post('http://localhost:3000/rest/api/view', uid)
            .then((res) => {
                console.log(res);
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