import React from "react";
import AddMealForm from "../AddMealForm";
import UserInfo from "../UserInfo";
import HomeStyle from "./style";

const Home = () => {
  return (
    <HomeStyle>
      <UserInfo />
      <AddMealForm />
    </HomeStyle>
  );
};

export default Home;
