import React from "react";
import Button from "../Button";
import NavStyle from "./style";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";

const Nav = ({ auth: { user, token } }) => {
  return (
    <NavStyle>
      <div className="nav-container">
        <h3>Meal Tracker</h3>
        <div>
          {token ? (
            <Button text="Logout" />
          ) : (
            <Button text="Login In / Sign Up" />
          )}
        </div>
      </div>
    </NavStyle>
  );
};
const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...authActions })(Nav);
