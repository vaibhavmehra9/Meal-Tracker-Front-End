import POP_UP_ACTION_TYPES from "../actionTypes/popUpActionTypes";

export const openPopUp = () => {
  return { type: POP_UP_ACTION_TYPES.OPEN_POP_UP };
};

export const closePopUp = () => {
  return { type: POP_UP_ACTION_TYPES.CLOSE_POP_UP };
};
