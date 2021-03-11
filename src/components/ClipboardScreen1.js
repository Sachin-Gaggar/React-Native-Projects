import Clipboard from "@react-native-clipboard/clipboard";
import React, { Component } from "react";
import {
  Button,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class ClipboardScreen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  copy = async () => {
    await Clipboard.setString(this.state.text);
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <Text style={styles.txt}>Type below and press long for copy</Text>
        <TouchableOpacity style={styles.holder} onLongPress={() => this.copy()}>
          <TextInput
            placeholder={"write here"}
            onChangeText={(text) => this.setState({ text })}
          />
        </TouchableOpacity>
        <Button
          title='Go to Screen 2'
          onPress={() => this.props.navigation.navigate("Copy")}
        />
      </KeyboardAvoidingView>
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
