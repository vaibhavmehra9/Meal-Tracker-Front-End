import React from "react";
import Button from "../Button";
import NavStyle from "./style";

const Nav = () => {
  return (
    <NavStyle>
      <div className="nav-container">
        <h4>Meal Tracker</h4>
        <div>
          <Button text="Login In / Sign Up"></Button>
        </div>
      </div>
    </NavStyle>
  );
};

export default Nav;
