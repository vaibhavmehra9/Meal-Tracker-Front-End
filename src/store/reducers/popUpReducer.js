import { updateOldObject } from "../../utils/utility";
import POP_UP_ACTION_TYPES from "../actionTypes/popUpActionTypes";

const initState = {
  open: true,
};

const popUpReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case POP_UP_ACTION_TYPES.OPEN_POP_UP:
      return updateOldObject(state, { open: true });

    case POP_UP_ACTION_TYPES.CLOSE_POP_UP:
      return updateOldObject(state, { open: false });

    default:
      return state;
  }
};

export default popUpReducer;
