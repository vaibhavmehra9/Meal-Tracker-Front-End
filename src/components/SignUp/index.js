import React from "react";

const SignUp = () => {
  return (
    <form>
      <div className="auth-form-fld">
        <Input type="email" placeholder="First name" />
      </div>
      <div className="auth-form-fld">
        <Input type="email" placeholder="Last name" />
      </div>
      <div className="auth-form-fld">
        <Input type="email" placeholder="Email" />
      </div>
      <div className="auth-form-fld">
        <Input type="password" placeholder="Password" />
      </div>
      <Button text="Sign Up" />
    </form>
  );
};

export default SignUp;
