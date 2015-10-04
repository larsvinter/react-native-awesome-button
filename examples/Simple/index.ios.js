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
    height: 50,
    width: 300,
    borderRadius: 10
  },
  myButtonDefaultBackground: {
    backgroundColor: '#555532'
  },
  myButtonDefaultLabel: {
    color: '#004433',
    fontSize: 20
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
                          backgroundStyle: styles.myButtonDefaultBackground,
                          labelStyle: styles.myButtonDefaultLabel
                        }
                       }}
                       buttonState="default"
                       onPress={this.handleButtonPress} />
      </View>
    )
  }

}


AppRegistry.registerComponent('Simple', () => Simple)