import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClipboardScreen1 from "./ClipboardScreen1.js";
import ClipboardScreen2 from "./ClipboardScreen2.js";

const Stack = createStackNavigator();

export default class ClipboardStack extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={ClipboardScreen1} />
          <Stack.Screen name='Copy' component={ClipboardScreen2} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
