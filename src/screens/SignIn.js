import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: false, user: []};
  }
  componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '174681359161-s2a3j9nl1vvqn64q8avcu7vaonpvhpm2.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
    });
  }
  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({user: userInfo.user, login: true});
      console.log(userInfo.user);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.container}>
          {this.state.login ? (
            <View style={styles.card}>
              <Image style={styles.img} source={{uri: this.state.user.photo}} />
              <View>
                <Text>Name : {this.state.user.name}</Text>
                <Text>Email : {this.state.user.email} </Text>
              </View>
            </View>
          ) : (
            <>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this.signIn}
              />
            </>
          )}
        </SafeAreaView>
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
    alignItems: 'center',
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: 'stretch',
    borderRadius: 50,
    margin: 10,
  },
});
