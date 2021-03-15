import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Image, Text, SafeAreaView } from "react-native";
import Home from "./Home";

const BottomTab = createBottomTabNavigator();
function Search() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Search Page</Text>
    </SafeAreaView>
  );
}
function Call() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Call Page</Text>
    </SafeAreaView>
  );
}
function Notifications() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Notifications Page</Text>
    </SafeAreaView>
  );
}
function Account() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Account Page</Text>
    </SafeAreaView>
  );
}

export default class MainScreen extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              if (route.name === "Home") {
                if (focused) {
                  return (
                    <Image
                      style={styles.img}
                      source={require("../assets/HomeActive.png")}
                    />
                  );
                } else {
                  return (
                    <Image
                      style={styles.img}
                      source={require("../assets/HomeInactive.png")}
                    />
                  );
                }
              } else if (route.name === "Search") {
                return (
                  <Image
                    style={styles.img}
                    source={require("../assets/search.png")}
                  />
                );
              } else if (route.name === "Call") {
                return (
                  <Image
                    style={styles.call}
                    source={require("../assets/call.png")}
                  />
                );
              } else if (route.name === "Notifications") {
                return (
                  <Image
                    style={styles.notification}
                    source={require("../assets/bell.png")}
                  />
                );
              } else {
                return (
                  <Image
                    style={styles.img}
                    source={require("../assets/account.png")}
                  />
                );
              }
            },
          })}
        >
          <BottomTab.Screen name='Home' component={Home} />
          <BottomTab.Screen name='Search' component={Search} />
          <BottomTab.Screen name='Call' component={Call} />
          <BottomTab.Screen name='Notifications' component={Notifications} />
          <BottomTab.Screen name='Account' component={Account} />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notification: {
    width: 40,
    height: 40,
  },
  call: {
    width: 50,
    height: 50,
    position: "absolute",
    top: -20,
  },
});
