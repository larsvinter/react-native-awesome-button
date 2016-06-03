const ReactNative = require('react-native')
import React, { Component } from 'react';

const {
  Animated,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = ReactNative

var ProgressBar = require('./ProgressBar');

class InnerButtonView extends Component {

  render() {
    return(
      <View style={styles.insideView}>
        { this.props.currentStateObject.spinner ? <ProgressBar color={ this.props.spinnerColor } style={styles.activityIndicator}/> : null }
        <Text style={ this.props.labelStyle }>{ this.props.currentStateObject.text }</Text>
      </View>
    )
  }
}


class AwesomeButton extends Component {

  constructor(props) {
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
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    })
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ?  'rgb(' + parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) + ')' : null
  }

  startAnimation() {
    Animated.timing(this.state.backgroundColor,
    {
      toValue: 1,
      duration: this.props.transitionDuration
    }).start()
  }

  getDefaultStateObject() {
    return (
      this.props.states[Object.keys(this.props.states)[0]]
    )
  }

  render() {

    const currentStateObject = this.props.states[this.props.buttonState] || this.getDefaultStateObject()

    const bgColor = this.state.backgroundColor.interpolate({
      inputRange: [ 0, 1 ],
      outputRange: [ this.state.startColor, this.state.endColor ]
    })

    if (currentStateObject.onPress) {
      return (
        <TouchableOpacity style={ {flex: 1} } activeOpacity={ this.props.activeOpacity } onPress={ currentStateObject.onPress }>
          <Animated.View style={[ this.props.backgroundStyle, { backgroundColor: bgColor } ]}>
            <InnerButtonView currentStateObject={ currentStateObject } labelStyle={ this.props.labelStyle } spinnerColor={ this.props.spinnerColor } />
          </Animated.View>
        </TouchableOpacity>
      )
    } else {
      return (
        <Animated.View style={[ this.props.backgroundStyle, { backgroundColor: bgColor } ]}>
          <InnerButtonView currentStateObject={ currentStateObject } labelStyle={ this.props.labelStyle } spinnerColor={ this.props.spinnerColor } />
        </Animated.View>
      )
    }
  }

}


// TODO: Define possible propTypes and requirements


AwesomeButton.defaultProps = {
  backgroundStyle: {
    flex: 1,
    height: 40,
    backgroundColor: '#477CCC',
    borderRadius: 20
  },
  labelStyle: {
    color: '#FFFFFF'
  },
  spinnerColor: '#FFFFFF',
  transitionDuration: 250,
  activeOpacity: 0.92
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
