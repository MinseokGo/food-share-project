import axios from "axios"
import store from "./store/login.js"

const http = axios.create({
  baseURL: "http://localhost:3000",
  headers: { "content-type": "application/json" },
})

http.interceptors.request.use(
  config => {
    const isAuthenticated = store.getters["isAuthenticated"]
    if (isAuthenticated) {
        //console.log("http.js:" + store.getters["getAccessToken"])
        config.headers["Authorization"] = store.state.token.accessToken
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