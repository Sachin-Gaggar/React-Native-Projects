import React from "react";
import { View, Text, Button, TextInput, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const [headerText, setheader] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <TextInput
        placeholder='Enter props'
        style={styles.textInput}
        onChangeText={(data) => setheader(data)}
      ></TextInput>
      <Button
        title='submit'
        onPress={() => {
          navigation.navigate("headerChangedScreen", {
            header: headerText,
          });
        }}
      />
    </View>
  );
}
function headerChangedScreen({ route, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Props passed</Text>
      <View style={styles.btncontainer}>
        <Button
          title='Tab Screen'
          onPress={() => navigation.navigate("Home")}
        />
      </View>
      <View style={styles.btncontainer}>
        <Button title='Back' onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

function profile({ navigation }) {
  return (
    <View style={styles.common}>
      <Text style={styles.text}>Your Profile</Text>
      <View style={styles.btncontainer}>
        <Button
          title='Go To HomeScreen'
          onPress={() => {
            navigation.navigate("HomeScreen");
          }}
        ></Button>
      </View>
    </View>
  );
}

function feed() {
  return (
    <View style={styles.common}>
      <Text style={styles.text}>Feed Your Imaginations</Text>
    </View>
  );
}

function notifications() {
  return (
    <View style={styles.common}>
      <Text style={styles.text}>Your Notifications!!!</Text>
    </View>
  );
}

function Home({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName='notifications'
      tabBarOptions={{
        activeTintColor: "red",
        labelStyle: { fontSize: 15 },
        style: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name='feed'
        component={feed}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused)
              return (
                <Image
                  style={styles.icon}
                  source={require("../assets/activeFeed.png")}
                />
              );
            else
              return (
                <Image
                  style={styles.icon}
                  source={require("../assets/Feed.png")}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name='notifications'
        component={notifications}
        options={{
          tabBarLabel: "notifications",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused)
              return (
                <Image
                  style={styles.icon}
                  source={require("../assets/activeNotification.png")}
                />
              );
            else
              return (
                <Image
                  style={styles.icon}
                  source={require("../assets/Notification.png")}
                />
              );
          },
        }}
      />
      <Tab.Screen
        name='profile'
        component={profile}
        options={{
          tabBarLabel: "profile",
          tabBarIcon: ({ color, size, focused }) => {
            if (focused)
              return (
                <Image
                  style={styles.icon}
                  source={require("../assets/activeProfile.png")}
                />
              );
            else
              return (
                <Image
                  style={styles.icon}
                  source={require("../assets/Profile.png")}
                />
              );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Navigation = ({}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerTitle: "Home Screen" }}
          name={"HomeScreen"}
          component={HomeScreen}
        />
        <Stack.Screen
          options={({ route }) => ({ title: route.params.header })}
          name={"headerChangedScreen"}
          component={headerChangedScreen}
        />
        <Stack.Screen
          options={{ headerTitle: "Tab screen" }}
          name={"Home"}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    margin: 30,
  },
  btncontainer: {
    flex: 1,
    margin: 30,
  },
  text: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    margin: 30,
    borderWidth: 2,
    color: "black",
    borderColor: "blue",
    borderRadius: 15,
    fontSize: 20,
    padding: 20,
  },
  common: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Navigation;
