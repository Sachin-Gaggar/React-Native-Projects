import { Ionicons } from "@expo/vector-icons";
import { ParamListBase } from "@react-navigation/native";
import { NativeStackNavigationOptions } from "react-native-screens/lib/typescript/native-stack/types";

type screenOption =
  | NativeStackNavigationOptions
  | ((props: {
      route: import("@react-navigation/native").RouteProp<
        ParamListBase,
        string
      >;
      navigation: any;
    }) => NativeStackNavigationOptions)
  | undefined;

const screenHeader = (router, title): screenOption => ({
  headerLeft: () => (
    <Ionicons
      name={"arrow-back"}
      size={25}
      color="black"
      onPress={() => router.back()}
    />
  ),
  headerTitle: title,
  headerShown: true,
});
export default screenHeader;
