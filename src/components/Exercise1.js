import React, { Component } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

class Exercise1 extends Component {
  constructor(props) {
    super(props);
    this.state = { otp: "" };
    this.refrences = [];
  }
  onChangeText = (num, key) => {
    let otp = this.state.otp;
    otp += num;
    this.setState({ otp });
    if (otp.length < 4) {
      this.refrences[otp.length + 1].focus();
    } else {
      alert(`OTP entered is ${otp}`);
    }
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safe} />
        <View style={styles.top}>
          <Text style={styles.logIn}>Log into Savaan</Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.txt}>Enter your code</Text>
          </View>
          <View style={styles.otpContainer}>
            <TextInput
              style={styles.inputOtp}
              keyboardType="numeric"
              maxLength={1}
              key={1}
              onChangeText={(text, key) => this.onChangeText(text, key)}
              ref={(r) => (this.refrences[1] = r)}
            ></TextInput>
            <TextInput
              style={styles.inputOtp}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text, key) => this.onChangeText(text, key)}
              ref={(r) => (this.refrences[2] = r)}
            ></TextInput>
            <TextInput
              style={styles.inputOtp}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text, key) => this.onChangeText(text, key)}
              ref={(r) => (this.refrences[3] = r)}
            ></TextInput>
            <TextInput
              style={styles.inputOtp}
              keyboardType="numeric"
              maxLength={1}
              onChangeText={(text, key) => this.onChangeText(text, key)}
              ref={(r) => (this.refrences[4] = r)}
            ></TextInput>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.txt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  safe: {
    backgroundColor: "green",
  },

  top: {
    padding: 10,
    backgroundColor: "green",
  },
  logIn: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  txt: {
    textAlign: "center",
    fontSize: 20,
  },
  button: {
    width: "70%",
    borderWidth: 2,
    borderColor: "#98f5ff",
    padding: 7,
    elevation: 10,
    backgroundColor: "#fff",
  },
  inputOtp: {
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#868686",
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
export default Exercise1;
