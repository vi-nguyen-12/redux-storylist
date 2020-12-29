import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://hn.algolia.com/api/v1/",
  headers: { "content-type": "application/json" },
  paramsSerializer: params => queryString.stringify(params)
});
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
