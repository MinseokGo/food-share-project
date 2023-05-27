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
        async login() {
            const data = {
              id: this.id,
              password: this.password,
            }
            axios
              .post("http://localhost:3000/rest/api/login", data)
              .then((res) => {
                // 백엔드에서 토큰 받아서 로컬에 저장 하여 세션 유지
                // const userData = res.data;
                // userData.user.token = userData.token;
                // console.log(res.data.token);
                console.log(res);
                this.$router.push('/HomePageView');
              })
              .catch(err => {
                // console.log(this.id + this.password);
                console.log(err);
              });
          },
    },
    // 값을 변경시킬 수 있는 메서드
    mutations: {
        setLogin(state, logininfo){
            state.logininfo = logininfo;
        }
    },
    getters : {
        getLoginid: state => state.logininfo.id,
        getLoginpassword: state => state.logininfo.password,
    },
});