import React from "react";
import Nav from "../Nav";
import AppRoutes from "../AppRoutes";
import { connect } from "react-redux";
import * as authActions from "../../store/actions/authActions";
import Loader from "../Loader";

function App({ auth: { token, loading }, getUserDetails }) {
  React.useEffect(() => {
    if (token) {
      getUserDetails();
    }
  }, [getUserDetails, token]);
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        {loading ? <Loader fullPage /> : <AppRoutes />}
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

export default connect(mapStateToProps, { ...authActions })(App);
