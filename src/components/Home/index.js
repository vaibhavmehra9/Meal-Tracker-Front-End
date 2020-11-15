import React from "react";
import AddMealForm from "../AddMealForm";
import Meals from "../Meals";
import UserInfo from "../UserInfo";
import HomeStyle from "./style";

const Home = () => {
  return (
    <HomeStyle>
      <UserInfo />
      <AddMealForm />
      <Meals />
    </HomeStyle>
  );
};

export default Home;
