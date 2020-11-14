import React from "react";
import Button from "../Button";
import Input from "../Input";

const Login = () => {
  return (
    <form>
      <div className="auth-form-fld">
        <Input type="email" placeholder="Email" />
      </div>
      <div className="auth-form-fld">
        <Input type="password" placeholder="Password" />
      </div>
      <Button text="Log In" />
    </form>
  );
};

export default Login;
