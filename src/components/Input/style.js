import styled from "styled-components";

const InputStyle = styled.div`
  position: relative;
  .input {
    width: 100%;
    display: block;
    padding: 12px;
    border-radius: 4px;
    outline: 0;
    border: 1px solid #efefef;
    height: 48px;
    background: white;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
  .input-fld-error {
    font-size: 10px;
    color: red;
    position: absolute;
  }
  .input-error {
    border: 1px solid red;
  }
`;

export default InputStyle;
