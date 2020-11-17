import styled from "styled-components";

const MealItemStyle = styled.div`
  padding: 20px 12px;
  background: rgba(255, 255, 255, 0.7);
  margin: 0 0 10px 0;
  border-radius: 5px;
  position: relative;

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
