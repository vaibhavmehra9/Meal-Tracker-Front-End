import styled from "styled-components";

const InputStyle = styled.div`
  position: relative;
  .input {
    width: 100%;
    display: block;
    padding: 12px;
    border-radius: 4px;
    outline: 0;
    border: 2px solid var(--light-blue);
    font-size: 1rem;
    color: var(--black);
    font-size: normal;
    &::placeholder {
      font-size: 1rem;
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
