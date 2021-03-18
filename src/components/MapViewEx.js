import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

import MapView, { Marker } from "react-native-maps";

export default class MapViewEx extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        longitude: 77.51782326240162,
        latitude: 28.4785615,
      },
      locationsArray: [
        {
          title: "Knowledge Park 3",
          longitude: 77.5127586,
          latitude: 28.478588,
        },
        {
          title: "Alpha 1",
          latitude: 28.4709744,
          longitude: 77.5127586,
        },
      ],
    };
  }
  draggingMarker = (event) => {
    this.setState({ currentLocation: { ...event.nativeEvent.coordinate } });
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.currentLocation.latitude,
            longitude: this.state.currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            title='You are here'
            coordinate={this.state.currentLocation}
            draggable
            onPress={(event) => this.draggingMarker(event)}
          />
          {this.state.locationsArray.map((item, index) => (
            <Marker key={index} title={item.title} coordinate={item} />
          ))}
        </MapView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
