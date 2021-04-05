import {observer, inject} from 'mobx-react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
} from 'react-native';
import Add from './Add';
import ShowNotes from './ShowNotes';
@inject('store')
@observer
export default class NoteList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <SafeAreaView style={styles.color} />

        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="formSheet"
          visible={this.props.store.modalVisible}
          onRequestClose={() => this.props.store.modalVisibility(false)}>
          <Add />
        </Modal>
        <View style={styles.color}>
          <Text style={styles.heading}>Simple Note Taker</Text>
        </View>
        <ShowNotes />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            this.props.store.newButton();
          }}>
          <View>
            <Image
              style={styles.img}
              source={require('../../../assets/add.png')}
            />
          </View>
          <View>
            <Text>Add New Note</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  color: {
    backgroundColor: '#60DAC4',
    width: '100%',
  },
  colorBottom: {backgroundColor: 'white'},
  heading: {
    textAlign: 'center',
    color: '#444444',
    margin: 10,
    fontSize: 20,
  },
  footer: {
    backgroundColor: 'red',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 0,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#60DAC4',
    shadowOpacity: 0.9,
    elevation: 1,
    shadowColor: '#77DDCC',
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  img: {
    width: 20,
    height: 20,
    margin: 5,
  },
});
