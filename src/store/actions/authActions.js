import { AUTH_API } from "../../constants/apiConstants";
import Service from "../../service";
import AUTH_ACTION_TYPES from "../actionTypes/authActionTypes";
import AppStorage from "../../utils/storage";
import { APP_LOCAL_STORAGE } from "../../constants/storageConstants";

export const authStart = () => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_START,
  };
};

export const authSuccess = (userToken) => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_SUCCESS,
    payload: userToken,
  };
};

export const authFail = (error) => {
  return {
    type: AUTH_ACTION_TYPES.LOGIN_FAIL,
    payload: error,
  };
};

export const logInUser = (authData) => async (dispatch) => {
  try {
    dispatch(authStart());
    const response = await Service.postRequest(AUTH_API.LOGIN, authData);
    const { token } = response && response.data && response.data.data;
    AppStorage.set(APP_LOCAL_STORAGE.TOKEN, token);
    dispatch(authSuccess(token));
  } catch (err) {
    dispatch(authFail(err.message));
  }
};
