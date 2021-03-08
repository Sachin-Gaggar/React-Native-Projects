import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

console.disableYellowBox = true;

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d74",
    title: "Fourth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d52",
    title: "Fifth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d62",
    title: "Sixth Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d32",
    title: "Seventh Item",
  },
];

const Item = ({ title, index }) => {
  console.log("Rendered Item, ", index);
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  const [data, setData] = useState(DATA);
  const [isRefreshing, refreshList] = useState(false);
  const [isLoading, callApi] = useState(false);
  const renderItem = ({ item, index }) => (
    <Item index={index} title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              refreshList(true);
              setTimeout(() => {
                setData(DATA);
                refreshList(false);
              }, 5000);
            }}
          />
        }
        // keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log("OnEndReached Called");
          callApi(true);
          setTimeout(() => {
            setData([...data, ...data]);
            callApi(false);
          }, 5000);
        }}
        // ListFooterComponent
      />
      {isLoading ? (
        <View>
          <ActivityIndicator size={"small"} animating={true} color={"red"} />
        </View>
      ) : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
