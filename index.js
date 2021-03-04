/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Exercise from "./src/componenets/Exercise.js";
import App from "./App.js";
AppRegistry.registerComponent(appName, () => Exercise);
