import React from 'react';
import {Alert, Linking, Platform, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {styles} from './styles';
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 0,
      longitude: 0,
    };
  }
  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition = async () => {
    let permission;
    if (Platform.OS === 'ios') {
      permission = await Geolocation.requestAuthorization('whenInUse');
      if (permission === 'denied') {
        Alert.alert('Permisison Denied', 'Enable through settings', [
          {
            text: 'ok',
            onPress: () => Linking.openSettings(),
            style: 'default',
          },
          {
            text: 'cancel',
            onPress: () => alert('You wont be able to use Map'),
            style: 'cancel',
          },
        ]);
      } else if (permission === 'restricted' || permission === 'disabled') {
        alert('Check your location service');
      }
    }
    if (permission === 'granted' || Platform.OS === 'android') {
      console.log('Inside current');
      Geolocation.getCurrentPosition(
        (location) => {
          console.log(location.coords);
          this.setState({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
        },
        (error) => console.log(error),
        {timeout: 3000, enableHighAccuracy: true},
      );
    }
  };

  render() {
    return (
      <View style={styles.flex}>
        <MapView
          style={{flex: 1, backgroundColor: 'red'}}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation={true}>
          <Marker
            pinColor={'blue'}
            title="Current Location"
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude,
            }}
          />
        </MapView>
      </View>
    );
  }
}
