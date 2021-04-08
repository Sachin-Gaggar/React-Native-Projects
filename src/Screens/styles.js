import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderColor: '#AAAAAA',
    elevation: 2,
    shadowColor: '#333333',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 2,
      width: 1,
    },
    shadowRadius: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstCardItem: {
    width: '40%',
    flexDirection: 'row',
  },
  txt: {
    fontSize: 18,
    flexWrap: 'wrap',
  },
  button: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#E35152',
    elevation: 2,
    shadowColor: '#E32636',
    shadowOpacity: 0.9,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    backgroundColor: '#E35152',
    shadowRadius: 2,
    borderRadius: 10,
  },
  flex: {
    flex: 1,
  },
});
