import React from "react";
import Login from "../Login";
import AuthFormStyle from "./style";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/routeConstants";

const AuthForm = ({ title = "Login", authMode = "login", auth: { token } }) => {
  if (token) {
    return <Redirect to={ROUTE_CONSTANTS.HOME} />;
  }
  return (
    <AuthFormStyle>
      <h3 className="auth-form-title">{title}</h3>
      <Login />
    </AuthFormStyle>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(AuthForm);
