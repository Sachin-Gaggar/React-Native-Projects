import React, {Component} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import CounterChild from './CounterChild';

class Counter extends Component {
  constructor() {
    super();
    this.state = {count: 0};
  }

  static getDerivedStateFromProps(props, state) {
    console.log('inside parent getDerivedStateFromProps ', props, state);
    return null;
  }

  componentDidMount() {
    console.log('inside parent component DidMount');
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('inside parent shouldComponentUpdate', nextProps, nextState);
    return true;
  }
  getSnapshotBeforeUpdate(props, state) {
    console.log('inside parent getSnapshotBeforeUpdate', props, state);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      'inside parent componentDidUpdate',
      prevProps,
      prevState,
      snapshot,
    );
  }
  componentWillUnmount() {
    console.log('inside parent componentWillUnmount');
  }

  press() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    {
      console.log('inside render parent');
    }
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{backgroundColor: 'grey'}}>
          <TouchableOpacity onPress={() => this.press()}>
            <Text style={{textAlign: 'center', fontSize: 30}}>Click Me</Text>
          </TouchableOpacity>
        </View>
        <CounterChild count={this.state.count} />
      </View>
    );
  }
}
export default Counter;
