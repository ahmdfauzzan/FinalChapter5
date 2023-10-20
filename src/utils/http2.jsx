import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

const http2 = axios.create({
    baseURL:  process.env.REACT_APP_SERVER_LOGIN ,
    timeout: 30000,
    headers: {
      accept: 'application/json',
    }
})


http2.interceptors.request.use(
(config) =>{
  config.headers = {
    ...config.headers,
    Authorization : `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : ""}`
  }
  return config;
}
)




export default http2;