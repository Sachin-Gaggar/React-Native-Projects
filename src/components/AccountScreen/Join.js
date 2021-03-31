import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import CheckBox from "react-native-check-box";

export default class Join extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput placeholder='First Name' style={styles.input} />
        <TextInput placeholder='Last Name' style={styles.input} />
        <TextInput placeholder='Your Email' style={styles.input} />

        <View style={[styles.input, styles.row]}>
          <TextInput placeholder='Password'></TextInput>
          <Text>Show</Text>
        </View>
        <View style={[styles.input, styles.number]}>
          <View style={styles.flagCircle}>
            <Image
              style={styles.flag}
              source={require("../../assets/flag.png")}
            />
          </View>
          <Text>+1</Text>
          <Text style={styles.fade}>|</Text>
          <TextInput placeholder='123 456 7890'></TextInput>
        </View>
        <View style={styles.checkbox}>
          <View>
            <CheckBox uncheckedCheckBoxColor='#F9CE6E' />
          </View>
          <View style={styles.margin}>
            <Text>Male</Text>
          </View>
          <View>
            <CheckBox uncheckedCheckBoxColor='#F9CE6E' />
          </View>
          <View>
            <Text>Female</Text>
          </View>
        </View>
        <View style={styles.subscribe}>
          <View>
            <CheckBox checkBoxColor='#F9CE6E' />
          </View>
          <View>
            <Text>
              Be first to know about new arrivals, sales & promos by ubmitting
              your email. You can opt out at any time.
              <Text style={styles.underline}>Privacy Policy</Text>
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.signInBox}>
          <Text style={styles.signInText}>Join Now</Text>
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
            Join with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.signInBox, styles.fb]}>
          <Image style={styles.img} source={require("../../assets/fb.png")} />
          <Text style={styles.signInText}>Join with FaceBook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInBox}>
          <Image
            style={styles.img}
            source={require("../../assets/apple.png")}
          />
          <Text style={styles.signInText}>Join with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.join}>
          <Text>Already have an account</Text>
          <TouchableOpacity onPress={() => this.props.signIn()}>
            <Text style={styles.joinTxt}>Sign In</Text>
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
  number: {
    flexDirection: "row",
    alignItems: "center",
  },
  lines: {
    borderBottomColor: "#C4C4C4",
    borderBottomWidth: 1,
    width: "90%",
    alignItems: "center",
    margin: 20,
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
    marginVertical: 12,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 4,
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
  flag: {
    height: 30,
    width: 30,
  },
  flagCircle: {
    borderRadius: 15,
    borderColor: "yellow",
    borderWidth: 1,
  },
  checkbox: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "90%",
    marginVertical: 10,
  },
  margin: {
    marginRight: 10,
  },
  subscribe: {
    flexDirection: "row",
    justifyContent: "center",
    width: "85%",
    marginVertical: 10,
  },
  underline: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
