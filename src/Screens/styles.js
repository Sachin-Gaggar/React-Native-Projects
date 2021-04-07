import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  color: {
    backgroundColor: 'white',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    width: '100%',
  },

  titleTxt: {
    textAlign: 'center',
    fontSize: 25,
    color: '#660000',
  },
  topRightButton: {
    borderWidth: 1,

    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFDEAD',
    borderColor: '#FCD59C',
    elevation: 2,
    shadowColor: '#FFA824',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  page: {
    flex: 1,
    width: '100%',
    backgroundColor: '#EEEEEE',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  inputContainer: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CCCCCC',
    elevation: 2,
    shadowColor: '#AAAAAA',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    width: '80%',
    backgroundColor: '#DDDDDD',
  },
  button: {
    backgroundColor: '#FFA54F',
  },
  cardContainer: {
    flex: 1,

    width: '100%',
  },
  card: {
    width: '80%',
    margin: 10,
    marginHorizontal: '10%',
    borderWidth: 1,
    backgroundColor: '#FAF0E6',
    borderColor: '#E7C6A5',
    elevation: 2,
    shadowColor: '#AAAAAA',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 1,
      width: 2,
    },
  },
  cardItem: {
    padding: 10,
  },
  itemTxt: {
    fontSize: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '90%',
    marginHorizontal: '5%',
    padding: 5,
    borderRadius: 10,
    borderColor: '#E7C6A5',
    margin: 6,
  },
  borderLess: {
    borderWidth: 0,
  },
  disable: {
    borderColor: 'grey',
    backgroundColor: 'grey',
  },
  searchButton: {
    height: '100%',
    padding: 10,
  },
  enable: {
    backgroundColor: '#FDF5E6',
  },
  searchInput: {
    padding: 10,
  },
  sort: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#E7C6A5',
    borderRadius: 10,
  },
  reloadButton: {
    alignSelf: 'flex-start',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FDF5E6',
    borderColor: '#E7C6A5',
    elevation: 2,
    shadowColor: '#AAAAAA',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 1,
      width: 2,
    },
    margin: 10,
  },
});
