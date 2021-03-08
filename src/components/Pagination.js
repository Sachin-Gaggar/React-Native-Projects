import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Button,
  RefreshControl,
  ActivityIndicator,
} from "react-native";
import { useState } from "react/cjs/react.development";

const renderItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View>
        <Text style={styles.name}>
          {item.first_name} {item.last_name}
        </Text>
        <Text style={styles.email}>{item.email}</Text>
      </View>
    </View>
  );
};

async function dataCall(page, setData, data) {
  try {
    
    const result = await fetch("https://reqres.in/api/users?page=" + page);
    const newData = await result.json();
    
    if (page == 1) {
      setData(newData.data);
    } else {
      setData([...data, ...newData.data]);
    }
  } catch (e) {
    console.log("Error is sfgsdfgsdf ", e);
  }
}

const Pagination = () => {
  const [isLoading, setLoading] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  if (!Boolean(data)) {
    console.log(Boolean(data));
    return (
      <SafeAreaView style={styles.container}>
        {!isLoading ? (
          <View style={styles.button}>
            <Button
              title='Fetch Data'
              onPress={() => {
                dataCall(page, setData, data);
                setLoading(true);
                setPage(page + 1);
              }}
            />
          </View>
        ) : (
          <ActivityIndicator
            color='grey'
            size='large'
            style={styles.indicator}
            animating={isLoading}
          />
        )}
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          onEndReached={() => {
            if (page != 1) {
              setTimeout(() => {
                setLoading(true);
                dataCall(page, setData, data);

                setPage(1);
              }, 5000);
            } else {
              setTimeout(() => {
                setLoading(false);
              }, 3000);
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => {
                setRefreshing(true);
                dataCall(1, setData, data);
                setPage(2);
                setTimeout(() => {
                  setRefreshing(false);
                }, 3000);
              }}
            />
          }
        />
        <ActivityIndicator
          size={"small"}
          color={"grey"}
          animating={isLoading}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: "#f1f1f1",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 1,
    width: "90%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
    marginVertical: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
  name: {
    marginBottom: 4,
    fontSize: 18,
  },
  email: {
    color: "grey",
  },
  button: {
    width: "50%",
    marginHorizontal: "25%",
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    shadowColor: "#470000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    elevation: 1,
  },
  isLoading: {
    position: "absolute",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Pagination;
