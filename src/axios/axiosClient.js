import axios from "axios";
import queryString from "query-string";
import firebase from 'firebase';


const axiosClient = axios.create({
  baseURL: "https://hn.algolia.com/api/v1/",
  headers: { "content-type": "application/json" },
  paramsSerializer: params => queryString.stringify(params)
});

// axiosClient.interceptors.request.use(async (config)=>{
//   // Handle token here...
//   const currentUser=firebase.auth().currentUser;
//   if(currentUser){
//     const token= await currentUser.getIdToken();
//     config.headers.Authorization=`Bearer ${token}`;
//   }
//   return config
// })

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
    return response;
  },
  err => {
    console.log(err.response);
    return Promise.reject(err);
  }
);
export default axiosClient;
