import React, { Component, PropTypes } from 'react';
import {
  Animated,
  TouchableOpacity,
  View,
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
      viewState: this.props.states[this.props.buttonState] ||
        this.props.states[Object.keys(this.props.states)[0]]
    };
  }

  render() {
    const { backgroundStyle, labelStyle, text } = this.state.viewState;
    return (
      <OuterButtonView
        backgroundStyle={backgroundStyle}
        labelStyle={labelStyle}
        text={text}
      />
    );
  }
}

AwesomeButton.defaultProps = {
  buttonState: 'default'
};

export default AwesomeButton;
