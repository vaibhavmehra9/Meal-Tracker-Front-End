import React from "react";
import { connect } from "react-redux";
import * as mealActions from "../../store/actions/mealActions";
import Loader from "../Loader";
import MealItem from "../MealItem";
import MealsStyle from "./style";

const Meals = ({
  meal: { meals, loadingMeals },
  fetchMeals,
  auth: { user },
}) => {
  React.useEffect(() => {
    if (user && user._id) {
      fetchMeals(user._id);
    }
  }, [fetchMeals, user]);

  if (loadingMeals) {
    return <Loader fullPage />;
  }

  if (!loadingMeals && meals.length === 0) return null;

  return (
    <MealsStyle>
      <h2>Your Meals</h2>
      <div className="meals-list">
        {meals.map((meal) => (
          <MealItem key={meal._id} data={meal} />
        ))}
      </div>
    </MealsStyle>
  );
};

const mapStateToProps = (state) => {
  return { meal: state.meal, auth: state.auth };
};

export default connect(mapStateToProps, { ...mealActions })(Meals);
