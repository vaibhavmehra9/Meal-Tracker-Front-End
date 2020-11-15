import React from "react";
import UserInfoStyle from "./style";
import { connect } from "react-redux";
import Button from "../Button";
import * as popUpActions from "../../store/actions/popUpActions";

const UserInfo = ({ auth: { user }, openPopUp }) => {
  const { firstName, lastName } = user || {};
  if (!user) {
    return null;
  }
  return (
    <UserInfoStyle>
      <h1>
        Hi {firstName} {lastName}
      </h1>
      <div>
        <Button text="Add Meal" onClickHandler={openPopUp} />
      </div>
    </UserInfoStyle>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...popUpActions })(UserInfo);
