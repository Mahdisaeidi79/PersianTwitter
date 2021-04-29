import axios from 'axios';

export const getAxiosInstance = ()=> {
   return axios.create({
       baseURL:"http://localhost:3000",
       headers:{
           API_KEY:'grgrgu4h493923b'
       }
   })
}