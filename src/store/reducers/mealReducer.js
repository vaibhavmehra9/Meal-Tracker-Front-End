import { updateOldObject } from "../../utils/utility";
import MEAL_ACTION_TYPES from "../actionTypes/mealActionTypes";

const initState = {
  meals: [],
  loadingMeals: false,
  addingMeal: false,
  deletingMeal: false,
};

const mealReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MEAL_ACTION_TYPES.LOADING_MEALS:
      return updateOldObject(state, { loadingMeals: payload });

    case MEAL_ACTION_TYPES.SET_MEALS:
      return updateOldObject(state, { meals: [...payload] });

    case MEAL_ACTION_TYPES.ADDING_NEW_MEAL:
      return updateOldObject(state, { addingMeal: payload });

    case MEAL_ACTION_TYPES.SET_NEW_MEAL:
      return updateOldObject(state, {
        meals: [payload, ...state.meals],
      });

    case MEAL_ACTION_TYPES.DELETING_MEALS:
      return updateOldObject(state, {
        deletingMeal: payload,
      });

    case MEAL_ACTION_TYPES.DELETE_MEAL:
      return updateOldObject(state, {
        meals: state.meals.filter((item) => item._id !== payload),
      });

    default:
      return state;
  }
};

export default mealReducer;
