import axios from "axios";

const api = axios.create({
    baseURL:"https://api.reddit.com/r/pics"
})





export const getAlldata = async(endpoint:string)=>{
    const result = await api.get(`/${endpoint}`)
    return result
}
