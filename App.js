import React from 'react';
import Routes from './src/Routes';
import {NavigationContainer} from '@react-navigation/native';

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    );
  }
}
