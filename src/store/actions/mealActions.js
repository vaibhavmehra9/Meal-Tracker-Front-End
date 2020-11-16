import MEAL_ACTION_TYPES from "../actionTypes/mealActionTypes";
import Service from "../../service";
import { USERS_API } from "../../constants/apiConstants";
import { closePopUp } from "./popUpActions";
import showToast from "../../utils/toast";

// action creators

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

export const deletingMeal = (value) => {
  return { type: MEAL_ACTION_TYPES.DELETING_MEALS, payload: value };
};

export const deleteMeal = (mealId) => {
  return { type: MEAL_ACTION_TYPES.DELETE_MEAL, payload: mealId };
};

export const toggleEditMealForm = (value, mealData = {}) => {
  return {
    type: MEAL_ACTION_TYPES.TOGGLE_EDIT_MEAL,
    payload: { editMode: value, mealData },
  };
};

export const updatingMeal = (value) => {
  return { type: MEAL_ACTION_TYPES.UPDATING_MEAL, payload: value };
};

export const setUpdatedMeal = (meal) => {
  return { type: MEAL_ACTION_TYPES.SET_UPDATED_MEAL, payload: meal };
};

// async functions for api calls

export const fetchMeals = (userId) => async (dispatch) => {
  try {
    dispatch(loadingMeals(true));
    const response = await Service.getRequest(
      `${USERS_API.USER}/${userId}/meals`
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
      mealData
    );
    const { meal } = response && response.data && response.data.data;
    dispatch(setNewMeal(meal));
    showToast("Great! you have added a meal for your day", "success");
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(addingMeals(false));
    dispatch(toggleEditMealForm(false, {}));
    dispatch(closePopUp());
  }
};

export const removeMeal = (userId, mealId) => async (dispatch) => {
  try {
    dispatch(deletingMeal(true));
    await Service.deleteRequest(`${USERS_API.USER}/${userId}/meals/${mealId}`);
    dispatch(deleteMeal(mealId));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(deletingMeal(false));
  }
};

export const updateMeal = (userId, mealId, mealData) => async (dispatch) => {
  try {
    dispatch(updatingMeal(true));
    const response = await Service.putRequest(
      `${USERS_API.USER}/${userId}/meals/${mealId}`,
      mealData
    );
    const { meal } = response && response.data && response.data.data;
    dispatch(setUpdatedMeal(meal));
    showToast("You have updated your meal", "success");
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(updatingMeal(false));
    dispatch(toggleEditMealForm(false, {}));
    dispatch(closePopUp());
  }
};
