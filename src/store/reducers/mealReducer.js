import { updateOldObject } from "../../utils/utility";
import MEAL_ACTION_TYPES from "../actionTypes/mealActionTypes";

const initState = {
  meals: [],
  loadingMeals: false,
  addingMeal: false,
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

    default:
      return state;
  }
};

export default mealReducer;
