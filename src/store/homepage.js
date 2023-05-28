import axios from "axios";
import { router } from '../router.js'
import viewpost from './viewpost'

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        homeitem: [
            {
                uid: "",
                title: "",
                place: "",
                time: "",
                people: "",
                img: "",
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
                context.commit('setHomeItem', res.data);
                console.log("home받을때 uid 있니?" + res.data);
            });
        },
        async viewPost() {
            const uid = "go"
            return axios
            .post('http://localhost:3000/rest/api/view', uid)
            .then((res) => {
                console.log(res);
                console.log("viewPOst:" );
                // viewpost.mutations.setViewPost({
                //     title:"바",
                //     content:"뀐",
                //     menu:"데",
                //     time:"t",
                //     place:"p",
                //     people:"",
                //     sotre:"",
                //     tip:""
                // },);
                // console.log(viewpost.state.viewpost);
                router.push('/ViewPostView');
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
    modules: {
        viewpost,
      },
});