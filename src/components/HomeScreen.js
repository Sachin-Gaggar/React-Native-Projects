import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import AsyncStorage from "@react-native-async-storage/async-storage";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
    };
  }
  componentDidMount() {
    this.getSavedData();
  }
  getSavedData = async () => {
    try {
      const savedData = await AsyncStorage.getItem("user");
      console.log(savedData);

      const Data = JSON.parse(savedData);
      this.setState({ ...Data });
    } catch (error) {
      console.log(error);
    }
  };
  signOut = () => {
    AsyncStorage.clear();
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: "LogIn" }],
    });
  };
  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#AAAAAA", "#FFFFFF"]}
        style={styles.container}
      >
        <SafeAreaView />
        <View style={styles.header}>
          <TouchableOpacity style={styles.button} onPress={this.signOut}>
            <Text style={styles.bold}>Log Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.bold}>Name: {this.state.name}</Text>
          <Text style={styles.bold}>Phone: {this.state.phone}</Text>
          <Text style={styles.bold}>Email: {this.state.email}</Text>
        </View>
        <SafeAreaView />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  header: {
    flex: 0.2,

    alignSelf: "flex-end",
    justifyContent: "flex-start",
  },
  card: {
    width: "90%",
    flex: 0.1,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 50,
    backgroundColor: "white",
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    elevation: 2,
    shadowOffset: {
      height: 1,
    },
  },
  bold: {
    fontSize: 20,
    color: "#2151C7",
  },

  button: {
    width: "50%",
    padding: 10,
    borderRadius: 30,

    alignItems: "center",
    shadowColor: "#000000",
    elevation: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
});

export default HomeScreen;
