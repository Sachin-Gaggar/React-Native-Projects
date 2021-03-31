import moment from "moment";
import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdown: moment.duration().add(this.props.expires),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isExpired: false,
    };
  }
  updateTimer = () => {
    const x = setInterval(() => {
      let { countdown } = this.state;
      if (countdown <= 0) {
        clearInterval(x);
        this.setState({ isExpired: true });
      } else {
        countdown = countdown.subtract(1, "s");
        const days = countdown.days();
        const hours = countdown.hours();
        const minutes = countdown.minutes();
        const seconds = countdown.seconds();
        this.setState({
          countdown,
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);
  };
  componentDidMount() {
    this.updateTimer();
  }
  render() {
    const { days, hours, minutes, seconds, isExpired } = this.state;
    return (
      <View key={this.props.index} style={styles.card}>
        <View style={styles.imageContainer}>
          <View style={styles.new}>
            <Text style={styles.newTxt}>NEW</Text>
          </View>

          <Image style={styles.image} source={this.props.image} />

          <TouchableOpacity style={styles.like}>
            <Image source={require("../../assets/like.png")} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.brand}>Tommy Hillfiger</Text>

          <Text style={styles.description}>{this.props.description}</Text>
          <View style={styles.row}>
            <Text style={styles.price}>USD {this.props.price}</Text>
            <Text>Expires in {`${days}:${hours}:${minutes}:${seconds}`}</Text>
          </View>
        </View>
        <View
          style={isExpired ? styles.disabledContainer : styles.hiddenContainer}
        >
          <Text style={styles.center}>Expired</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    width: "47.5%",
    marginLeft: "1.6%",
    zIndex: 0,
    marginVertical: 10,
  },
  hiddenContainer: {
    opacity: 0,
    position: "absolute",
  },
  disabledContainer: {
    opacity: 0.9,
    position: "absolute",
    backgroundColor: "#aaa",
    width: "100%",
    height: "50%",
    zIndex: 1,
  },
  imageContainer: {
    position: "relative",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 250,

    resizeMode: "cover",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  new: {
    position: "absolute",
    zIndex: 1,
    padding: 4,
    backgroundColor: "green",
  },
  newTxt: {
    color: "white",
  },
  like: {
    position: "absolute",
    borderRadius: 25,
    zIndex: 1,
    top: 4,
    right: 4,
    padding: 4,
    backgroundColor: "#ffffff",
  },
  brand: {
    fontSize: 13,
    fontWeight: "400",
    marginBottom: 5,
  },
  description: {
    color: "#5f5f5f",
    marginBottom: 5,
  },
  center: {
    fontSize: 30,
    alignSelf: "center",
    top: 75,
  },
});
