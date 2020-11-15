import { updateOldObject } from "../../utils/utility";
import AUTH_ACTION_TYPES from "../actionTypes/authActionTypes";
import AppStorage from "../../utils/storage";
import { APP_LOCAL_STORAGE } from "../../constants/storageConstants";

const initState = {
  token: AppStorage.get(APP_LOCAL_STORAGE.TOKEN)
    ? AppStorage.get(APP_LOCAL_STORAGE.TOKEN)
    : null,
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AUTH_ACTION_TYPES.LOGIN_START:
      return updateOldObject(state, { error: null, loading: true });

    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return updateOldObject(state, {
        error: null,
        loading: false,
        token: payload,
      });

    case AUTH_ACTION_TYPES.LOGIN_FAIL:
      return updateOldObject(state, {
        error: payload,
        loading: false,
        token: null,
      });

    case AUTH_ACTION_TYPES.LOADING_USER:
      return updateOldObject(state, {
        loading: payload,
      });

    case AUTH_ACTION_TYPES.SET_USER:
      return updateOldObject(state, {
        user: payload,
      });

    default:
      return state;
  }
};

export default authReducer;
