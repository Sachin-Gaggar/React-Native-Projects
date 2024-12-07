import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Alert,
  Button,
} from "react-native";
import Example from "@/constants/Example.json";
import LoaderExample from "@/constants/LoaderExample.json";
import Demo from "@/constants/Demo.json";
import RecursiveComponent from "@/components/RecursiveComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import AnimationLoading from "@/components/ViewLoader/AnimationLoading";
import ViewLoader from "@/components/ViewLoader";
type Props = {};
const deviceHeight = Dimensions.get("screen").height;
const App = (props: Props) => {
  const router = useRouter();
  const onPress = (name) => {
    Alert.alert("Hi", name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.txt}>Server Driven UI KM</Text>
      </View>
      <Button
        title={"Demo Example"}
        onPress={() => router.navigate("/DemoExample")}
      />
      <Button
        title={"Card Example"}
        onPress={() => router.navigate("/CardExample")}
      />
      <Button
        title={"Loader Example"}
        onPress={() => router.navigate("/LoaderExample")}
      />
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
  },
  txt: {
    textAlign: "center",

    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 32,
  },
});
