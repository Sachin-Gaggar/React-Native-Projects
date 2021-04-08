import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  onPress = (name) => {
    this.props.navigation.navigate(name);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.items}>
          <View style={styles.card}>
            <View style={styles.firstCardItem}>
              <Text style={styles.txt}>For seeing your current Location</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Map')}>
              <Text>Location</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.items}>
          <View style={styles.card}>
            <View style={styles.firstCardItem}>
              <Text style={styles.txt}>For seeing Video</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Video')}>
              <Text>Video</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.items}>
          <View style={styles.card}>
            <View style={styles.firstCardItem}>
              <Text style={styles.txt}>For hearing audio track</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.onPress('Audio')}>
              <Text>Audio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
