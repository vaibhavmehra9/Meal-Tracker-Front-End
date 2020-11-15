import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ fullPage = false, ...otherProps }) => {
  if (fullPage) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ClipLoader {...otherProps} />
      </div>
    );
  }
  return <ClipLoader {...otherProps} />;
};

export default Loader;
