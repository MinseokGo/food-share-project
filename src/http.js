import axios from "axios"
import login from "./store/login.js"

const http = axios.create({
    baseURL: "http://localhost:3000",
    headers: { "Content-Type" : "application/json",
        Authorization: "",
},
})

http.interceptors.request.use(
  config => {
    const isAuthenticated = login.state.isAuthenticated
    if (isAuthenticated) {
        config.headers.Authorization = login.state.token.accessToken
    }
    return config
  },
  error => {
    // Do something with request error
        Promise.reject(error)
  }
)
// http.defaults.headers.post["Content-Type"] = "application/json"

export default http