import styled from "styled-components";

const MealItemStyle = styled.div`
  padding: 20px 12px;
  background: rgb(191 207 255 / 0.2);
  margin: 0 0 30px 0;
  border-radius: 5px;
  position: relative;

  .calorie-tag {
    position: absolute;
    font-size: 11px;
    background: var(--red);
    color: wheat;
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    top: -50px;
    top: -11px;
  }
`;

export default MealItemStyle;
