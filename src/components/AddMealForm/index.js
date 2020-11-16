import React from "react";
import CommonPopUp from "../CommonPopUp";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";
import * as mealActions from "../../store/actions/mealActions";
import * as popUpActions from "../../store/actions/popUpActions";
import { connect } from "react-redux";
import moment from "moment";

const AddMealForm = ({
  addMeal,
  auth: { user },
  meal: { addingMeal, editMode, mealData, updatingMeal },
  updateMeal,
  closePopUp,
  toggleEditMealForm,
}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    if (editMode) {
      updateMeal(user._id, mealData._id, values);
    } else {
      addMeal(values, user._id);
    }
  };

  const { mealName, calorieCount, date } = mealData;

  const onClickPopUpClose = () => {
    closePopUp();
    toggleEditMealForm(false, {});
  };

  return (
    <CommonPopUp onClickCloseHanlder={onClickPopUpClose}>
      <div>
        <h2>{editMode ? "Edit Meal" : "Add Meal"}</h2>
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
              defaultValue={mealName || ""}
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
              defaultValue={calorieCount || ""}
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
              defaultValue={date ? moment(date).format("YYYY-MM-DD") : ""}
            />
          </div>
          <div className="form-fld">
            <Button
              text="Save"
              type="submit"
              isLoading={addingMeal || updatingMeal}
            />
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
