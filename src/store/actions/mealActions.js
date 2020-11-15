import MEAL_ACTION_TYPES from "../actionTypes/mealActionTypes";
import Service from "../../service";
import { USERS_API } from "../../constants/apiConstants";
import AppStorage from "../../utils/storage";
import { APP_LOCAL_STORAGE } from "../../constants/storageConstants";
import { closePopUp } from "./popUpActions";

export const loadingMeals = (value) => {
  return { type: MEAL_ACTION_TYPES.LOADING_MEALS, payload: value };
};

export const setMeals = (meals) => {
  return { type: MEAL_ACTION_TYPES.SET_MEALS, payload: meals };
};

export const addingMeals = (value) => {
  return { type: MEAL_ACTION_TYPES.ADDING_NEW_MEAL, payload: value };
};

export const setNewMeal = (meal) => {
  return { type: MEAL_ACTION_TYPES.SET_NEW_MEAL, payload: meal };
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

export const addMeal = (mealData, userId) => async (dispatch) => {
  try {
    dispatch(addingMeals(true));
    const response = await Service.postRequest(
      `${USERS_API.USER}/${userId}/meals`,
      mealData,
      {
        headers: {
          Authorization: `Bearer ${AppStorage.get(APP_LOCAL_STORAGE.TOKEN)}`,
        },
      }
    );
    const { meal } = response && response.data && response.data.data;
    dispatch(setNewMeal(meal));
    dispatch(closePopUp());
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(addingMeals(false));
  }
};
