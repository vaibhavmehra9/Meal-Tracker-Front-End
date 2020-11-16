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
