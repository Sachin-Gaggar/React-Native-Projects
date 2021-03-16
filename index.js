/**
 * @format
 */

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import InputComponent from "./src/components/InputComponent";
import LoginScreen from "./src/components/LoginScreen";
import StackScreen from "./src/components/StackScreen";

AppRegistry.registerComponent(appName, () => StackScreen);
