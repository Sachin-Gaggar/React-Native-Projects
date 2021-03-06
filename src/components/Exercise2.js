import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

class Exercise2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'rgb(255,255,255)',
      input: '',
    };
  }
  func = () => {
    let h = this.state.input;
    let r = 0,
      g = 0,
      b = 0;
    if (h.length == 4) {
      r = '0x' + h[1] + h[1];
      g = '0x' + h[2] + h[2];
      b = '0x' + h[3] + h[3];
    } else if (h.length == 7) {
      r = '0x' + h[1] + h[2];
      g = '0x' + h[3] + h[4];
      b = '0x' + h[5] + h[6];
    }
    let rgb = `rgb(${+r},${+g}, ${+b})`;
    if (h.length === 4 || h.length === 7) {
      this.setState({
        color: rgb,
      });
    } else {
      alert('Incorrect Hex Code');
    }
  };
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.mainContainer}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Enter the code"
              onChangeText={(text) => {
                this.setState({input: text});
              }}></TextInput>
          </View>
          <View style={styles.button}>
            <Button title="submit" onPress={() => this.func()} />
          </View>
          <View style={styles.txtContainer}>
            <Text style={styles.txt}>{this.state.color}</Text>
          </View>
          <View
            style={[styles.demo, {backgroundColor: this.state.color}]}></View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    textAlign: 'center',
    borderBottomWidth: 2,
  },
  button: {
    width: '70%',
  },
  txtContainer: {},

  txt: {
    textAlign: 'center',
  },
  demo: {
    width: '70%',
    height: 300,
    borderWidth: 2,
    borderRadius: 20,
  },
});

export default Exercise2;
