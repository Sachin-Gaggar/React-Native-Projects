/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import App from "./App.js";

import Exercise1 from "./src/components/Exercise1.js";
import Exercise2 from "./src/components/Exercise2.js";
import Exercise3 from "./src/components/Exercise3.js";
AppRegistry.registerComponent(appName, () => Exercise1);
