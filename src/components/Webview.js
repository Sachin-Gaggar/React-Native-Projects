import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";

const Webview = () => {
  const [isLoading, setLoading] = useState(false);
  const url = "https://www.google.com";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: url }}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      <View style={styles.indicator}>
        <ActivityIndicator size='large' color='grey' animating={isLoading} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  indicator: {
    position: "absolute",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});

export default Webview;
