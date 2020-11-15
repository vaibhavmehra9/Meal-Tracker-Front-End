import React from "react";
import CommonPopUp from "../CommonPopUp";
import Input from "../Input";
import { useForm } from "react-hook-form";
import Button from "../Button";

const AddMealForm = () => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <CommonPopUp>
      <div>
        <h2>Add Meal</h2>
        <form>
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
            <Button text="Add"></Button>
          </div>
        </form>
      </div>
    </CommonPopUp>
  );
};

export default AddMealForm;
