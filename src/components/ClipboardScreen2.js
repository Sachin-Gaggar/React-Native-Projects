import Clipboard from "@react-native-clipboard/clipboard";
import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class ClipboardScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copiedText: "",
    };
  }
  componentDidMount() {
    (async () => {
      const text = await Clipboard.getString();
      this.setState({ copiedText: text });
    })();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Copied Text is :</Text>
        <Text style={styles.holder}>{this.state.copiedText}</Text>

        <Button title='back' onPress={() => this.props.navigation.goBack()} />
      </View>
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
    padding: 10,
    borderWidth: 1,
    borderColor: "#eeeeee",
    shadowColor: "#fefefe",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 12,
  },
});
