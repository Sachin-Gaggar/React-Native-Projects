import {Provider} from 'mobx-react';
import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView} from 'react-native';
import Counter from './src/components/screen/Counter';
import NoteList from './src/components/screen/NoteList';
import CounterStore from './src/components/store/CounterStore';
import NoteListStore from './src/components/store/NoteListStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={NoteListStore}>
        <NoteList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
