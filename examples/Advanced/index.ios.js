import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import AwesomeButton from 'react-native-awesome-button';
import { Icon } from 'react-native-material-design';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560
  }
});

export default class Advanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'idle'
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ buttonState: 'busy' });
    setTimeout(() => {
      this.setState({ buttonState: 'success' });
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          states={{
            idle: {
              text: 'Log In',
              icon: <Icon name="person" color="rgba(255, 0, 0, .9)" />,
              iconAlignment: 'left',
              backgroundStyle: {
                backgroundColor: 'blue',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              },
              onPress: this.handleLogin
            },
            busy: {
              text: 'Loggin In',
              spinner: true,
              spinnerProps: {
                animated: true,
                color: 'white'
              },
              backgroundStyle: {
                backgroundColor: 'darkblue',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              }
            },
            success: {
              text: 'Logged In',
              backgroundStyle: {
                backgroundColor: 'green',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              }
            }
          }}
          transitionDuration={400}
          buttonState={this.state.buttonState}
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('Advanced', () => Advanced);
