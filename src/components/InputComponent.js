import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focuse: false,
    };
  }
  focuseOn = () => {
    this.setState({ focuse: true });
  };
  render() {
    return (
      <>
        <View
          style={
            !this.state.focuse
              ? styles.unfocused
              : [styles.unfocused, styles.focused]
          }
        >
          <Image source={this.props.img} />
          <TextInput
            secureTextEntry={this.props.secure}
            keyboardType={this.props.keyboard}
            style={
              !this.state.focuse
                ? styles.unfocusedTxt
                : [styles.unfocusedTxt, styles.focusedTxt]
            }
            onFocus={this.focuseOn}
            placeholder={this.props.name}
            onChangeText={this.props.saveInput}
          />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  unfocused: {
    width: "85%",
    borderWidth: 1,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderRadius: 30,
  },
  unfocusedTxt: {
    fontSize: 20,
    marginLeft: 10,
    flex: 1,
  },
  focusedTxt: {
    color: "#84B4F3",
  },
  focused: {
    borderColor: "#84B4F3",
  },
});

export default InputComponent;
