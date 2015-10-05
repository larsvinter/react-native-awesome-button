const React = require('react-native')


const {
  Animated,
  ActivityIndicatorIOS,
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = React


class InnerButtonView extends Component {

  render() {
    return(
      <View style={styles.insideView}>
        { this.props.currentStateObject.spinner ? <ActivityIndicatorIOS color={ this.props.spinnerColor } style={styles.activityIndicator}/> : null }
        <Text style={ this.props.labelStyle }>{ this.props.currentStateObject.text }</Text>
      </View>
    )
  }
  
}


class AwesomeButton extends Component {

  constructor(props: any) {
    super(props);
    const currentStateObject = this.props.states[this.props.buttonState] || this.getDefaultStateObject()
    this.state = {
      backgroundColor: new Animated.Value(0),
      startColor: this.hexToRgb(currentStateObject.backgroundColor), 
      endColor: this.hexToRgb(currentStateObject.backgroundColor) 
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentStateObject = this.props.states[this.props.buttonState] || this.getDefaultStateObject()
    const nextStateObject = nextProps.states[nextProps.buttonState] || this.getDefaultStateObject()
    this.setState({ backgroundColor: new Animated.Value(0), startColor: this.hexToRgb(currentStateObject.backgroundColor), endColor: this.hexToRgb(nextStateObject.backgroundColor) })
  }

  componentDidUpdate() {
    this.startAnimation()
  }

  hexToRgb(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?  'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ')' : null
  }  

  startAnimation() {
    Animated.timing(this.state.backgroundColor,
    {
      toValue: 1,
      duration: this.props.transitionDuration || 250
    }).start()
  }

  getDefaultBackgroundStyle() {
    return (
      {
        flex: 1,
        height: 40,
        backgroundColor: '#477CCC',
        borderRadius: 20
      }
    )
  }

  getDefaultLabelStyle() {
    return (
      {
        color: '#FFFFFF'
      }
    )
  }

  getDefaultStateObject() {
    return (
      this.props.states[Object.keys(this.props.states)[0]]
    )
  }

  getDefaultSpinnerColor() {
    return (
      '#FFFFFF'
    )
  }

  render() {

    // TODO: Check if this.props.states exists and has at least a text defined. If not, throw error

    const backgroundStyle = this.props.backgroundStyle || this.getDefaultBackgroundStyle()
    const labelStyle = this.props.labelStyle || this.getDefaultLabelStyle()
    const currentStateObject = this.props.states[this.props.buttonState] || this.getDefaultCurrentStateObject()
    const spinnerColor = currentStateObject.spinnerColor || this.getDefaultSpinnerColor()

    const bgColor = this.state.backgroundColor.interpolate({
      inputRange: [
        0,
        1,
      ],
      outputRange: [
        this.state.startColor,
        this.state.endColor
      ],
    })

    if (currentStateObject.onPress) {
      return (
        <TouchableOpacity style={ backgroundStyle }
                          activeOpacity={0.92}
                          onPress={currentStateObject.onPress}>
          <Animated.View style={[ backgroundStyle, { backgroundColor: bgColor  } ]}>
            <InnerButtonView currentStateObject={currentStateObject} labelStyle={ labelStyle } spinnerColor={ spinnerColor } />
          </Animated.View>
        </TouchableOpacity> 
      )
    } else {
      return (
        <Animated.View style={[ backgroundStyle, { backgroundColor: bgColor } ]}>
          <InnerButtonView currentStateObject={currentStateObject} labelStyle={ labelStyle } spinnerColor={ spinnerColor } />
        </Animated.View>
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