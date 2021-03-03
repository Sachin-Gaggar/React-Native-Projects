import React, {Component} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  Image,
  StyleSheet,
} from 'react-native';

class Exercise3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      display: 'none',
    };
  }
  render() {
    return (
      <>
        <SafeAreaView />
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://media-exp1.licdn.com/dms/image/C560BAQGjUZbDAenjbw/company-logo_200_200/0/1519888826511?e=2159024400&v=beta&t=9f_vPYcp2Y4iTkK5yOSDfnyHUNkW6voSbV77zWL4Tsg',
            }}
            style={[styles.img, {display: this.state.display}]}
            onLoadEnd={() =>
              setTimeout(() => {
                this.setState({loading: false, display: 'flex'});
              }, 10000)
            }
          />
          <ActivityIndicator
            size="large"
            color="blue"
            animating={this.state.loading}
          />
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
});

export default Exercise3;
