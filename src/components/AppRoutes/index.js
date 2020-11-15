import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/routeConstants";
import PrivateRoute from "./PrivateRoute";
import Home from "../Home";
import AuthForm from "../Auth";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={ROUTE_CONSTANTS.HOME} component={Home} />
        <Route exact path={ROUTE_CONSTANTS.LOGIN}>
          <AuthForm authMode="login" />
        </Route>
        <Route exact path={ROUTE_CONSTANTS.SIGN_UP}>
          <AuthForm authMode="signUp" title="Sign Up" />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
