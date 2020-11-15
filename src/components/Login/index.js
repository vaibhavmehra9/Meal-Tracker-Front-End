import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";

const Login = ({ logInUser }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    logInUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form-fld">
        <Input
          type="email"
          placeholder="Email"
          refProp={register({
            required: {
              value: true,
              message: "Required",
            },
            pattern: /^\S+@\S+$/i,
          })}
          name="email"
          error={errors && errors.email && errors.email.message}
        />
      </div>
      <div className="auth-form-fld">
        <Input
          type="password"
          placeholder="Password"
          refProp={register({
            required: {
              value: true,
              message: "Required",
            },
          })}
          name="password"
          error={errors && errors.password && errors.password.message}
        />
      </div>
      <Button text="Log In" type="submit" />
    </form>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...authActions })(Login);
