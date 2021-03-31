import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../HomeScreen";

export function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
}

export function MyCartScreen() {
  return (
    <View style={styles.container}>
      <Text>My Cart</Text>
    </View>
  );
}
export function WishListScreen() {
  return (
    <View style={styles.container}>
      <Text>Whish list</Text>
    </View>
  );
}

const StackScreen = createStackNavigator();
export function HomeStack() {
  return (
    <StackScreen.Navigator>
      <StackScreen.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "Men Clothing",
        }}
      />
    </StackScreen.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
