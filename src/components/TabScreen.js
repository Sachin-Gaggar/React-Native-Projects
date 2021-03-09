import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  CategoriesScreen,
  HomeStack,
  MyCartScreen,
  WishListScreen,
  AccountScreen,
} from "../components/StackScreen";

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            if (focused) {
              return <Image source={require("../assets/HomeActive.png")} />;
            } else {
              return <Image source={require("../assets/HomeInactive.png")} />;
            }
          } else if (route.name === "Categories") {
            return <Image source={require("../assets/categories.png")} />;
          } else if (route.name === "My Cart") {
            return <Image source={require("../assets/shopping.png")} />;
          } else if (route.name === "Wish List") {
            return <Image source={require("../assets/wish.png")} />;
          } else {
            return <Image source={require("../assets/account.png")} />;
          }
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Categories' component={CategoriesScreen} />
      <Tab.Screen name='My Cart' component={MyCartScreen} />
      <Tab.Screen name='Wish List' component={WishListScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
};
export default TabContainer;
