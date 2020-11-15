import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/routeConstants";

const SignUp = ({ logInUser }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    logInUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form-fld">
        <Input
          type="text"
          placeholder="First Name"
          refProp={register({
            required: {
              value: true,
              message: "Required",
            },
          })}
          name="firstName"
          error={errors && errors.firstName && errors.firstName.message}
        />
      </div>
      <div className="auth-form-fld">
        <Input
          type="text"
          placeholder="Last Name"
          refProp={register({
            required: {
              value: true,
              message: "Required",
            },
          })}
          name="lastName"
          error={errors && errors.lastName && errors.lastName.message}
        />
      </div>
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
      <div className="auth-form-fld">
        <Button text="Log In" type="submit" />
      </div>
      <div>
        Already have an account ?{" "}
        <Link to={ROUTE_CONSTANTS.LOGIN} className="link">
          Log In
        </Link>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...authActions })(SignUp);
