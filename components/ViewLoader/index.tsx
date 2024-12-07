import React from "react";
import { View, StyleSheet, Text, ViewStyle } from "react-native";
import AnimationLoading from "./AnimationLoading";
type layoutProps = {
  component: "view" | "loader";
  name?: string;
  style?: ViewStyle;
  content?: layoutProps[];
};
type Props = {
  loaderView: layoutProps[];
  isLoading: boolean;
  children: React.ElementType;
};
const ViewLoader = (props: Props) => {
  if (!props.isLoading) return props.children;
  const renderLoader = (childProp?: layoutProps[]) =>
    childProp?.map((item) => {
      if (item.component === "loader") {
        return <AnimationLoading />;
      } else
        return <View style={item.style}>{renderLoader(item?.content)}</View>;
    });
  return renderLoader(props.loaderView);
};
export default ViewLoader;
const styles = StyleSheet.create({
  container: {},
});
