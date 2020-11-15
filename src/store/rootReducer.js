import { combineReducers } from "redux";
import authReducer from "./reducers/authReducer";
import popUpReducer from "./reducers/popUpReducer";

export default combineReducers({
  auth: authReducer,
  popup: popUpReducer,
});
