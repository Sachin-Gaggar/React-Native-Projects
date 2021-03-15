import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

const category = [
  { name: "Healthare Products", src: require("../assets/Healthcare.png") },
  { name: "Ayurveda", src: require("../assets/Ayurveda.png") },
  { name: "Homeopathy", src: require("../assets/Homeopathy.png") },
  { name: "Surgicals & devices", src: require("../assets/Devices.png") },
];
export default class Categories extends React.Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {category.map((item, index) => (
          <TouchableOpacity
            onPress={() => this.props.alertCall(item.name)}
            style={styles.card}
            key={index}
          >
            <View>
              <Image source={item.src} />
            </View>
            <View style={styles.name}>
              <Text>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  scroll: {
    width: `${100 * 1.6}%`,
    justifyContent: "space-evenly",
    paddingBottom: 15,
  },
  card: {
    width: 150,
    height: 150,

    backgroundColor: "white",
    borderColor: "#E3E4E6",
    shadowColor: "#1f1f1f",
    shadowOffset: {
      width: 0,
      height: 1,
    },

    shadowRadius: 1,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginTop: 10,
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
