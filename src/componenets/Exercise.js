import React, { Component } from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: "",
    };
  }

  onPress = async () => {
    this.setState({
      loading: true,
    });

    try {
      const res = await fetch("https://reqres.in/api/users");
      const response = await res.json();

      this.setState({
        loading: false,
        data: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderItem = ({ item }) => {
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

  render() {
    const { loading, data } = this.state;

    return (
      <>
        <SafeAreaView />
        <ScrollView contentContainerStyle={styles.container}>
          {!loading && !data ? (
            <View>
              <Button title='Fetch Data' onPress={this.onPress} />
            </View>
          ) : (
            <></>
          )}
          <ActivityIndicator size='large' animating={loading} color={"blue"} />

          {!loading && Boolean(data) && (
            <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}
            />
          )}
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    flex: 1,
    padding: 16,
    elevation: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    backgroundColor: "#efeeee",
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  name: {
    marginBottom: 4,
    fontSize: 18,
  },
  email: {
    color: "grey",
  },
});

export default Exercise;
