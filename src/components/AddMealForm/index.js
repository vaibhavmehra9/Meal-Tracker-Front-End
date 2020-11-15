import React from "react";
import CommonPopUp from "../CommonPopUp";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";
import * as mealActions from "../../store/actions/mealActions";
import * as popUpActions from "../../store/actions/popUpActions";
import { connect } from "react-redux";

const AddMealForm = ({
  addMeal,
  auth: { user },
  meal: { newMealAdded },
  closePopUp,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    addMeal(values, user._id);
  };

  if (newMealAdded) {
    closePopUp();
  }

  return (
    <CommonPopUp>
      <div>
        <h2>Add Meal</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-fld">
            <Input
              type="text"
              placeholder="Meal Name"
              refProp={register({
                required: {
                  value: true,
                  message: "Required",
                },
              })}
              name="mealName"
              error={errors && errors.mealName && errors.mealName.message}
            />
          </div>
          <div className="form-fld">
            <Input
              type="number"
              placeholder="Meal Calorie"
              refProp={register({
                required: {
                  value: true,
                  message: "Required",
                },
              })}
              name="calorieCount"
              error={
                errors && errors.calorieCount && errors.calorieCount.message
              }
            />
          </div>
          <div className="form-fld">
            <Input
              type="date"
              refProp={register({
                required: {
                  value: true,
                  message: "Required",
                },
              })}
              name="date"
              error={errors && errors.date && errors.date.message}
            />
          </div>
          <div className="form-fld">
            <Button text="Add" type="submit" />
          </div>
        </form>
      </div>
    </CommonPopUp>
  );
};

const mapStateToProps = (state) => {
  return { meal: state.meal, auth: state.auth };
};

export default connect(mapStateToProps, { ...mealActions, ...popUpActions })(
  AddMealForm
);
