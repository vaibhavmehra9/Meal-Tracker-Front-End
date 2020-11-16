import React from "react";
import MealItemStyle from "./style";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import * as mealActions from "../../store/actions/mealActions";
import { connect } from "react-redux";
import * as popUpActions from "../../store/actions/popUpActions";

const MealItem = ({
  data,
  removeMeal,
  openPopUp,
  toggleEditMealForm,
  auth: { user },
}) => {
  const { mealName, calorieCount } = data;

  const onEditMealItemClickHandler = () => {
    openPopUp();
    toggleEditMealForm(true, data);
  };

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
          <BiEdit
            style={{
              fontSize: "25px",
              color: "var(--green)",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={onEditMealItemClickHandler}
          />
          <MdDelete
            style={{ fontSize: "25px", color: "var(--red)", cursor: "pointer" }}
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

export default connect(mapStateToProps, { ...mealActions, ...popUpActions })(
  MealItem
);
