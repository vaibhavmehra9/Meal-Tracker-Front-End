import React from "react";
import MealItemStyle from "./style";
import { MdDelete } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import * as mealActions from "../../store/actions/mealActions";
import { connect } from "react-redux";
import * as popUpActions from "../../store/actions/popUpActions";
import Loader from "../Loader";

const MealItem = ({
  data,
  removeMeal,
  openPopUp,
  toggleEditMealForm,
  auth: { user },
  meal: { deletingMeal },
}) => {
  const { mealName, calorieCount } = data;

  const onEditMealItemClickHandler = () => {
    openPopUp();
    toggleEditMealForm(true, data);
  };

  return (
    <MealItemStyle>
      <div className="meal-item">
        <div>
          <h3>{mealName}</h3>
          <p>Meal Calorie - {calorieCount}</p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <BiEdit
            style={{
              fontSize: "25px",
              color: "var(--green)",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onClick={onEditMealItemClickHandler}
          />
          {deletingMeal ? (
            <Loader color="var(--blue)" size={15} />
          ) : (
            <MdDelete
              style={{
                fontSize: "25px",
                color: "var(--red)",
                cursor: "pointer",
              }}
              onClick={() => removeMeal(user._id, data._id)}
            />
          )}
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
