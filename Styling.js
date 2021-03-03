import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

class Styling extends Component {
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.cotainer}>
          <Text style={styles.text}>One</Text>
          <Text style={styles.text}>One</Text>
          <Text style={styles.text}>One</Text>
          <Text style={styles.text}>One</Text>
          <Text style={styles.text}>One</Text>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'grey'},
  text: {flex: 1, backgroundColor: 'red'},
});
export default Styling;
