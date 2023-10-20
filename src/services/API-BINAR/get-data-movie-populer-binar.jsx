import { useQuery } from "@tanstack/react-query"
import { API_ENDPOINT } from "../../utils/api-endpoint"
import http2 from "../../utils/http2";

//unutk nge hit API
const fetchDataMoviePopulerBinar = async ({queryKey}) => {
    // const { data } = await http.get(`${API_ENDPOINT.NOW_POPULER}?page=${page ? page :1}`)
    // return data
    const [_key, _params] = queryKey;
    const { data } = await http2.get(_key, { params : _params})
    console.log(data , "data")
    return data
}


const useMovieDataPopulerQueryBinar = (options) => {
    // return useQuery(["userDataMoviePopuler", page], () => fetchDataMoviePopuler(page))
    return useQuery([API_ENDPOINT.NOW_POPULER_BINAR, options], fetchDataMoviePopulerBinar)
}

export {fetchDataMoviePopulerBinar, useMovieDataPopulerQueryBinar}