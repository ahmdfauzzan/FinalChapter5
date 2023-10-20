import { useMutation, useQuery } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { toast } from 'react-hot-toast'; 
//unutk nge hit API
const LoginUser = async (input) => {

  return await http2.post(API_ENDPOINT.LOGIN, input).then((result) => {
   
    console.log(result, "tesssu") 
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token)

     
      window.location.href = "/dashboard";
      //  toast.success("Login Sukses")
      return result 
      
    }).catch((err) => {
         console.log(err, "ini eror")
        //  alert(err.response.data.message, "ini eror")
         toast.error(err.response.data.message);

    });
   
}


const UseLoginUser = () => {
    return useMutation(LoginUser);
}

export {LoginUser, UseLoginUser}