import React from "react";
import InputStyle from "./style";

const Input = ({ type = "text", refProp, error = "", ...otherProps }) => {
  return (
    <InputStyle>
      <input
        className={error ? `input input-error` : `input`}
        type={type}
        ref={refProp}
        {...otherProps}
      />
      {error && <p className="input-fld-error">{error}</p>}
    </InputStyle>
  );
};

export default Input;
