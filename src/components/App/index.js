import React from "react";
import Nav from "../Nav";
import AppRoutes from "../AppRoutes";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";

function App({ auth: { token }, getUserDetails }) {
  React.useEffect(() => {
    if (token) {
      getUserDetails();
    }
  }, []);
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <AppRoutes />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...authActions })(App);
