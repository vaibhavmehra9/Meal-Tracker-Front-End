import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/route-constants";
import PrivateRoute from "./PrivateRoute";
import Home from "../../pages/Home";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path={ROUTE_CONSTANTS.HOME} component={Home} />
      </Switch>
    </Router>
  );
};

export default Routing;
