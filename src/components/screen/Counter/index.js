import {inject, observer} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';

@inject('store')
@observer
export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{this.props.store.getUpdatedCount}</Text>
        <Button
          title="Increment"
          onPress={() => this.props.store.increment()}
        />
        <Button
          title="Decrement"
          onPress={() => this.props.store.decrement()}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
