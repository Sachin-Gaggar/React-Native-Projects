/**
 * @format
 */

import { AppRegistry } from "react-native";

import { name as appName } from "./app.json";
import GestureEx from "./src/components/GestureEx.js";
import MapViewEx from "./src/components/MapViewEx";

AppRegistry.registerComponent(appName, () => MapViewEx);
