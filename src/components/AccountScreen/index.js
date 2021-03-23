import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import FirstList from "./FirstList";
import Welcome from "./Welcome";

export default class AccountScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Welcome />
        <ScrollView>
          <FirstList />
          <View style={styles.version}>
            <Text style={styles.fade}>App Version 4.0.6</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  version: {
    padding: 20,
    backgroundColor: "#F2F2F2",
  },
  fade: {
    fontSize: 15,
    textAlign: "center",
    color: "#BCBCBC",
  },
});
