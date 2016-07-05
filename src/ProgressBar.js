import React, { Component } from 'react';

import {
  ActivityIndicator
} from  'react-native';

export default class ProgressBar extends Component {
  render() {
    return (
      <ActivityIndicator color={this.props.color} style={this.props.style}/>
    );
  }
}
