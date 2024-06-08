import React from "react";
import { Dimensions, StyleSheet, View, Text } from "react-native";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
} from "react-native-reanimated";
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from "react-native-gesture-handler";
import BaseLayout from "./BaseLayout";

const { width } = Dimensions.get("window");
const itemWidth = 200; // Adjust this value for item width
const margin = 10;
const height = 100;
const data = Array.from({ length: 5 }).map((_, i) => `Item ${i + 1}`);
const defaultIndex = 0;
const mainItemInCenter = true;
const Carousel = () => {
  const visibleItems = width / (itemWidth + margin);
  const leftAlignOffset = (itemWidth + margin) * defaultIndex;
  const centeredItemOffset = leftAlignOffset - (width - itemWidth) / 2;
  const offsetX = useSharedValue(
    mainItemInCenter ? -centeredItemOffset : -leftAlignOffset
  );
  const totalSize = itemWidth * data.length;
  const onPan = Gesture.Pan()
    .onChange((event) => {
      offsetX.value += event.changeX;
    })
    .onFinalize((eve) => {
      let panSwipeValue = eve.translationX;
      let travelledValue = Math.abs(panSwipeValue) / (itemWidth + margin);
      let remainingValue = Math.ceil(travelledValue) - travelledValue;
      let addingExtraForSwipe = remainingValue * (itemWidth + margin);
      if (panSwipeValue < 0) {
        offsetX.value = withSpring(offsetX.value - addingExtraForSwipe);
      } else {
        offsetX.value = withSpring(offsetX.value + addingExtraForSwipe);
      }
    });
  const modulusX = useDerivedValue(() => {
    let offset = offsetX.value % (totalSize + margin * data.length);
    return offset;
  }, []);

  const renderItem = (item, index) => {
    return (
      <BaseLayout
        size={itemWidth}
        totalSize={totalSize}
        index={index}
        offsetX={modulusX}
        visibleItems={visibleItems}
        dataLength={data?.length}
        margin={margin}
        height={height}
      >
        <View>
          <Text>{item}</Text>
        </View>
      </BaseLayout>
    );
  };
  return (
    <GestureDetector gesture={onPan}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
        }}
      >
        {data.map((item, index) => renderItem(item, index))}
      </View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: itemWidth * data.length,
  },
  item: {
    position: "absolute",
    width: itemWidth,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
  },
  text: {
    fontSize: 20,
  },
});

export default Carousel;
