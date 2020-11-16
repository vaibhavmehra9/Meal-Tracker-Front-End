import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ fullPage = false, color = "var(--blue)", ...otherProps }) => {
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
        <ClipLoader color={color} {...otherProps} />
      </div>
    );
  }
  return <ClipLoader color={color} {...otherProps} />;
};

export default Loader;
