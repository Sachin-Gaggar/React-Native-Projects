import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Add from '../Screens/Add';
import Emplyees from '../Screens/Employees';

const Stack = createStackNavigator();

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator initialRouteName="Employees">
        <Stack.Screen
          name="Employees"
          options={{headerShown: false}}
          component={Emplyees}
        />
        <Stack.Screen
          name="Add"
          component={Add}
          options={{
            title: 'Add Employees',
          }}
        />
      </Stack.Navigator>
    );
  }
}
