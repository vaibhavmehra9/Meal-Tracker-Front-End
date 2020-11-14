import React from "react";
import { Redirect, Route } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/route-constants";

const PrivateRoute = ({ component: Component, exact, path }) => {
  const isUserLoggedIn = false;
  return isUserLoggedIn ? (
    <Route component={Component} exact={exact} path={path} />
  ) : (
    <Redirect to={ROUTE_CONSTANTS.LOGIN}></Redirect>
  );
};

export default PrivateRoute;
