import React from "react";
import {
  SafeAreaView,
  SectionList,
  StatusBar,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import LinearGradient from "react-native-linear-gradient";
import sampleData from "../TTN-Exercise/src/assets/sample.json";
const sample = sampleData.reduce((acc, cur) => {
  let TITLE = cur.primaryCategory.categoryName;
  let newTitle = true;
  acc.forEach((item, index) => {
    if (item.title === TITLE) {
      acc[index].data.push(cur.productName);
      newTitle = false;
    }
  });
  if (newTitle) {
    acc.push({ title: TITLE, data: [cur.productName] });
    return acc;
  } else {
    return acc;
  }
}, []);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: {},
      checked: false,
    };
  }
  deleteName = (item) => {
    let { name } = this.state;
    delete name[item];
    this.setState({ name: name });
  };
  renderItem = (item) => {
    return (
      <View style={styles.items}>
        <Text>{item}</Text>

        <CheckBox
          boxType='square'
          tintColor={"#555555"}
          style={{
            width: 20,
            height: 20,
          }}
          onValueChange={(value) =>
            value
              ? this.setState({
                  name: { [item]: "checked", ...this.state.name },
                })
              : this.deleteName(item)
          }
        />
      </View>
    );
  };
  Continue = () => {
    return (
      <TouchableOpacity style={styles.continue}>
        <Text style={styles.txtButton}>Continue</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { name } = this.state;
    console.log(name);
    return (
      <>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["rgba(26,36,68,0.9)", "rgba(0,73,78,0.9)"]}
        >
          <SafeAreaView />

          <Text style={styles.lightHeading}>
            Store Selected :
            <Text style={styles.boldHeading}> Coop Moolndal Aby</Text>
          </Text>
          <TextInput />
          <View style={styles.search}>
            <Image
              style={styles.img}
              source={require("../TTN-Exercise/src/assets/check.png")}
            />
          </View>
        </LinearGradient>
        <SectionList
          sections={sample}
          keyExtractor={(item, index) => [item + index]}
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={({ section }) => (
            <View style={styles.items}>
              <Text style={styles.title}>{section.title}</Text>
            </View>
          )}
        />
        {!(Object.keys(name).length === 0) ? this.Continue() : null}
        <SafeAreaView />
      </>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    padding: 10,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#f1f1f1",
    borderBottomWidth: 1,
  },
  lightHeading: {
    color: "white",
    padding: 10,
  },
  boldHeading: {
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  search: {
    backgroundColor: "#eeeeee",
    width: "90%",
    padding: 7,
    borderRadius: 10,
    marginHorizontal: "5%",
    marginBottom: 10,
  },
  img: {
    position: "absolute",
    top: 3,
    left: 3,
  },
  continue: {
    backgroundColor: "rgba(0,73,78,0.9)",
    color: "white",
    alignItems: "center",
    padding: 7,
  },
  txtButton: {
    marginVertical: 5,
    fontSize: 20,
    color: "white",
  },
});
