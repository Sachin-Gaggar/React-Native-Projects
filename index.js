/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import ModalGif from "./src/components/ModalGif";
import Sectionlist from "./src/components/Sectionlist";
import Stackscreen from "./src/components/Stackscreen";
AppRegistry.registerComponent(appName, () => Stackscreen);
