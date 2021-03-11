import React, { Component } from "react";
import {
  BackHandler,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
} from "react-native";

export default class BackPress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardBackPress",
      this.action
    );
  }
  action = () => {
    Alert.alert("Exit", "Do you want to exit App", [
      {
        text: "No",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };
  componentWillUnmount() {
    this.backHandler.remove();
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Press Back Button</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "400",
  },
  holder: {
    marginTop: 10,
    borderColor: "#999999",
    shadowColor: "#fefefe",
    borderWidth: 1,
    padding: 10,
    fontSize: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 12,
  },
});
