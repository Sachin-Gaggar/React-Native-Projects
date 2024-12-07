import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Dimensions,
  Alert,
} from "react-native";
import Example from "@/constants/Example.json";
import Demo from "@/constants/Demo.json";
import RecursiveComponent from "@/components/RecursiveComponent";
type Props = {};
const DemoExample = (props: Props) => {
  const onPress = (name) => {
    Alert.alert("Hi", name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <RecursiveComponent data={Example.data} onButtonPress={onPress} />
    </SafeAreaView>
  );
};
export default DemoExample;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
