import React from "react";
import UserInfoStyle from "./style";
import { connect } from "react-redux";

const UserInfo = ({ auth: { user } }) => {
  const { firstName, lastName } = user || {};
  return (
    <UserInfoStyle>
      <h1>
        Hi {firstName} {lastName}
      </h1>
    </UserInfoStyle>
  );
};

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, null)(UserInfo);
