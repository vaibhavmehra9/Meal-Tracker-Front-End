import React from "react";
import Nav from "../Nav";
import AppRoutes from "../AppRoutes";

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="container">
        <AppRoutes />
      </div>
    </React.Fragment>
  );
}

export default App;
