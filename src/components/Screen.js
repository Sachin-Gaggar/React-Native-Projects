import React, { Component } from "react";

import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
  PanResponder
} from "react-native";
import Card from "./Card";
import Paginators from "./Paginators";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Data = [
  {
    src: require("../assets/exercise.png"),
    title: "FITNESS",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    src: require("../assets/powerlifting.png"),
    title: "POWERLIFTING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  },
  {
    src: require("../assets/yoga.png"),
    title: "YOGA",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
  }
];

class Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity0: new Animated.Value(1),
      opacity1: new Animated.Value(0),
      opacity2: new Animated.Value(0)
    };
  }
  swipe = new Animated.Value(0);
  scrollX = new Animated.Value(0);
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {},
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: this.swipe
        }
      ],
      { useNativeDriver: false }
    ),
    onPanResponderRelease: () => {
      if (this.swipe._value > 0) {
        this.backwardSwipe();
      } else {
        this.forwardSwipe();
      }
    }
  });
  forwardSwipe = () => {
    items = this.state;
    Object.values(items).forEach((opacity, index) => {
      if (index == 2) {
        //stop swiping at last page
      } else if (opacity._value == 1) {
        Animated.timing(this.state[`opacity${index}`], {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start();
        Animated.timing(this.state[`opacity${index + 1}`], {
          toValue: 1,
          delay: 300,
          useNativeDriver: false
        }).start();
      }
    });
  };
  backwardSwipe = () => {
    items = this.state;
    Object.values(items).forEach((opacity, index) => {
      if (index == 0) {
        //Stop swiping at first page
      } else if (opacity._value == 1) {
        console.log(index, "HEllo");
        Animated.timing(this.state[`opacity${index}`], {
          toValue: 0,
          duration: 300,
          useNativeDriver: false
        }).start();
        Animated.timing(this.state[`opacity${index - 1}`], {
          toValue: 1,
          delay: 300,
          useNativeDriver: false
        }).start();
      }
    });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View style={{ flex: 1 }} {...this.panResponder.panHandlers}>
          <Animated.View
            style={{
              flex: 1,
              position: "absolute",
              opacity: this.state.opacity0
            }}
          >
            <Card
              src={Data[0].src}
              title={Data[0].title}
              description={Data[0].description}
            />
          </Animated.View>
          <Animated.View
            style={{
              flex: 1,
              position: "absolute",
              opacity: this.state.opacity1
            }}
          >
            <Card
              src={Data[1].src}
              title={Data[1].title}
              description={Data[1].description}
            />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              opacity: this.state.opacity2,
              flex: 1
            }}
          >
            <Card
              src={Data[2].src}
              title={Data[2].title}
              description={Data[2].description}
            />
          </Animated.View>
        </Animated.View>
      </SafeAreaView>
    );
  }
}

export default Screen;
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1
  }
});
