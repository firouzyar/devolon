import axios from "axios";

const path = "https://api.thecatapi.com/v1";

// (get,post,put,delete,all) methods from this object
let apiService = {
  get: (address, data, customHeader) => {
    return axios.get(path + address, data, apiService.headers(customHeader));
  },
  post: (address, data, customHeader) => {
    return axios.post(path + address, data, apiService.headers(customHeader));
  },
  put: (address, data, customHeader) => {
    return axios.put(path + address, data, apiService.headers(customHeader));
  },
  patch: (address, data, customHeader) => {
    return axios.patch(path + address, data, apiService.headers(customHeader));
  },
  delete: (address, customHeader) => {
    return axios.delete(path + address, apiService.headers(customHeader));
  },
  all: (arrMethodes) => {
    return axios.all(arrMethodes);
  },
  headers: (customHeader) => {
    let headers = {
      headers: {},
    };
    // custom header
    if (customHeader) {
      customHeader.map((item) => {
        return (headers.headers[Object.keys(item)[0]] = Object.values(item)[0]);
      });
    }
    return headers;
  },
};

export default apiService;
