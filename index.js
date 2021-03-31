/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Routes from "./src/components/Routes";
AppRegistry.registerComponent(appName, () => Routes);
