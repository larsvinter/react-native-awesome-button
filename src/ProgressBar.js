'use strict';

const ReactNative = require('react-native')
const React = require('react')

const {
  Platform,
  ActivityIndicatorIOS,
  ProgressBarAndroid
} = ReactNative

var ProgressBar = React.createClass({
  render() {
    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicatorIOS color={this.props.color} style={this.props.style}/>
      );
    } else {
      return (
        <ProgressBarAndroid color={this.props.color} style={this.props.style} styleAttr={"Small"}/>
      );
    }
  }
});

module.exports = ProgressBar;
