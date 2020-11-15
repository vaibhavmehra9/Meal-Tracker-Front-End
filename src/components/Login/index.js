import React from "react";
import Button from "../Button";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";
import { Link } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/routeConstants";

const Login = ({ logInUser }) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    logInUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-fld">
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
      <div className="form-fld">
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
      <div className="form-fld">
        <Button text="Log In" type="submit" />
      </div>
      <div className="form-fld">
        New user ?{" "}
        <Link to={ROUTE_CONSTANTS.SIGN_UP} className="link">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...authActions })(Login);
