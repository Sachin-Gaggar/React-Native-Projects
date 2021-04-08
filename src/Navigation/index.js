import {StackActions} from '@react-navigation/routers';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import Audio from '../Screens/Audio';
import Map from '../Screens/Map';
import Video from '../Screens/Video';

const Stack = createStackNavigator();
export default class Navigation extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Audio" component={Audio} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Video" component={Video} />
      </Stack.Navigator>
    );
  }
}
