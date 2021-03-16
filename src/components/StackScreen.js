import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

class StackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEmpty: true,
      isLoaded: false,
    };
    this.checkStorage();
  }
  componentDidMount() {}
  checkStorage = async () => {
    const data = await AsyncStorage.getItem("user");
    if (data !== null) {
      this.setState({ isEmpty: false, isLoaded: true });
    } else {
      this.setState({ isLoaded: true });
    }
  };
  render() {
    const { isEmpty, isLoaded } = this.state;
    return (
      <NavigationContainer>
        {isLoaded ? (
          <Stack.Navigator
            initialRouteName={isEmpty ? "LogIn" : "Home"}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='LogIn' component={LoginScreen} />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({});

export default StackScreen;
