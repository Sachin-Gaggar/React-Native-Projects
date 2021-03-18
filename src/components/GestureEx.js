import React, { Component } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Platform,
  Text,
} from "react-native";

export default class GestureEx extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };

    this.panHandling();
  }

  panHandling() {
    this._val = { x: 0, y: 0 };
    this.state.pan.addListener((value) => (this._val = value));
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y,
        });
        this.state.pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: this.state.pan.x, dy: this.state.pan.y }],
        { useNativeDriver: false }
      ),
    });
  }

  render() {
    const panStyle = {
      transform: this.state.pan.getTranslateTransform(),
    };
    return (
      <View style={styles.container}>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[panStyle, styles.circle]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "white",
    borderColor: "#AAAAAA",
    borderWidth: 5,
    width: 40,
    height: 40,
    borderRadius: 20,
    zIndex: 10,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1.25,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
