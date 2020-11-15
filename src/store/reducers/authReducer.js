import { updateOldObject } from "../../utils/utility";
import AUTH_ACTION_TYPES from "../actionTypes/authActionTypes";

const initState = {
  token: null,
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

    default:
      return state;
  }
};

export default authReducer;
