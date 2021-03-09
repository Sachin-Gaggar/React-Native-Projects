import React from "react";

import { NavigationContainer, StackActions } from "@react-navigation/native";
import TabContainer from "../components/TabScreen.js";

export default Main = () => {
  return (
    <NavigationContainer>
      <TabContainer />
    </NavigationContainer>
  );
};
