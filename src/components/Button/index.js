import React from "react";
import ButtonStyle from "./style";
import Loader from "../Loader";

const Button = ({ type = "button", text = "", isLoading = false }) => {
  return (
    <ButtonStyle type={type} disabled={isLoading}>
      {isLoading ? <Loader color="var(--white)" size={20} /> : text}
    </ButtonStyle>
  );
};

export default Button;
