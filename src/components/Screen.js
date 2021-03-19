import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import Paginators from "./Paginators";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const Data = [
  {
    src: require("../assets/exercise.png"),
    title: "FITNESS",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    src: require("../assets/powerlifting.png"),
    title: "POWERLIFTING",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    src: require("../assets/yoga.png"),
    title: "YOGA",
    discription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
];

export default class Screen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: new Animated.Value(0),
      currentIndex: 0,
    };
  }
  onViewableItemsChanged = ({ viewableItems }) => {
    this.setState({
      currentIndex: viewableItems[0].index,
    });
  };
  componentDidMount() {}
  renderItem = ({ item }) => (
    <View style={styles.box}>
      <Image style={styles.image} source={item.src} />
      <View style={styles.content}>
        <Text style={styles.bold}>{item.title}</Text>
        <Text style={styles.light}>{item.discription}</Text>
      </View>
    </View>
  );

  render() {
    const { scrollX } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView
            horizontal
            pagingEnabled
            bounces={false}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={40}
            onViewableItemsChanged={this.onViewableItemsChanged}
          >
            {Data.map((item, index) => {
              const opacity = scrollX.interpolate({
                inputRange: [
                  (index - 1) * width,
                  index * width,
                  (index + 1) * width,
                ],
                outputRange: [0, 1, 0],
                extrapolate: "clamp",
              });

              return (
                <Animated.View
                  style={[styles.box, { opacity }]}
                  key={index.toString()}
                >
                  <View style={styles.imageContainer}>
                    <Image style={styles.image} source={item.src} />
                  </View>
                  <View style={styles.content}>
                    <Text style={styles.bold}>{item.title}</Text>
                    <Text style={styles.light}>{item.discription}</Text>
                  </View>
                </Animated.View>
              );
            })}
          </ScrollView>
        </View>
        <Paginators data={Data} scrollX={scrollX} width={width} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",

    flex: 1,
  },
  box: {
    width,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
  },
  image: {
    width,
    height,
    flex: 0.7,
    resizeMode: "contain",
  },
  content: {
    flex: 0.3,
  },
  bold: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
    color: "#2F485E",
    fontWeight: "bold",
  },
  light: {
    textAlign: "center",
  },
});
