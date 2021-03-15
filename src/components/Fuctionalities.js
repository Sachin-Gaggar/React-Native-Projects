import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const data = [
  { name: "Medicines", src: require("../assets/medicine.png") },
  { name: "Tests & Packages", src: require("../assets/lamp.png") },
  { name: "Online Consultation", src: require("../assets/monitor.png") },
];
const data2 = [
  { name: "Doctor Appointment", src: require("../assets/stethoscope.png") },
  { name: "Wellness Packages", src: require("../assets/package.png") },
  { name: "Ask Joy", src: require("../assets/ask.png") },
  { name: "Home Healthcare", src: require("../assets/homeHealth.png") },
  { name: "Hospital Packages", src: require("../assets/kit.png") },
];
export default class Functionalities extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.darkContainer}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              onPress={() => this.props.alertCall(item.name)}
            >
              <Image style={styles.img} source={item.src} />
              <Text style={styles.txt}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.inlineCards}>
          {data2.map((item, index) => (
            <TouchableOpacity
              onPress={() => this.props.alertCall(item.name)}
              key={index}
              style={styles.tokens}
            >
              <View style={styles.imageBorder}>
                <Image style={styles.tokenImages} source={item.src} />
              </View>
              <Text style={styles.tokentxt}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#FEFFFE",
    borderWidth: 2,
    borderColor: "#E3E4E6",
    shadowColor: "#aaaaaa",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
  inlineCards: {
    backgroundColor: "#FEFEFE",
    flexDirection: "row",
    width: "100%",
    paddingVertical: 10,
    justifyContent: "space-evenly",
  },
  darkContainer: {
    backgroundColor: "#F4F5F7",
    flexDirection: "row",
    marginBottom: 15,
    justifyContent: "space-around",
  },
  tokens: {
    width: "15%",
    alignItems: "center",
  },
  imageBorder: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#E3E4E6",
    borderRadius: 30,
  },
  img: {
    marginTop: 10,
    width: 40,
    height: 40,
  },
  txt: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 15,
  },
  tokenImages: {
    height: 20,
    width: 20,
  },
  tokentxt: {
    fontSize: 10,
    textAlign: "center",
    fontWeight: "300",
    paddingVertical: 10,
  },
});
