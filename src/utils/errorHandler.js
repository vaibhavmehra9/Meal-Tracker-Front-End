import { APP_LOCAL_STORAGE } from "../constants/storageConstants";
import AppStorage from "./storage";
import showToast from "./toast";

const errorHanlder = (err) => {
  const { data, status } = (err && err.response && err.response) || {};
  if (status === 401) {
    AppStorage.remove(APP_LOCAL_STORAGE.TOKEN);
  } else {
    showToast(data.message, "error");
  }
};

export default errorHanlder;
