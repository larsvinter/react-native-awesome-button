'use strict';

import React, { Component } from 'react'
import { Platform, ActivityIndicatorIOS, ProgressBarAndroid } from 'react-native'

class ProgressBar extends Component {
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
}

export default ProgressBar
