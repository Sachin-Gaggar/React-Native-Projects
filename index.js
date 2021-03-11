/**
 * @format
 */

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import BackPress from "./src/components/BackPress";
import ClipboardStack from "./src/components/ClipboardStack";
AppRegistry.registerComponent(appName, () => BackPress);
