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
import LoaderJSON from "@/constants/LoaderExample.json";
import RecursiveComponent from "@/components/RecursiveComponent";
import ViewLoader from "@/components/ViewLoader";
type Props = {};
const LoaderExample = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ViewLoader
          isLoading
          loaderView={LoaderJSON.loaderView}
          children={<></>}
        />
      </View>
    </SafeAreaView>
  );
};
export default LoaderExample;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
