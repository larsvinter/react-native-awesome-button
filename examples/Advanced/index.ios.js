/**
 * Sample React Native App to demonstrate advanced use of AwesomeButton
 */
const React = require('react-native')
const AwesomeButton = require('react-native-awesome-button')


const {
  AppRegistry,
  Component,
  View,
  StyleSheet
} = React


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  loginButtonBackground: {
    flex: 1,
    height: 40,
    borderRadius: 5
  },
  loginButtonLabel: {
    color: 'white'
  }
})


class Advanced extends Component {

  constructor(props) {
    super(props)
    this.state = {
        buttonState: 'idle'
    }
    this.logIn = this.logIn.bind(this)
  }

  logIn() {
    this.setState({ buttonState: 'busy' })
    setTimeout(() => {
      this.setState({ buttonState: 'success' })
    }, 2000);
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton  backgroundStyle={ styles.loginButtonBackground }
                        labelStyle={ styles.loginButtonLabel }
                        transitionDuration={ 200 }
                        states={{
                          idle: {
                            text: 'Log In',
                            onPress: this.logIn,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            text: 'Logging In',
                            backgroundColor: '#002299',
                            spinner: true,
                          },
                          success: {
                            text: 'Logged In',
                            backgroundColor: '#339944'
                          }
                        }}
                        buttonState={this.state.buttonState}
                        />
      </View>
    )
  }
}


AppRegistry.registerComponent('Advanced', () => Advanced)