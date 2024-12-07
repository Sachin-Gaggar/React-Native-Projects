import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

type Props = {};
const AnimationLoading = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const animationEffect = Animated.loop(
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      })
    );
    animationEffect.start();
    return () => animationEffect.stop();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#ccc",
          flex: 1,
          overflow: "hidden",
        }}
        onLayout={(e) => {
          console.log(e.nativeEvent.layout.width);
          setWidth(e.nativeEvent.layout.width);
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-width, width],
                }),
              },
            ],
          }}
        >
          <LinearGradient
            colors={["#ccc", "#eee", "#ccc"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};
export default AnimationLoading;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
