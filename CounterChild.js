import React, {Component} from 'react';
import {View, Text} from 'react-native';

class CounterChild extends Component {
  componentDidMount() {
    console.log('inside child component DidMount');
  }

  componentWillUnmount() {
    console.log('inside child componentWillUnmount');
  }
  render() {
    {
      console.log('inside child');
    }
    return (
      <View>
        <Text>You have clicked {this.props.count} times</Text>
      </View>
    );
  }
}
export default CounterChild;
