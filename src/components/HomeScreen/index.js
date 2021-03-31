import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";
const filterItmes = [
  "Polo Shirts",
  "Dress Shirts",
  "Shorts",
  "T-Shirts & V-Necks",
  "Suits",
];
import { Data } from "./Data";
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tab}>
          <View style={styles.item}>
            <Text style={styles.fade}>195 items</Text>
          </View>
          <View style={styles.sort}>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={require("../../assets/sort.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text style={styles.longTxt}>SORT</Text>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.fade}> | </Text>
            </View>
            <TouchableOpacity>
              <Image
                style={styles.img}
                source={require("../../assets/filter.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <View>
                <Text style={styles.strongTxt}>FILTER</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {filterItmes.map((items, index) => (
              <TouchableOpacity key={index}>
                <View style={styles.shadowBox}>
                  <Text style={styles.strongTxt}>{items}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <ScrollView>
          <View style={styles.body}>
            {Data.map((item, index) => {
              return (
                <Card
                  key={index}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                  expires={item.expires}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center",
    padding: 15,
    borderBottomColor: "#efefef",
  },
  fade: {
    color: "#bbbbbb",
  },
  item: {
    flex: 5,
  },
  sort: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 20,
  },
  strongTxt: {
    fontWeight: "500",
    fontSize: 14,
  },

  longTxt: {
    fontSize: 18,
  },
  shadowBox: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#eeeeee",
  },
  body: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
});
