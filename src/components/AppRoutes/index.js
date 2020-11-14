import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/route-constants";
import PrivateRoute from "./PrivateRoute";
import Home from "../Home";
import AuthForm from "../AuthForm";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={ROUTE_CONSTANTS.HOME} component={Home} />
        <Route exact path={ROUTE_CONSTANTS.LOGIN} component={AuthForm} />
      </Switch>
    </Router>
  );
};

export default AppRoutes;
