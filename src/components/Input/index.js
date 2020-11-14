import React from "react";
import InputStyle from "./style";

const Input = ({ type = "text", ...otherProps }) => {
  return <InputStyle type={type} {...otherProps} />;
};

export default Input;
