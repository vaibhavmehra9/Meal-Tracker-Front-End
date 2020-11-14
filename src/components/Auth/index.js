import React from "react";
import Login from "../Login";
import AuthFormStyle from "./style";

const AuthForm = ({ title = "Login", authMode = "login" }) => {
  return (
    <AuthFormStyle>
      <h3 className="auth-form-title">{title}</h3>
      <Login />
    </AuthFormStyle>
  );
};

export default AuthForm;
