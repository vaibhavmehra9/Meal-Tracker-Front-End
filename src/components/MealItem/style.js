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
    color: wheat;
    color: white;
    padding: 2px 8px;
    border-radius: 4px;
    top: -50px;
    top: -11px;
  }
  .meal-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .meal-remove-btn {
    background: var(--red);
    border: 0;
    outline: 0;
    padding: 4px;
    border-radius: 2px;
    color: white;
  }
`;

export default MealItemStyle;
