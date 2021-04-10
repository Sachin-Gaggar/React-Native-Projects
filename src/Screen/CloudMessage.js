// import React from 'react';
// import {
//   ActivityIndicatorComponent,
//   Animated,
//   SafeAreaView,
//   StatusBar,
//   Text,
//   View,
// } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// export default class CloudMessage extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       msg: '',
//     };
//     this.userPermission();
//   }

//   userPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     console.log(authStatus);
//     const token = await messaging().getToken();
//     console.log(token);

//     if (authStatus) {
//       console.log('Permission Granted');
//     }
//   };
//   componentDidMount() {
//     console.log('in mount');
//     messaging()
//       .getInitialNotification()
//       .then((msg) => console.log('in Initial notification', msg));
//     messaging().onNotificationOpenedApp((msg) =>
//       console.log('In onNotification', msg),
//     );
//     messaging().onMessage((msg) => {
//       console.log('on message', msg.notification.body);
//     });
//   }
//   render() {
//     return (
//       <>
//         <StatusBar />
//         <SafeAreaView>
//           <View>
//             <Text>Cloud Message</Text>
//           </View>
//         </SafeAreaView>
//       </>
//     );
//   }
// }
import React, {Component} from 'react';
import messaging from '@react-native-firebase/messaging';
import {View, Text, StyleSheet} from 'react-native';

export default class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {body: null, title: 'waiting'};
  }

  componentDidMount() {
    messaging().onNotificationOpenedApp((remoteMessage) => {
      console.log('on Notification Opened App', remoteMessage);
      this.setState({
        body: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
      });
    });

    messaging()
      .getInitialNotification()
      .then((remoteMessage) => {
        console.log('get initial notification', remoteMessage);
      });

    messaging().onMessage(async (remoteMessage) => {
      console.log('onMESSAGE', remoteMessage);
      this.setState({
        body: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
      });
    });
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.card}>
          <Text style={[style.title, style.txt]}>
            Message Title: {this.state.title}
          </Text>
          <Text style={style.txt}>Message Body: {this.state.body}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
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
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  txt: {
    textAlign: 'center',
  },
});
