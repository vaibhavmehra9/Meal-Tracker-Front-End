import MEAL_ACTION_TYPES from "../actionTypes/mealActionTypes";
import Service from "../../service";
import { USERS_API } from "../../constants/apiConstants";
import AppStorage from "../../utils/storage";
import { APP_LOCAL_STORAGE } from "../../constants/storageConstants";

export const loadingMeals = (value) => {
  return { type: MEAL_ACTION_TYPES.LOADING_MEALS, payload: value };
};

export const setMeals = (meals) => {
  return { type: MEAL_ACTION_TYPES.SET_MEALS, payload: meals };
};

export const fetchMeals = (userId) => async (dispatch) => {
  try {
    dispatch(loadingMeals(true));
    const response = await Service.getRequest(
      `${USERS_API.USER}/${userId}/meals`,
      {
        headers: {
          Authorization: `Bearer ${AppStorage.get(APP_LOCAL_STORAGE.TOKEN)}`,
        },
      }
    );
    const { meals } = response && response.data && response.data.data;
    dispatch(setMeals(meals));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(loadingMeals(false));
  }
};
