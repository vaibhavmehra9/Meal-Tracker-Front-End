import React from "react";
import Button from "../Button";
import NavStyle from "./style";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";

const Nav = ({ auth: { token, userLogOutLoading }, logOutUser }) => {
  return (
    <NavStyle>
      <div className="nav-container">
        <h3>Meal Tracker</h3>
        <div>
          {token && (
            <Button
              text="Logout"
              onClickHandler={() => logOutUser()}
              isLoading={userLogOutLoading}
            />
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
