import React from "react";
import {Redirect, Route} from "react-router-dom";
import ROUTE_CONSTANTS from "../../constants/routeConstants";
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, exact, path, auth:{token}}) => {
    return token ? (
        <Route component={Component} exact={exact} path={path}/>
    ) : (
        <Redirect to={ROUTE_CONSTANTS.LOGIN}/>
    );
};

const mapStateToProps = (state) => {
    return {auth: state.auth};
}

export default connect(mapStateToProps, null)(PrivateRoute);
