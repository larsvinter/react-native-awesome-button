import React, { Component, PropTypes } from 'react';
import {
  Animated,
  TouchableOpacity
} from 'react-native';
// import hexToRgb from 'hex-rgb';

import InnerButtonView from './InnerButtonView';


class AwesomeButton extends Component {
  static propTypes = {
    states: PropTypes.shape.isRequired,
    buttonState: PropTypes.string.isRequired,
    transitionDuration: PropTypes.number,
    spinnerColor: PropTypes.string,
    labelStyle: PropTypes.shape,
    backgroundStyle: PropTypes.shape,
    activeOpacity: PropTypes.number,
  }

  constructor(props) {
    super(props);
    const currentStateObject = this.props.states[this.props.buttonState]
      || this.getDefaultStateObject();
    this.state = {
      backgroundColor: new Animated.Value(0),
      startColor: currentStateObject.backgroundColor,
      endColor: currentStateObject.backgroundColor
    };
  }

  componentWillReceiveProps(nextProps) {
    const currentStateObject = this.props.states[this.props.buttonState]
    || this.getDefaultStateObject();
    const nextStateObject = nextProps.states[nextProps.buttonState] || this.getDefaultStateObject();
    this.setState({
      backgroundColor: new Animated.Value(0),
      startColor: currentStateObject.backgroundColor,
      endColor: nextStateObject.backgroundColor
    });
  }

  componentDidUpdate() {
    this.startAnimation();
  }

  getDefaultStateObject() {
    return (
      this.props.states[Object.keys(this.props.states)[0]]
    );
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
    const currentStateObject = this.props.states[this.props.buttonState]
    || this.getDefaultStateObject();

    const bgColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: [this.state.startColor, this.state.endColor]
    });

    if (currentStateObject.onPress) {
      return (
        <TouchableOpacity
          style={{ flex: 1 }}
          activeOpacity={this.props.activeOpacity}
          onPress={currentStateObject.onPress}
        >
          <Animated.View style={[this.props.backgroundStyle, { backgroundColor: bgColor }]}>
            <InnerButtonView
              currentStateObject={currentStateObject}
              labelStyle={this.props.labelStyle}
              spinnerColor={this.props.spinnerColor}
            />
          </Animated.View>
        </TouchableOpacity>
      );
    }
    return (
      <Animated.View style={[this.props.backgroundStyle, { backgroundColor: bgColor }]}>
        <InnerButtonView
          currentStateObject={currentStateObject}
          labelStyle={this.props.labelStyle}
          spinnerColor={this.props.spinnerColor}
        />
      </Animated.View>
    );
  }
}


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
};

export default AwesomeButton;

