import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: "http://hn.algolia.com/api/v1/",
  headers: { "content-type": "application/json" },
  paramsSerializer: params => queryString.stringify(params)
});
axiosClient.interceptors.response.use(
  res => {
    if (res && res.data) return res.data;
    return res;
  },
  err => {
    console.log(err.response);
    return Promise.reject(err);
  }
);
export default axiosClient;
