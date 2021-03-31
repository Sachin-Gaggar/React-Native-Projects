import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default class SignIn extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput placeholder='Your Email Address' style={styles.input} />
        <View style={[styles.input, styles.row]}>
          <TextInput placeholder='Password'></TextInput>
          <Text>Show</Text>
        </View>
        <TouchableOpacity>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInBox}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
        <View style={styles.lines}>
          <View style={styles.circle}>
            <Text style={styles.fade}>or</Text>
          </View>
        </View>
        <TouchableOpacity style={[styles.signInBox, styles.google]}>
          <Image
            style={styles.img}
            source={require("../../assets/google.png")}
          />
          <Text style={[styles.signInText, styles.googleTxt]}>
            Sign in with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signInBox, styles.fb]}>
          <Image style={styles.img} source={require("../../assets/fb.png")} />
          <Text style={styles.signInText}>Sign in with FaceBook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInBox}>
          <Image
            style={styles.img}
            source={require("../../assets/apple.png")}
          />
          <Text style={styles.signInText}>Sign in with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.join}>
          <Text>Don't have an account</Text>
          <TouchableOpacity onPress={() => this.props.join()}>
            <Text style={styles.joinTxt}>Join</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    width: "90%",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#C4C4C4",
    color: "#C4C4C4",
    padding: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lines: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    width: "90%",
    alignItems: "center",
    marginVertical: 20,
  },
  circle: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderColor: "#C4C4C4",
    top: -20,
  },
  img: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  fade: {
    fontSize: 30,
    color: "#C4C4C4",
  },
  signInBox: {
    width: "90%",
    borderWidth: 1,
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 7,
    backgroundColor: "black",
  },
  google: {
    backgroundColor: "white",
    borderColor: "#C4C4C4",
  },
  googleTxt: {
    color: "black",
  },
  fb: {
    backgroundColor: "#3B5997",
    borderColor: "#3B5997",
  },
  signInText: {
    fontSize: 20,
    color: "white",
    margin: 10,
    textAlign: "center",
  },
  join: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    borderWidth: 1,
    borderColor: "#E7E7E7",
    backgroundColor: "#F7F7F7",
    padding: 20,
  },
  joinTxt: {
    fontWeight: "bold",
  },
});
