import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-switch";
import Slider from "react-native-slider";

const SwitchSlider = () => {
  const [isSliderOn, setSliderOn] = useState(false);
  const [value, setValue] = useState(0);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.switch}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>
            Turn Switch {!isSliderOn ? "on" : "off"} for Slider
          </Text>
        </View>
        <View>
          <Switch
            value={isSliderOn}
            onValueChange={() => setSliderOn(!isSliderOn)}
            circleSize={30}
          />
        </View>
      </View>
      {isSliderOn ? (
        <View style={styles.slider}>
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={0}
            maximumValue={10}
            value={value}
            minimumTrackTintColor='blue'
            step={1}
            maximumTrackTintColor='grey'
            onValueChange={setValue}
          />
          <Text style={styles.txt}>Value : {value}</Text>
        </View>
      ) : null}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  switch: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
  },
  txtContainer: {
    marginRight: 20,
  },
  slider: { width: "80%" },
  txt: {
    textAlign: "center",
    fontSize: 20,
  },
});
export default SwitchSlider;
