import React from "react";
import ButtonStyle from "./style";

const Button = ({ type = "button", text = "" }) => {
  return <ButtonStyle type={type}>{text}</ButtonStyle>;
};

export default Button;
