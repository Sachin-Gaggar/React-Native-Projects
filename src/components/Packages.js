import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

export default class Packages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.card}>
        <LinearGradient
          colors={[this.props.colorStart, this.props.colorEnd]}
          style={styles.TopCard}
        >
          <View style={styles.advanced}>
            <Text style={styles.txt}>ADVANCED</Text>
          </View>
          <Text style={[styles.txt, styles.pad]}>{this.props.name}</Text>
          <Text style={styles.lightTxt}>{this.props.tests}</Text>
        </LinearGradient>
        <View style={styles.bottomCard}>
          <Text style={styles.lineThrough}>
            {"\u20A8"} {this.props.originalPrice}
          </Text>
          <View style={styles.rowPrice}>
            <Text style={styles.price}>
              {"\u20A8"} {this.props.discountedPrice}
            </Text>
            <View style={styles.discount}>
              <Text style={styles.price}>{this.props.discount}</Text>
            </View>
          </View>
          <Text style={styles.faded}>
            ZOYLO{"  "}
            <Text style={[styles.faded, { fontWeight: "normal" }]}>LABS</Text>
          </Text>
          <TouchableOpacity
            onPress={() => this.props.alertCall("Book Now")}
            style={styles.book}
          >
            <Text style={styles.bookTxt}>BOOK NOW</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lineThrough: {
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    fontSize: 15,
  },
  card: {
    width: 180,
    backgroundColor: "#FEFEFE",
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    shadowColor: "#1f1f1f",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowOpacity: 0.5,
  },
  TopCard: {
    height: 150,
    paddingHorizontal: 10,
    justifyContent: "space-around",
  },
  advanced: {
    backgroundColor: "white",
    padding: 2,
    borderRadius: 20,
    width: 90,
  },
  txt: {
    fontSize: 15,
  },
  pad: {},
  lightTxt: {
    fontSize: 12,
    color: "#616364",
  },
  bottomCard: {
    padding: 10,
    height: 150,
    justifyContent: "space-around",
  },
  rowPrice: {
    flexDirection: "row",
    justifyContent: "space-between",

    alignItems: "center",
  },
  discount: {
    padding: 4,
    borderColor: "green",
    borderWidth: 1,
    borderStyle: "dashed",
  },
  price: {
    color: "green",
    fontSize: 15,
  },
  faded: {
    fontWeight: "bold",
    color: "#EEE5F2",
  },

  bookTxt: {
    fontSize: 20,
    color: "orange",
  },
});
