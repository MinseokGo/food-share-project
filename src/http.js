import axios from "axios"
import login from "./store/login.js"
// import jwt from "./common/jwt"

const http = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "content-type": "application/json",},
})

http.interceptors.request.use(
  config => {
    const isAuthenticated = login.state.isAuthenticated

    // console.log("is: " + store.getters["isAuthenticated"])
    if (isAuthenticated) {
        console.log("get: " + login.state.isAuthenticated + "Sadsda" + login.state.token.accessToken)
        //console.log("http.js:" + store.getters["getAccessToken"])
        config.headers["Authorization"] = login.state.token.accessToken
        //config.headers.Authorization = store.getters["getAccessToken"]
    }
    return config
  },
  error => {
    // Do something with request error
        Promise.reject(error)
  }
)
http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded"

export default http