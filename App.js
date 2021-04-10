import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CloudMessage from './src/Screen/CloudMessage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CloudMessage />;
  }
}
