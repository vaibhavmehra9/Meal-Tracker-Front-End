import React from "react";
import MealItemStyle from "./style";
import { MdDelete } from "react-icons/md";
import * as mealActions from "../../store/actions/mealActions";
import { connect } from "react-redux";

const MealItem = ({ data, removeMeal, auth: { user } }) => {
  const { mealName, calorieCount } = data;
  return (
    <MealItemStyle>
      <span
        className="calorie-tag"
        style={calorieCount >= 2000 ? { background: "var(--green)" } : {}}
      >
        Calorie - {calorieCount}
      </span>
      <div className="meal-item">
        <h3>{mealName}</h3>
        <div>
          <MdDelete
            style={{ fontSize: "20px", color: "var(--red)", cursor: "pointer" }}
            onClick={() => removeMeal(user._id, data._id)}
          />
        </div>
      </div>
    </MealItemStyle>
  );
};

const mapStateToProps = (state) => {
  return { meal: state.meal, auth: state.auth };
};

export default connect(mapStateToProps, { ...mealActions })(MealItem);
