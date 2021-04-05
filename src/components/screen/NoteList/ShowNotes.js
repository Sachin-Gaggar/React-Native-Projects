import React from 'react';
import {inject, observer} from 'mobx-react';
import {
  StyleSheet,
  Text,
  Modal,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import Edit from './Edit';
@inject('store')
@observer
export default class ShowNotes extends React.Component {
  constructor(props) {
    super(props);
  }
  delete = (id) => {
    Alert.alert('Delete', 'Are you Sure', [
      {
        text: 'Yes',
        onPress: () => this.props.store.deleteNote(id),
        style: 'destructive',
      },
      {
        text: 'Cancel',
        onPress: () => console.log('CAncel Pressed'),
        style: 'cancel',
      },
    ]);
  };
  render() {
    return (
      <>
        <Modal
          animationType="slide"
          transparent={false}
          presentationStyle="formSheet"
          visible={this.props.store.editModalVisible}
          onRequestClose={() => this.props.store.editModalVisibility(false)}>
          <Edit />
        </Modal>
        {this.props.store.id < 0 || !Boolean(this.props.store.data[0].title) ? (
          <View style={styles.container}>
            <Text style={styles.bold}>You do not have any notes</Text>
          </View>
        ) : (
          this.props.store.data.map((item, index) => (
            <TouchableOpacity
              key={item.id}
              style={styles.list}
              onPress={() => this.props.store.editButton(item.id)}
              onLongPress={() => this.delete(item.id)}>
              <Text style={styles.titleTxt}>{item.title}</Text>
              <Text style={styles.notesTxt}>{item.note}</Text>
            </TouchableOpacity>
          ))
        )}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontSize: 20,
  },
  list: {
    margin: 10,
  },
  titleTxt: {
    fontSize: 19,
    fontWeight: '600',
  },
  notesTxt: {
    fontSize: 16,
    color: '#AAAAAA',
  },
});
