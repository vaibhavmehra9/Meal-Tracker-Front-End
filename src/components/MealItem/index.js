import React from "react";
import MealItemStyle from "./style";

const MealItem = ({ meal }) => {
  const { mealName, calorieCount } = meal;
  return (
    <MealItemStyle>
      <h2>{mealName}</h2>
      <p>Calorie - {calorieCount}</p>
    </MealItemStyle>
  );
};

export default MealItem;
