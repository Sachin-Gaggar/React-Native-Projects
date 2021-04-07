import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import {
  getAllData,
  search,
  closeDatabase,
  sortSalaryInAscending,
  sortSalaryInDescending,
  deleteAllData,
  addData,
} from '../Realm/EmployeeData';

export default class Emplyees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchName: '',
    };
  }
  componentDidMount() {
    this.getDataAfterMounting();
  }
  getDataAfterMounting = () => {
    let data = getAllData();
    this.setState({data});
  };
  componentWillUnmount() {}
  renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardItem}>
          <Text style={styles.itemTxt}>Employee ID : {item.id}</Text>
        </View>
        <View style={styles.cardItem}>
          <Text style={styles.itemTxt}>Employee Name : {item.name}</Text>
        </View>
        <View style={styles.cardItem}>
          <Text style={styles.itemTxt}>
            Employee Designation : {item.designation}
          </Text>
        </View>
        <View style={styles.cardItem}>
          <Text style={styles.itemTxt}>Employee Salary :{item.salary}</Text>
        </View>
      </View>
    );
  };
  onSearchPress = () => {
    if (this.state.data.length > 1) {
      let result;
      result = search(this.state.searchName);
      this.setState({data: result});
    }
  };
  sortHigh = () => {
    if (this.state.data.length > 1) {
      let result;
      result = sortSalaryInDescending();
      this.setState({data: result});
    }
  };
  sortLow = () => {
    if (this.state.data.length > 1) {
      let result;
      result = sortSalaryInAscending();
      this.setState({data: result});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.color} />
        <View style={styles.header}>
          <View>
            <Text style={styles.titleTxt}>Employees</Text>
          </View>
          <TouchableOpacity
            style={styles.topRightButton}
            onPress={() => this.props.navigation.navigate('Add')}>
            <Text>Add Employees</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.searchContainer, styles.borderLess]}>
          <TouchableOpacity
            style={styles.reloadButton}
            onPress={() => this.getDataAfterMounting()}>
            <Text>Reload</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.reloadButton}
            onPress={() => {
              deleteAllData();
              this.getDataAfterMounting();
            }}>
            <Text>Delete All</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
          {this.state.data.length === 0 ? (
            <View style={styles.body}>
              <Text>No employees found. Please Add employee</Text>
            </View>
          ) : (
            <View>
              <View
                style={[
                  styles.searchContainer,
                  this.state.data.length < 2 ? styles.disable : styles.enable,
                ]}>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Enter name"
                  onChangeText={(value) => this.setState({searchName: value})}
                />
                <TouchableOpacity
                  style={styles.searchButton}
                  onPress={() => this.onSearchPress()}>
                  <Text>Search</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.searchContainer, styles.borderLess]}>
                <TouchableOpacity
                  style={[
                    styles.sort,
                    this.state.data.length < 2 ? styles.disable : styles.enable,
                  ]}
                  onPress={() => this.sortHigh()}>
                  <Text>Sort by High Salary</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.sort,
                    this.state.data.length < 2 ? styles.disable : styles.enable,
                  ]}
                  onPress={() => this.sortLow()}>
                  <Text>Sort by Low Salary</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={this.renderItem}
              />
            </View>
          )}
        </View>

        <SafeAreaView />
      </View>
    );
  }
}
