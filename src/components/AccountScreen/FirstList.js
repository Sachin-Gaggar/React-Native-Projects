import { firstList } from "./Data";
import React from "react";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

export default class FirstList extends React.Component {
  renderItem = ({ item }) => {
    return (
      <View
        style={[
          styles.list,
          item.name === "Notifications" ? styles.border : null,
        ]}
      >
        <View style={styles.row}>
          <View>
            <Image style={styles.img} source={item.src} />
          </View>
          <View>
            <Text style={styles.bold}>{item.name}</Text>
          </View>
        </View>
        <View style={styles.row}>
          {item.name === "Country" ? (
            <>
              <View>
                <Image style={styles.img} source={item.flag} />
              </View>
              <View>
                <Text>{item.country}</Text>
              </View>
            </>
          ) : null}
          {item.name === "Language" ? (
            <View>
              <Text style={styles.bold}>{item.language}</Text>
            </View>
          ) : null}
          <View>
            <Image
              style={styles.img}
              source={require("../../assets/more.png")}
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={firstList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderBottomColor: "#F2F2F2",
  },
  border: {
    borderBottomWidth: 10,
    borderBottomColor: "#F2F2F2",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
    padding: 10,
  },
  img: {
    height: 30,
    width: 30,
  },
});
