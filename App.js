import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

function HomeScreen() {
  const filterItmes = [
    "Polo Shirts",
    "Dress Shirts",
    "Shorts",
    "T-Shirts & V-Necks",
    "Suits",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.tab}>
        <View style={styles.item}>
          <Text style={styles.fade}>195 items</Text>
        </View>
        <View style={styles.sort}>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require("../TTN-Exercise/src/assets/sort.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text style={styles.longTxt}>SORT</Text>
            </View>
          </TouchableOpacity>

          <View>
            <Text style={styles.fade}> | </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={styles.img}
              source={require("../TTN-Exercise/src/assets/filter.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Text style={styles.strongTxt}>FILTER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {filterItmes.map((items) => (
            <TouchableOpacity>
              <View style={styles.shadowBox}>
                <Text style={styles.strongTxt}>{items}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={require("../TTN-Exercise/src/assets/shirt1.jpg")}
            />
          </View>
          <View style={styles.content}>
            <Image
              style={styles.image}
              source={require("../TTN-Exercise/src/assets/shirt2.jpg")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
}
function MyCartScreen() {
  return (
    <View style={styles.container}>
      <Text>My Cart</Text>
    </View>
  );
}
function WishListScreen() {
  return (
    <View style={styles.container}>
      <Text>Whish list</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            if (focused) {
              return (
                <Image
                  style={styles.icon}
                  source={require("../TTN-Exercise/src/assets/HomeActive.png")}
                />
              );
            } else {
              return (
                <Image
                  style={styles.icon}
                  source={require("../TTN-Exercise/src/assets/HomeInactive.png")}
                />
              );
            }
          } else if (route.name === "Categories") {
            return (
              <Image
                style={styles.icon}
                source={require("../TTN-Exercise/src/assets/categories.png")}
              />
            );
          } else if (route.name === "My Cart") {
            return (
              <Image
                style={styles.icon}
                source={require("../TTN-Exercise/src/assets/shopping.png")}
              />
            );
          } else if (route.name === "Wish List") {
            return (
              <Image
                style={styles.icon}
                source={require("../TTN-Exercise/src/assets/wish.png")}
              />
            );
          } else {
            return (
              <Image
                style={styles.icon}
                source={require("../TTN-Exercise/src/assets/account.png")}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Categories' component={CategoriesScreen} />
      <Tab.Screen name='My Cart' component={MyCartScreen} />
      <Tab.Screen name='Wish List' component={WishListScreen} />
      <Tab.Screen name='Account' component={AccountScreen} />
    </Tab.Navigator>
  );
};
const StackScreen = createStackNavigator();
function HomeStack() {
  return (
    <StackScreen.Navigator>
      <StackScreen.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: "Men Clothing",
        }}
      />
    </StackScreen.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <TabContainer />
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  tab: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    alignItems: "center",
    padding: 15,
    borderBottomColor: "#efefef",
  },
  fade: {
    color: "#bbbbbb",
  },
  item: {
    flex: 5,
  },
  sort: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  img: {
    width: 20,
    height: 20,
  },
  strongTxt: {
    fontWeight: "500",
    fontSize: 14,
  },

  longTxt: {
    fontSize: 18,
  },
  shadowBox: {
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#eeeeee",
  },
  body: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  content: {
    width: "47%",
    marginHorizontal: 6,
    marginTop: 10,
    marginBottom: 20,
  },
  image: { height: 300, width: "100%", resizeMode: "cover" },
  icon: {},
});

export default App;
