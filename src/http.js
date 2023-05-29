import axios from "axios"
import login from "./store/login.js"

const http = axios.create({
    baseURL: "http://localhost:3000",
    headers: { Authorization: "",
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

export default http