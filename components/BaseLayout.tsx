import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { SharedValue } from "react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
const width = Dimensions.get("screen").width;
type Props = {
  size: number;
  index: number;
  offsetX: SharedValue<number>;
  totalSize: number;
  visibleItems: number;
  dataLength: number;
  margin: number;
  height: number;
};

const BaseLayout = (props: Props) => {
  const {
    size,
    index,
    offsetX,
    totalSize,
    visibleItems,
    dataLength,
    margin = 10,
    height,
  } = props;

  const animatedStyle = useAnimatedStyle(() => {
    let offsetValue = offsetX.value;
    if (
      offsetValue < 0 &&
      Math.abs(offsetValue) / ((size + margin) * (dataLength - visibleItems)) >
        1
    ) {
      if (index < visibleItems) {
        offsetValue =
          width +
          (offsetValue % ((size + margin) * (dataLength - visibleItems)));
      }
    } else if (offsetValue > 0) {
      if (index > visibleItems || offsetValue > visibleItems * (size + margin))
        offsetValue = -(totalSize + margin * dataLength) + offsetX.value;
    }

    return {
      transform: [{ translateX: offsetValue }],
    };
  }, []);
  return (
    <Animated.View
      style={[
        {
          width: size,
          marginLeft: margin,
          backgroundColor: "grey",
          height: height,
          position: "relative",
        },
        animatedStyle,
      ]}
    >
      {props?.children}
    </Animated.View>
  );
};
export default BaseLayout;
const styles = StyleSheet.create({
  container: {},
});
