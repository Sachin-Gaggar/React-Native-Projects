import React from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import Join from "./Join";
import SignIn from "./SignIn";
const height = Dimensions.get("window").height;
export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      signOption: false,
      joinOption: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType='fade'
          visible={this.state.modalVisible}
          onRequestClose={() =>
            this.setState({ ...this.state, modalVisible: false })
          }
          transparent={true}
        >
          <SafeAreaView />
          <View style={styles.modalContainer}>
            <TouchableOpacity
              style={styles.cross}
              onPress={() =>
                this.setState({ ...this.state, modalVisible: false })
              }
            >
              <Image
                style={styles.imgCross}
                source={require("../../assets/cross.png")}
              />
            </TouchableOpacity>
            <View style={styles.screen}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalVisible: true,
                    signOption: true,
                    joinOption: false,
                  })
                }
                style={
                  this.state.signOption ? styles.underline : styles.notUnderLine
                }
              >
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  this.setState({
                    modalVisible: true,
                    signOption: false,
                    joinOption: true,
                  })
                }
                style={
                  this.state.joinOption ? styles.underline : styles.notUnderLine
                }
              >
                <Text style={styles.signInText}>Join</Text>
              </TouchableOpacity>
            </View>
            {this.state.signOption ? (
              <SignIn
                join={() =>
                  this.setState({
                    modalVisible: true,
                    signOption: false,
                    joinOption: true,
                  })
                }
              />
            ) : (
              <Join
                signIn={() =>
                  this.setState({
                    modalVisible: true,
                    signOption: true,
                    joinOption: false,
                  })
                }
              />
            )}
          </View>
        </Modal>

        <View>
          <View>
            <Text style={styles.welcome}>Welcome!</Text>
          </View>
          <View style={styles.signIn}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  modalVisible: true,
                  signOption: true,
                  joinOption: false,
                });
              }}
            >
              <Text style={styles.bold}>SIGN IN</Text>
            </TouchableOpacity>
            <Text> | </Text>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  modalVisible: true,
                  signOption: false,
                  joinOption: true,
                });
              }}
            >
              <Text style={styles.bold}>JOIN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image style={styles.img} source={require("../../assets/user.png")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderBottomWidth: 10,
    borderBottomColor: "#F2F2F2",
  },
  welcome: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signIn: {
    flexDirection: "row",
    width: "45%",
    margin: 10,
    padding: 4,
    backgroundColor: "#FFFCED",
    justifyContent: "space-between",
  },
  bold: {
    fontWeight: "bold",
  },
  img: {
    width: 80,
    height: 80,
  },
  modalContainer: {
    height: height - 120,
    backgroundColor: "white",
    justifyContent: "flex-start",
  },
  imgCross: {
    width: 40,
    height: 40,
  },
  signInText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  cross: {
    flexDirection: "row",
    flex: 0,
    justifyContent: "flex-end",
  },
  screen: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  underline: {
    padding: 10,
    borderBottomWidth: 4,
    borderBottomColor: "yellow",
  },
  notUnderLine: {
    padding: 10,
  },
});
