import http from "../http"
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
        ],
    },
    actions: {
        toHome() {
            router.push('/HomePageView');
        },
        toChatList() {
            router.push('/ChatListView');
        },
        toUserInfo() {
            router.push('/UserInfoView');
        },
        toWritePost() {
            router.push('/WritePostView');
        },
        async fetchHomeItemList(context) {
            return http.get('http://localhost:3000/rest/api/home')
            .then((res) => {
                console.log(res.data)
                context.commit('setHomeItem', res.data);
            });
        },
        async viewPost(context, p) {
            console.log("포스트 아이디" + p)
            let data = {
                postId: p
            }
            return http.post('http://localhost:3000/rest/api/view', data)
            .then((res) => {
                context.commit("viewpost/setViewPost", res.data);
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
        getHomeItemList: state => state.homeitem,
    },
    modules: {
        viewpost,
    },
});