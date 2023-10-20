import { useMutation, useQuery } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2";

//unutk nge hit API
const RegisterUser = async (input) => {

    const { data } = await http2.post(API_ENDPOINT.Register, input).then((result) => {
       
        alert("Berhasil Regiter")
        window.location.href = "/Login";
        return data
    }).catch((err) => {
        alert(err.response.data.message);   
        throw err
    });
    
}


const UseCreateUser = () => {
    return useMutation(RegisterUser);
}

export {RegisterUser, UseCreateUser}