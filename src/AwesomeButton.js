import React, { Component, PropTypes } from 'react';
import {
  Animated,
  TouchableOpacity
} from 'react-native';

import InnerButtonView from './InnerButtonView';


class AwesomeButton extends Component {
  static propTypes = {
    states: PropTypes.object.isRequired,
    buttonState: PropTypes.string,
    transitionDuration: PropTypes.number,
    spinnerColor: PropTypes.string,
    activeOpacity: PropTypes.number,
    labelStyle: PropTypes.object,
    backgroundStyle: PropTypes.object,
  }

  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: new Animated.Value(0),
      startColor: this.props.states[this.props.buttonState].backgroundColor,
      endColor: this.props.states[this.props.buttonState].backgroundColor
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      backgroundColor: new Animated.Value(0),
      startColor: this.props.states[this.props.buttonState].backgroundColor,
      endColor: this.props.states[nextProps.buttonState].backgroundColor
    });
  }

  componentDidUpdate() {
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(this.state.backgroundColor,
      {
        toValue: 1,
        duration: this.props.transitionDuration
      }
    ).start();
  }

  render() {
    const bgColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.startColor, this.state.endColor]
    });

    const AnimatedView =
      (<Animated.View style={[this.props.backgroundStyle, { backgroundColor: bgColor }]}>
        <InnerButtonView
          currentStateObject={this.props.states[this.props.buttonState]}
          labelStyle={this.props.labelStyle}
          spinnerColor={this.props.spinnerColor}
        />
      </Animated.View>);

    if (this.props.states[this.props.buttonState].onPress) {
      return (
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={this.props.activeOpacity}
          onPress={this.props.states[this.props.buttonState].onPress}
        >
          { AnimatedView }
        </TouchableOpacity>
      );
    }
    return { AnimatedView };
  }
}


AwesomeButton.defaultProps = {
  buttonState: 'default',
  backgroundStyle: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: 'rgb(255, 0, 0)',
    borderRadius: 20
  },
  labelStyle: {
    color: '#FFFFFF'
  },
  spinnerColor: '#FFFFFF',
  transitionDuration: 250,
  activeOpacity: 0.92
};


export default AwesomeButton;

