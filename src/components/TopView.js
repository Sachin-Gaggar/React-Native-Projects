import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";

const images = [
  {
    src: require("../assets/1.jpeg"),
  },
  {
    src: require("../assets/2.jpeg"),
  },
  {
    src: require("../assets/3.jpeg"),
  },
  {
    src: require("../assets/4.jpeg"),
  },
];

export default class TopView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
          <View style={styles.leftTab}>
            <Image style={styles.img} source={require("../assets/zoylo.jpg")} />
            <Text style={styles.zoyloTxt}>zoylo</Text>
          </View>
          <View style={styles.rightTab}>
            <TouchableOpacity onPress={() => this.props.alertCall("GPS")}>
              <Image
                style={styles.gpsImg}
                source={require("../assets/gps.png")}
              />
            </TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity onPress={() => this.props.alertCall("Cart")}>
              <Image source={require("../assets/cart.png")} />
              <View style={styles.selectedItems}>
                <Text>0</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              ...styles.scrollView,
              width: `${100 * 4}%`,
            }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={200}
            pagingEnabled
            decelerationRate='fast'
          >
            {images.map((item, index) => (
              <TouchableOpacity
                onPress={() => this.props.alertCall("image")}
                key={index}
                style={styles.card}
              >
                <Image style={styles.addImages} source={item.src} />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFFFE",
  },
  img: {
    width: 50,
    height: 50,
  },
  tab: {
    flexDirection: "row",

    justifyContent: "space-between",
    borderColor: "#EDEDED",
    borderBottomWidth: 2,
    borderTopWidth: 2,
  },
  selectedItems: {
    borderRadius: 10,
    zIndex: 2,
    backgroundColor: "#fefefe",
    position: "absolute",
    right: 5,
    top: -2,
  },
  leftTab: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 3,
  },
  zoyloTxt: {
    color: "#201F64",
    left: -5,
    fontSize: 25,
    fontWeight: "bold",
  },
  gpsImg: {
    height: 25,
    width: 25,
  },
  rightTab: {
    flex: 1,

    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    justifyContent: "space-around",
  },
  card: {
    height: 250,
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  addImages: {
    width: "95%",
    height: 200,
    borderRadius: 30,
    resizeMode: "stretch",
  },

  scrollView: {},
});
