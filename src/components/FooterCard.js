import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default class FooterCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.darkContainer}>
        <View style={styles.card}>
          <View style={styles.left}>
            <Text style={styles.bold}>Order Medicine using prescription</Text>
            <Text style={styles.light}>& get medicine delivered at Home </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.alertCall("Upload")}
            style={styles.right}
          >
            <Text style={styles.button}>Upload</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.left}>
            <Text style={styles.bold}>Online Doctor Consultation</Text>
            <Text style={styles.light}>
              Consult with top medicinal practitioner in your city. Recover from
              the comfort of your home.
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.alertCall("Consult Now")}
            style={[styles.right, styles.button2]}
          >
            <Text style={[styles.button, styles.button2Txt]}>Consult Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <View style={styles.left}>
            <Text style={styles.bold}>Take Free </Text>
            <Text style={styles.bold}>Online Health Assessment</Text>
            <Text style={styles.light}>Know your Health status now </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.alertCall("Start")}
            style={styles.right}
          >
            <Text style={styles.button}>Start</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.card, styles.column]}>
          <View style={styles.content}>
            <Text style={styles.bold}>Corporate health plans</Text>
            <Text style={styles.bold}>Just for your work place</Text>
            <TouchableOpacity
              style={styles.rowAlign}
              onPress={() => this.props.alertCall("Log in")}
            >
              <Image
                style={styles.img}
                source={require("../assets/play.png")}
              />
              <Text style={styles.lightOrange}>
                Login To Your Corporate Bank Account To Avail Maximum Benefits
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.card, styles.lastContainer]}>
          <Text style={[styles.bold, styles.content]}>Blogs</Text>
          <Text style={styles.proverb}>
            "A good laugh and long sleep are the best cures in the doctor's
            book."
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "95%",
    backgroundColor: "white",
    shadowColor: "#aaaaaa",
    borderColor: "#E3E4E6",
    shadowRadius: 10,
    borderRadius: 10,
    height: 180,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0,
    },

    elevation: 2,
    flexDirection: "row",
    marginBottom: 25,
  },
  column: { flexDirection: "column", justifyContent: "center" },
  darkContainer: {
    backgroundColor: "#F4F5F7",
    paddingVertical: 10,

    alignItems: "center",
  },
  left: {
    flex: 2,
    paddingVertical: 10,
    margin: 20,
  },
  right: {
    flex: 1,
    margin: 10,
    marginTop: 30,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: "orange",
    alignSelf: "flex-start",
    right: 0,
  },
  button: {
    textAlign: "center",
    fontSize: 20,
    color: "orange",
  },
  button2: {
    backgroundColor: "orange",
  },
  button2Txt: {
    color: "white",
    fontSize: 18,
  },
  bold: { fontSize: 15, fontWeight: "400" },
  light: { fontSize: 10, paddingVertical: 8, color: "#888888" },

  content: {
    paddingHorizontal: 20,
  },
  img: {
    height: 20,
    width: 20,
  },
  lightOrange: {
    color: "orange",
    fontSize: 10,
  },
  rowAlign: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  lastContainer: {
    flexDirection: "column",
    paddingVertical: 30,
  },
  proverb: {
    marginLeft: 60,
    marginTop: 10,
    fontSize: 15,
    color: "#888888",
  },
});
