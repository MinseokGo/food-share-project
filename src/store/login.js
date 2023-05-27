import axios from "axios";

// state, getters, mutations, actions, modules
export default ({
    // Evince this .js file is module
    namespaced: true,
    
    // data
    state : { 
        logininfo:{
            id: "",
            password: "",
        },
    },
    actions: {
        async login(context) {
            // context.commit('updateLoginInfo')

            const data = context.state.logininfo;
            //const data = {id:"d",password:"ssd"};
            console.log(data);

            return axios
              .post("http://localhost:3000/rest/api/login", data)
              .then((res) => {
                console.log(res);
                //this.$router.push('/HomePageView');
              })
              .catch(err => {
                console.log(err);
              });
          },
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        updateLoginInfo(state, logininfo){
            state.logininfo = logininfo;
        }
    },
    getters : {
        getLoginid: state => state.logininfo.id,
        getLoginpassword: state => state.logininfo.password,
        getL: state => state.logininfo,
    },
});