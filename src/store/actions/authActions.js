import { AUTH_API } from "../../constants/apiConstants";
import Service from "../../service";
import AUTH_ACTION_TYPES from "../actionTypes/authActionTypes";
import AppStorage from "../../utils/storage";
import { APP_LOCAL_STORAGE } from "../../constants/storageConstants";
import ROUTE_CONSTANTS from "../../constants/routeConstants";

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

export const loadingUser = (value) => {
  return {
    type: AUTH_ACTION_TYPES.LOADING_USER,
    payload: value,
  };
};

export const setUser = (userData) => {
  return {
    type: AUTH_ACTION_TYPES.SET_USER,
    payload: userData,
  };
};

export const signUpUserLoading = (value) => {
  return {
    type: AUTH_ACTION_TYPES.SIGN_UP_USER_LOADING,
    payload: value,
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

export const getUserDetails = () => async (dispatch) => {
  try {
    dispatch(loadingUser(true));
    const response = await Service.getRequest(AUTH_API.WHO_AM_I, {
      headers: {
        Authorization: `Bearer ${AppStorage.get(APP_LOCAL_STORAGE.TOKEN)}`,
      },
    });
    const { user } = response && response.data && response.data.data;
    dispatch(setUser(user));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(loadingUser(false));
  }
};

export const signUpUser = (userData, history) => async (dispatch) => {
  try {
    dispatch(signUpUserLoading(true));
    await Service.postRequest(AUTH_API.SIGN_UP, userData);
    history.push(ROUTE_CONSTANTS.LOGIN);
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(signUpUserLoading(false));
  }
};
