/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

messaging().setBackgroundMessageHandler(async (msg) =>
  console.log('Inside setBackgroundMessageHandler', msg),
);
AppRegistry.registerComponent(appName, () => App);
