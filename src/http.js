import axios from "axios"
import store from "./store/login.js"
// import jwt from "./common/jwt"

const http = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "content-type": "application/json"},
})

http.interceptors.request.use(
  config => {
    const isAuthenticated = store.getters["isAuthenticated"]
    console.log("is: " + store.getters["isAuthenticated"])
    if (isAuthenticated) {
        console.log("get: " + store.getters["getAccessToken"])
        //console.log("http.js:" + store.getters["getAccessToken"])
        config.headers["Authorization"] = store.getters["getAccessToken"]
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