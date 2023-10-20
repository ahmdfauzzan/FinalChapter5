import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http2 from "../../utils/http2";
// import { Toaster } from "react-hot-toast";
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast

// Untuk menghit API
const fetchDataUser = async ({ queryKey }) => {
  const [_key] = queryKey;
  // return http2.get(_key)
  // .then(response => {
  //   if (response.status === 200) {
  //     const data = response.data;
  //     return data;
  //   } else if (response.status === 401) {
  //     // 
  //     alert("Anda harus login dlu");

  //     //  ke halaman login
  //     window.location.href = "/login";
  //   } else {
  
  //   }
  // })
  // .catch(err => {
 
  // });

  try {
    const { data } = await http2.get(_key);
    return data;
  } catch (err) {
    console.log(err, "asda");

    alert(err.response.data.message)
    if (err.response.status === 401) {
      window.location.href = "/Login";
    }
    // toast.error("Anda harus login dulu");
    //   window.location.href = "/Login";
    // setTimeout(() => {
    //   toast.error("Anda harus login dulu");
    //   window.location.href = "/Login";
    // }, 2000); 
  }
};

const useGetDataUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], fetchDataUser);
};

export { fetchDataUser, useGetDataUser };
