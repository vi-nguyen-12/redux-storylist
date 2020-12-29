import axiosClient from "./axiosClient";
const storiesApi = {
  getDefault: () => {
    const url = "/search";
    return axiosClient.get(url,{params:{tags:'story'}}); //same to page:0
  },
  get:params=>{
    const url = "/search";
    return axiosClient.get(url,{params});
  }
};
export default storiesApi;
