import React from "react";
import { connect } from "react-redux";
import * as mealActions from "../../store/actions/mealActions";
import { getTotalCalories, parseMeals } from "../../utils/utility";
import Loader from "../Loader";
import MealItem from "../MealItem";
import MealsStyle from "./style";
import moment from "moment";

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
        {Object.entries(parseMeals(meals)).map(([date, meal]) => {
          return (
            <div key={date} className="meal-list-grp">
              {date && <h3>{moment(date).format("Do MMMM YYYY")}</h3>}
              <span
                className="calorie-tag"
                style={
                  getTotalCalories(meal) < 2000
                    ? { background: "var(--green)" }
                    : {
                        background: "var(--red)",
                      }
                }
              >
                Total Calorie Intake - {getTotalCalories(meal)}
              </span>
              {meal.map((i) => (
                <MealItem
                  key={i._id}
                  data={i}
                  totalCalories={getTotalCalories(meal)}
                />
              ))}
            </div>
          );
        })}
      </div>
    </MealsStyle>
  );
};

const mapStateToProps = (state) => {
  return { meal: state.meal, auth: state.auth };
};

export default connect(mapStateToProps, { ...mealActions })(Meals);
