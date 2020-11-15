import React from "react";
import MealItemStyle from "./style";

const MealItem = ({ meal }) => {
  const { mealName, calorieCount } = meal;
  return (
    <MealItemStyle>
      <h3>{mealName}</h3>
      <span
        className="calorie-tag"
        style={calorieCount >= 2000 ? { background: "var(--green)" } : {}}
      >
        Calorie - {calorieCount}
      </span>
    </MealItemStyle>
  );
};

export default MealItem;
