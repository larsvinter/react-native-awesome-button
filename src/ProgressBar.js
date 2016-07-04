import React, { Component } from 'react';

import {
  Platform,
  ActivityIndicator,
  ProgressBarAndroid
} from  'react-native';

export default class ProgressBar extends Component {
  render() {
    if (Platform.OS === 'ios') {
      return (
        <ActivityIndicator color={this.props.color} style={this.props.style}/>
      );
    } else {
      return (
        <ProgressBarAndroid color={this.props.color} style={this.props.style} styleAttr={"Small"}/>
      );
    }
  }
}
