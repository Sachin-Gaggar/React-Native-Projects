import React, { Component } from "react";

import {
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  View,
  Text,
  Image,
} from "react-native";

export default class ModalGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOn: false,
    };
  }
  nextScreen = () => {
    setTimeout(() => {
      this.setModal(false);
      this.props.navigation.navigate("Sectionlist");
    }, 5000);
  };
  setModal = (visible) => {
    this.setState({ modalOn: visible });
  };
  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType='slide'
          visible={this.state.modalOn}
          onRequestClose={() => this.setModal(false)}
          transparent={true}
        >
          <View style={styles.modal}>
            <Image source={require("../assets/loading.gif")} />
          </View>
        </Modal>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              this.setModal(true);
              this.nextScreen();
            }}
          >
            <Text style={styles.txt}>Press to see the Section List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  modal: { flex: 1, justifyContent: "center", alignItems: "center" },
  content: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    borderColor: "#555555",

    shadowOffset: { width: 1, height: 2 },
    shadowColor: "#333333",
    shadowOpacity: 0.5,
    elevation: 2,
  },
  txt: { fontSize: 20 },
});
