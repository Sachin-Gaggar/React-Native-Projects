// import React from "react";
// import {
//   StyleSheet,
//   View,
//   SafeAreaView,
//   Text,
//   TouchableOpacity,
//   Animated,
// } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";

// export default class AnimationEx extends React.Component {
//   constructor(props) {
//     super(props);
//     this.animationValue = React.createRef();
//     this.animationValue.current = new Animated.Value(0);
//     this.translationValue = React.createRef();
//     this.translationValue.current = new Animated.Value(0);
//   }
//   fade = () => {
//     Animated.spring(this.animationValue.current, {
//       toValue: 1,
//       // duration: 10000,
//       useNativeDriver: true,
//     }).start();
//   };
//   transform = () => {
//     return {
//       transform: [
//         {
//           translateY: this.animationValue.current.interpolate({
//             inputRange: [0, 1],
//             outputRange: [0, 300],
//           }),
//         },
//         {
//           scale: this.animationValue.current.interpolate({
//             inputRange: [0, 1],
//             outputRange: [0, 2],
//           }),
//         },
//         {
//           rotate: this.animationValue.current.interpolate({
//             inputRange: [0, 1],
//             outputRange: ["0deg", "180deg"],
//           }),
//         },
//       ],
//     };
//   };
//   render() {
//     console.log(this.animationValue.current);
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.bold}>Animation</Text>
//         <TouchableOpacity
//           style={[styles.animatedViewContainer, { backgroundColor: "yellow" }]}
//           onPress={this.fade}
//         >
//           <Text>Click here to fade</Text>
//         </TouchableOpacity>
//         <Animated.View
//           style={[
//             styles.animatedViewContainer,
//             { opacity: this.animationValue.current },

//             this.transform(),
//           ]}
//         >
//           <Text style={styles.bold}>Animated View</Text>
//         </Animated.View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   bold: {
//     fontSize: 30,
//   },
//   animatedViewContainer: {
//     padding: 20,
//     backgroundColor: "red",
//   },
// });
