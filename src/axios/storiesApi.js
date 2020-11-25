import axiosClient from "./axiosClient";
const storiesApi = {
  getDefault: () => {
    const url = "/items/1";
    return axiosClient.get(url);
  },
  search: params => {
    const url = "/search";
    return axiosClient.get(url, { params });
  },
  getItem: id => {
    const url = `/items/${id}`;
    return axiosClient.get(url);
  }
};
export default storiesApi;
