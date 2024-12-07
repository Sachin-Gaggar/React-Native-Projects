import React, { ComponentType } from "react";
import { View, StyleSheet, Text, useColorScheme } from "react-native";
import ComponentMapping from "./ComponentMapping";

type ThemeProps = {
  light?: { props: Record<string, any> }; // Props for light theme
  dark?: { props: Record<string, any> }; // Props for dark theme
};

type DataItem = {
  component: keyof typeof ComponentMapping; // Keys from ComponentMapping
  name: string; // Unique key for the component
  content?: React.ReactNode; // Optional content for the component
  children?: DataItem[]; // Recursive children
} & ThemeProps; // Includes theme-specific props

type Props = {
  data: DataItem[];
  onButtonPress: Function;
};

const RecursiveComponent = ({ data, onButtonPress }: Props) => {
  const theme = useColorScheme();

  return data?.map((item, index) => {
    const Component = ComponentMapping[item.component];
    const themeProps = item[theme as keyof ThemeProps]?.props || {}; // Extract theme-specific props
    let componentProps = { ...themeProps };
    if (item.component === "touchableOpacity") {
      componentProps.onPress = () => onButtonPress(item.name);
    }
    console.log(themeProps, index);
    return (
      <Component key={item.name} {...componentProps}>
        {item.content}
        {item.children && (
          <RecursiveComponent
            data={item.children}
            onButtonPress={onButtonPress}
          />
        )}
      </Component>
    );
  });
};

export default RecursiveComponent;

const styles = StyleSheet.create({
  container: {},
});
