import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Edit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let id = this.props.store.editId;
    console.log(id, this.props.store.data[id].title);
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.titleTxt}>Edit the note</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.store.editModalVisibility(false)}>
              <Image
                style={styles.img}
                source={require('../../../assets/close.png')}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Edit Title Here"
            onChangeText={(text) => this.props.store.editTitle(text)}
            style={styles.inputTitle}
            value={this.props.store.data[id].title}
          />

          <TextInput
            placeholder="Edit Note Here"
            onChangeText={(text) => this.props.store.editNote(text)}
            style={[styles.inputTitle, styles.height]}
            value={this.props.store.data[id].note}
          />

          <TouchableOpacity
            style={[styles.right, styles.active]}
            onPress={() => this.props.store.editModalVisibility(false)}>
            <Image
              style={styles.img}
              source={require('../../../assets/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <SafeAreaView />
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,

    backgroundColor: '#60DAC4',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    flex: 4,
  },
  titleTxt: {
    textAlign: 'center',
    color: '#444444',
    margin: 10,
    fontSize: 20,
  },
  img: {
    width: 20,
    height: 20,
    margin: 5,
  },
  inputTitle: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#EEEEEE',
  },
  height: {
    height: 300,
  },
  right: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    padding: 10,
    margin: 10,

    borderRadius: 30,
    backgroundColor: '#AAAAAA',
  },
  active: {
    backgroundColor: '#60DAC4',
  },
});
