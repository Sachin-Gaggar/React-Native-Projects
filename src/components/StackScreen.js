import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ModalGif from "./ModalGif";
import Sectionlist from "./Sectionlist";

const Stack = createStackNavigator();

export default class Stackscreen extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={ModalGif} />
          <Stack.Screen
            name='Sectionlist'
            component={Sectionlist}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
