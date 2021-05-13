// // import React, { Component } from "react";
// // import {
// //   StyleSheet,
// //   View,
// //   PanResponder,
// //   Animated,
// //   Platform,
// //   Text
// // } from "react-native";

// // export default class GestureEx extends Component {
// //   constructor(props) {
// //     super(props);

// //     this.state = {
// //       pan: new Animated.ValueXY()
// //     };
// //     this._panResponder = PanResponder.create({
// //       onMoveShouldSetPanResponder: () => true,
// //       onPanResponderGrant: () => {
// //         this.state.pan.setOffset({
// //           x: this.state.pan.x._value,
// //           y: this.state.pan.y._value
// //         });
// //       },
// //       onPanResponderMove: Animated.event(
// //         [null, { dx: this.state.pan.x, dy: this.state.pan.y }],
// //         { useNativeDriver: false }
// //       ),
// //       onPanResponderRelease: () => {
// //         this.state.pan.flattenOffset();
// //       }
// //     });
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Animated.View
// //           style={[
// //             styles.circle,
// //             {
// //               transform: [
// //                 { translateX: this.state.pan.x },
// //                 { translateY: this.state.pan.y }
// //               ]
// //             }
// //           ]}
// //           {...this._panResponder.panHandlers}
// //         />
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1
// //   },
// //   circle: {
// //     position: "absolute",
// //     top: 20,
// //     left: 20,
// //     backgroundColor: "white",
// //     borderColor: "#AAAAAA",
// //     borderWidth: 5,
// //     width: 40,
// //     height: 40,
// //     borderRadius: 20,
// //     zIndex: 10,
// //     ...Platform.select({
// //       ios: {
// //         shadowColor: "black",
// //         shadowOffset: { width: 0, height: 1 },
// //         shadowOpacity: 1.25,
// //         shadowRadius: 5
// //       },
// //       android: {
// //         elevation: 5
// //       }
// //     })
// //   }
// // });
// import React, { Component } from "react";
// import {
//   StyleSheet,
//   View,
//   PanResponder,
//   Animated,
//   Platform,
//   Text
// } from "react-native";

// export default class GestureEx extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       pan: new Animated.ValueXY()
//     };

//     this.panHandling();
//   }

//   panHandling() {
//     this._val = { x: 0, y: 0 };
//     this.state.pan.addListener((value) => (this._val = value));
//     this.panResponder = PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         console.log("Start of pan grant", this.state);
//         this.state.pan.setOffset({
//           x: this._val.x,
//           y: this._val.y
//         });
//         this.state.pan.setValue({ x: 0, y: 0 });
//         console.log("After", this.state.pan);
//       },
//       onPanResponderMove: Animated.event(
//         [null, { dx: this.state.pan.x, dy: this.state.pan.y }],
//         { useNativeDriver: false }
//       )
//     });
//   }

//   render() {
//     const panStyle = {
//       transform: this.state.pan.getTranslateTransform()
//     };
//     return (
//       <View style={styles.container}>
//         <Animated.View
//           {...this.panResponder.panHandlers}
//           style={[panStyle, styles.circle]}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   circle: {
//     position: "absolute",
//     top: 20,
//     left: 20,
//     backgroundColor: "white",
//     borderColor: "#AAAAAA",
//     borderWidth: 5,
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     zIndex: 10,
//     ...Platform.select({
//       ios: {
//         shadowColor: "black",
//         shadowOffset: { width: 0, height: 1 },
//         shadowOpacity: 1.25,
//         shadowRadius: 5
//       },
//       android: {
//         elevation: 5
//       }
//     })
//   }
// });
import React from "react";
import { Animated, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
const circleRadius = 30;
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default class Circle extends React.Component {
  _touchX = new Animated.Value(windowWidth / 2 - circleRadius);
  _touchY = new Animated.Value(windowWidth / 2 - circleRadius);
  _onPanGestureEvent = Animated.event(
    [{ nativeEvent: { x: this._touchX, y: this._touchY } }],
    {
      useNativeDriver: true
    }
  );
  render() {
    return (
      <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
        <Animated.View
          style={{
            height: 150,
            justifyContent: "center"
          }}
        >
          <Animated.View
            style={[
              {
                backgroundColor: "#42a5f5",
                borderRadius: circleRadius,
                height: circleRadius * 2,
                width: circleRadius * 2
              },
              {
                transform: [
                  {
                    translateX: Animated.add(
                      this._touchX,
                      new Animated.Value(-circleRadius)
                    )
                  },
                  {
                    translateY: Animated.add(
                      this._touchY,
                      new Animated.Value(-circleRadius)
                    )
                  }
                ]
              }
            ]}
          />
        </Animated.View>
      </PanGestureHandler>
    );
  }
}
