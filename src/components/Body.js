import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Data = [
  {
    image: require("../assets/shirt1.jpg"),
    description: "something about brand in short description",
    price: 23,
  },
  {
    image: require("../assets/shirt2.jpg"),
    description: "something about brand in short description",
    price: 30,
  },
  {
    image: require("../assets/shirt3.jpg"),
    description: "something about brand in short description",
    price: 35,
  },
  {
    image: require("../assets/shirt4.jpg"),
    description: "something about brand in short description",
    price: 34,
  },
];
export default Body = () => {
  return (
    <ScrollView>
      <View style={styles.body}>
        {Data.map((item, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.imageContainer}>
              <View style={styles.new}>
                <Text style={styles.newTxt}>NEW</Text>
              </View>

              <Image style={styles.image} source={item.image} />

              <TouchableOpacity style={styles.like}>
                <Image source={require("../assets/like.png")} />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.brand}>Tommy Hillfiger</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.price}>USD {item.price}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  card: {
    width: "47.5%",
    marginLeft: "2.5%",
    zIndex: 0,
    marginVertical: 10,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 250,

    resizeMode: "cover",
  },
  new: {
    position: "absolute",
    zIndex: 1,
    padding: 4,
    backgroundColor: "green",
  },
  newTxt: {
    color: "white",
  },
  like: {
    position: "absolute",
    borderRadius: 25,
    zIndex: 1,
    top: 4,
    right: 4,
    padding: 4,
    backgroundColor: "#ffffff",
  },
  brand: {
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 5,
  },
  description: {
    color: "#5f5f5f",
    marginBottom: 5,
  },
});
