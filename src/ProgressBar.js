'use strict';

var React = require('react-native');
var {
  Platform,
  ActivityIndicatorIOS,
  ProgressBarAndroid,
} = React;

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
