import Axios from "axios";

class Service {
  getRequest(url, config = {}) {
    return Axios.get(url, config);
  }
  postRequest(url, data, config = {}) {
    return Axios.post(url, data, config);
  }
  putRequest(url, data, config = {}) {
    return Axios.put(url, data, config);
  }
  patchRequest(url, data, config = {}) {
    return Axios.patch(url, data, config);
  }
  deleteRequest(url) {
    return Axios.delete(url);
  }
}

export default new Service();
