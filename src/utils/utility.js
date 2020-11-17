export const updateOldObject = (oldObj, newUpdateVal) => {
  return {
    ...oldObj,
    ...newUpdateVal,
  };
};

export const getTotalCalories = (meals = []) => {
  let count = 0;
  meals.forEach((meal) => {
    count += meal.calorieCount;
  });
  return count;
};

export const parseMeals = (meals) => {
  let mealsMap = {};
  meals.forEach((meal) => {
    if (mealsMap[meal.date]) {
      mealsMap[meal.date] = [...mealsMap[meal.date], meal];
    } else {
      mealsMap[meal.date] = [meal];
    }
  });
  return mealsMap;
};
