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
import Example2 from "@/constants/Example2.json";
import Demo from "@/constants/Demo.json";
import RecursiveComponent from "@/components/RecursiveComponent";
type Props = {};
const deviceHeight = Dimensions.get("screen").height;
const CardExample = (props: Props) => {
  const onPress = (name) => {
    Alert.alert("Hi", name);
  };
  return (
    <SafeAreaView style={styles.container}>
      {<RecursiveComponent data={Example2.data} onButtonPress={onPress} />}
    </SafeAreaView>
  );
};
export default CardExample;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
