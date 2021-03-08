/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import Webview from "./src/components/Webview.js";
import SwitchSlider from "./src/components/SwitchSlider";
import Pagination from "./src/components/Pagination";
AppRegistry.registerComponent(appName, () => SwitchSlider);
