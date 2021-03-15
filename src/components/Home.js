import React from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Alert,
  View,
} from "react-native";
import Functionalities from "./Fuctionalities";
import Packages from "./Packages";
import TopView from "./TopView";
import Categories from "./Categories";
import FooterCard from "./FooterCard";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  alertCall = (item) => {
    Alert.alert("Clicked", "You have Clicked on " + item);
  };
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ width: "100%" }}>
          <TopView alertCall={this.alertCall} />
          <Functionalities alertCall={this.alertCall} />
          <View style={styles.darkContainer}>
            <View style={styles.rowTxt}>
              <View>
                <Text style={styles.txt}>Diagnostic Packages by Zolo Labs</Text>
              </View>

              <TouchableOpacity>
                <Text
                  style={styles.viewTxt}
                  onPress={() => this.alertCall("View All")}
                >
                  View All
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <Packages
                colorStart={"#E9DEEE"}
                colorEnd={"#E8DEEE"}
                name={"Zoylo Health Checkup with Iron Studies"}
                tests={"83 Test Included"}
                originalPrice={"3250.00"}
                discountedPrice={"1299.00"}
                discount={"60% off"}
                alertCall={this.alertCall}
              />
              <Packages
                colorStart={"#D3D4E3"}
                colorEnd={"#D2D3E3"}
                name={"Fever Package"}
                tests={"66 Test Included"}
                originalPrice={"3300.00"}
                discountedPrice={"1299.00"}
                discount={"61% off"}
                alertCall={this.alertCall}
              />
              <Packages
                colorStart={"#E9DEEE"}
                colorEnd={"#E8DEEE"}
                name={"Female Comprehensive Pack"}
                tests={"83 Test Included"}
                originalPrice={"3250.00"}
                discountedPrice={"1299.00"}
                discount={"60% off"}
                alertCall={this.alertCall}
              />

              <Packages
                colorStart={"#E9DEEE"}
                colorEnd={"#E8DEEE"}
                name={"Zoylo Health Checkup with Iron Studies"}
                tests={"83 Test Included"}
                originalPrice={"3250.00"}
                discountedPrice={"1299.00"}
                discount={"60% off"}
                alertCall={this.alertCall}
              />
              <Packages
                colorStart={"#D3D4E3"}
                colorEnd={"#D2D3E3"}
                name={"Fever Package"}
                tests={"66 Test Included"}
                originalPrice={"3300.00"}
                discountedPrice={"1299.00"}
                discount={"61% off"}
                alertCall={this.alertCall}
              />
              <Packages
                colorStart={"#E9DEEE"}
                colorEnd={"#E8DEEE"}
                name={"Female Comprehensive Pack"}
                tests={"83 Test Included"}
                originalPrice={"3250.00"}
                discountedPrice={"1299.00"}
                discount={"60% off"}
                alertCall={this.alertCall}
              />
            </ScrollView>
            <View style={styles.pad}>
              <Text style={styles.txt}>Medicine Categories</Text>
            </View>
            <Categories alertCall={this.alertCall} />
          </View>

          <FooterCard alertCall={this.alertCall} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
  },
  darkContainer: {
    backgroundColor: "#F4F5F7",
    paddingVertical: 10,
  },
  rowTxt: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  txt: {
    fontSize: 15,
  },
  viewTxt: { color: "orange" },
  pad: {
    marginTop: 15,
    margin: 10,
  },
});
