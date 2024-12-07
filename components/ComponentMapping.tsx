import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export type ComponentType = "view" | "text" | "touchableOpacity";

type ComponentMappingType = {
  [key in ComponentType]: React.ComponentType<any>;
};

const ComponentMapping: ComponentMappingType = {
  view: View,
  text: Text,
  touchableOpacity: TouchableOpacity,
};

export default ComponentMapping;
