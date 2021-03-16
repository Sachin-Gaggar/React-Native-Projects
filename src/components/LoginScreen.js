import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import InputComponent from "./InputComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
    };
  }
  setName = (name) => {
    this.setState({ ...this.state, name: name });
  };
  setEmail = (email) => {
    this.setState({ ...this.state, email: email });
  };
  setPhone = (phone) => {
    this.setState({ ...this.state, phone: phone });
  };
  setPassword = (password) => {
    this.setState({ ...this.state, password: password });
  };

  saveData = async () => {
    const dataObj = JSON.stringify(this.state);

    try {
      await AsyncStorage.setItem("user", dataObj);
      this.props.navigation.navigate("Home");
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#EEEEEE", "#FFFFFF"]}
        style={styles.container}
      >
        <SafeAreaView />
        <View style={styles.header}>
          <Text style={styles.boldTxt}>Lets Get Started</Text>
          <Text style={styles.lightTxt}>
            Create an account to Q Allure to get all features{" "}
          </Text>
        </View>
        <View style={styles.input}>
          <InputComponent
            name={"User"}
            saveInput={this.setName}
            secure={false}
            keyboard={"default"}
            img={require("../assets/user.png")}
          />
          <InputComponent
            name={"Phone"}
            secure={false}
            keyboard={"numeric"}
            saveInput={this.setPhone}
            img={require("../assets/phone.png")}
          />
          <InputComponent
            secure={false}
            name={"Email"}
            keyboard={"email-address"}
            saveInput={this.setEmail}
            img={require("../assets/mail.png")}
          />
          <InputComponent
            secure={true}
            keyboard={"default"}
            saveInput={this.setPassword}
            name={"password"}
            img={require("../assets/password.png")}
          />
          <InputComponent
            saveInput={this.setPassword}
            secure={true}
            name={"confirm password"}
            keyboard={"default"}
            img={require("../assets/password.png")}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonCreate} onPress={this.saveData}>
            <Text style={styles.createTxt}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>Already have an account?</Text>
          <Text style={styles.loginTxt}>Login here</Text>
        </View>
        <SafeAreaView />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  header: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  input: {
    flex: 4,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonCreate: {
    borderWidth: 1,
    width: "50%",
    padding: 10,
    borderRadius: 30,
    borderColor: "#2151C7",
    backgroundColor: "#2151C7",
    alignItems: "center",
    shadowColor: "#000000",
    elevation: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  boldTxt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  lightTxt: {
    fontSize: 10,
  },
  createTxt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  loginTxt: {
    color: "#2151c7",
  },
});

export default LoginScreen;
