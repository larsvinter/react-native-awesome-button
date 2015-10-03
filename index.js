var React = require('react-native')


var {
  ActivityIndicatorIOS,
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React


class ButtonView extends Component {
  render() {
    return(
      <View style={styles.insideView}>
        { this.props.currentStateObject.spinner ? <ActivityIndicatorIOS color="white" style={styles.activityIndicator}/> : null }
        <Text style={ this.props.currentStateObject.labelStyle }>{ this.props.currentStateObject.text }</Text>
      </View>
    )
  }
}


class AwesomeButton extends Component {
  render() {
    if(this.props.states.hasOwnProperty(this.props.buttonState)){
      const currentStateObject = this.props.states[this.props.buttonState]
    } else {
      const currentStateObject = {
        text: 'Button state not recognized',
        backgroundStyle: {
          backgroundColor: 'black',          
        },
        labelStyle: {
          color: 'white',
        }
      }
    }
    if (currentStateObject.touchable) {
      return (
        <TouchableHighlight style={[ this.props.style, currentStateObject.backgroundStyle ]}
                            underlayColor="red"
                            onPress={currentStateObject.onClick}>
          <View style={[styles.container, this.props.style ]}>
            <ButtonView currentStateObject={currentStateObject}/>
          </View>
        </TouchableHighlight> 
      )
    } else {
      return (
      <View style={[ this.props.style, currentStateObject.backgroundStyle ]}>
        <ButtonView currentStateObject={currentStateObject}/>
      </View>
      )
    }
  }
}


const styles = StyleSheet.create({
  insideView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  activityIndicator: {
    marginRight: 8,
  },
  container: {
    flex: 1,
  }
})


module.exports = AwesomeButton