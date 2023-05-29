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
        const data = { Authorization: store.getters["getAccessToken"]}
        config.headers.common["Authorization"] = data
        console.log("http.js" + {"Authorization" : store.getters["getAccessToken"]})
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