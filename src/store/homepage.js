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
                postId: "",
                title: "",
                place: "",
                time: "",
                people: "",
                shopImg: "",
            },
        ]
    },
    actions: {
        async fetchHomeItemList(context) {
            return axios.post('http://localhost:3000/rest/api/home')
            .then((res) => {
                context.commit('setHomeItem', res.data);
            });
        },
        async viewPost(context, postId) {
            console.log(postId)
            // return axios
            // .get('http://localhost:3000/rest/api/view')
            // .then((res) => {
            //     console.log("백에서 보낸 viewpost" + res);
            //     router.push('/ViewPostView');
            // })
            // .catch(err => {
            //     console.log(err);
            // });
            const a = "SADsda"
            return axios
            .post('http://localhost:3000/rest/api/view', a)
            .then((res) => {
                console.log("백에서 보낸 viewpost" + res);
                //viewpost.mutations(res.data)
                //console.log("저장 되어있는 viewpost" + viewpost.state.viewpost);
                router.push('/ViewPostView');
            })
            .catch(err => {
                console.log(err);
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
        getPostId: state => state.postId,
        getHomeItemList: state => state.homeitem,
    },
    modules: {
        viewpost,
      },
});