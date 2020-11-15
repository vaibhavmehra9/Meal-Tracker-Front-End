import styled from "styled-components";

const ButtonStyle = styled.button`
  width: 100%;
  cursor: pointer;
  background: ${(props) =>
    props.background ? props.background : "var(--blue)"};
  border: 0;
  outline: 0;
  font-size: 14px;
  padding: 10px;
  color: ${(props) => (props.color ? props.color : "var(--white)")};
  padding: 12px 18px;
  border-radius: 6px;
  border: 1px solid;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export default ButtonStyle;
