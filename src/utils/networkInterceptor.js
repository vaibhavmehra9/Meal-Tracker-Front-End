import axios from "axios";
import { APP_LOCAL_STORAGE } from "../constants/storageConstants";
import errorHanlder from "./errorHandler";
import AppStorage from "./storage";

const netWorkInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      const url = config.url;
      config.url = `${process.env.REACT_APP_BASE_URL}${url}`;

      if (AppStorage.get(APP_LOCAL_STORAGE.TOKEN)) {
        config.headers = {
          Authorization: `Bearer ${AppStorage.get(APP_LOCAL_STORAGE.TOKEN)}`,
        };
      }

      return config;
    },
    function (err) {
      return Promise.reject(err);
    }
  );

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (err) {
      errorHanlder(err);
      return Promise.reject(err);
    }
  );
};

export default netWorkInterceptor;
