import React from "react";
import AuthFormStyle from "./style";

const AuthForm = ({ title = "Login", authMode = "login" }) => {
  return (
    <AuthFormStyle>
      <h3>{title}</h3>
    </AuthFormStyle>
  );
};

const Login = () => {};

const SignUp = () => {};

export default AuthForm;
