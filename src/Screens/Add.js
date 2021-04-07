import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import {addData} from '../Realm/EmployeeData';
import {styles} from './styles';
export default class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employeeId: '',
      salary: '',
      name: '',
      designation: '',
    };
  }
  onSubmit = () => {
    if (isNaN(this.state.employeeId) || this.state.employeeId === '') {
      Alert.alert('Value is not a Integer in EmployeeId');
    } else if (isNaN(this.state.salary) || this.state.salary === '') {
      Alert.alert('enter integer in salary');
    } else if (this.state.salary > 500000) {
      Alert.alert('Salary should be less then 500000');
    } else if (/[^a-zA-Z]/.test(this.state.name) || this.state.name === '') {
      Alert.alert('Name should only have Alphabets');
    } else if (
      /[^a-zA-Z]/.test(this.state.designation) ||
      this.state.name === ''
    ) {
      Alert.alert('Designation should only have Alphabets');
    } else {
      addData(
        +this.state.employeeId,
        this.state.name,
        this.state.designation,
        +this.state.salary,
      );
      this.props.navigation.navigate('Employees');
    }
  };
  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.body}>
        <View style={styles.page}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Employee Id"
              onChangeText={(value) => this.setState({employeeId: value})}
              keyboardType="number-pad"
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              onChangeText={(value) => this.setState({name: value})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Designation"
              onChangeText={(value) => this.setState({designation: value})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Salary"
              maxLength={50000}
              onChangeText={(value) => this.setState({salary: value})}
            />
          </View>
          <TouchableOpacity
            onPress={() => this.onSubmit()}
            style={[styles.inputContainer, styles.button]}>
            <Text style={styles.titleTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView />
      </KeyboardAvoidingView>
    );
  }
}
