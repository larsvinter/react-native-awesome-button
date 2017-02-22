import React, { Component, PropTypes } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

import OuterButtonView from './OuterButtonView';


class AwesomeButton extends Component {
  static propTypes = {
    states: PropTypes.object.isRequired,
    buttonState: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      viewState: this.props.states[this.props.buttonState] || this.props.states[0]
    };
  }

  render() {
    return (
      // <OuterButtonView states={this.props.states} />
      <View><Text>Test</Text></View>
    );
  }
}

AwesomeButton.defaultProps = {
  buttonState: 'default'
};

export default AwesomeButton;
