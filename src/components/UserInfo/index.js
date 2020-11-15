import React from "react";
import UserInfoStyle from "./style";
import { connect } from "react-redux";
import Button from "../Button";

const UserInfo = ({ auth: { user } }) => {
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
        <Button text="Add Meal" />
      </div>
    </UserInfoStyle>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(UserInfo);
