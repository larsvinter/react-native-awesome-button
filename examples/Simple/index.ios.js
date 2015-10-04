/**
 * Sample React Native App showing use of AwesomeButton
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  myButton: {
    flex: 1,
    height: 50,
    width: 300,
    borderRadius: 8
  },
  myButtonDefaultBackground: {
    backgroundColor: '#477CCC'
  },
  myButtonDefaultLabel: {
    color: '#DDDDDD',
    fontSize: 18
  }
})


class Simple extends Component {
  
  handleButtonPress() {
    console.log('I was pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton style={styles.myButton}
                       states={{
                        default: {
                          text: 'Press me',
                          touchable: true,
                          onPress: this.handleButtonPress,
                          backgroundStyle: styles.myButtonDefaultBackground,
                          labelStyle: styles.myButtonDefaultLabel
                        }
                       }}
                       buttonState="default" />
      </View>
    )
  }

}


AppRegistry.registerComponent('Simple', () => Simple)