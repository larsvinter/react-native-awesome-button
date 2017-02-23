import React, { Component, PropTypes } from 'react';
import { Animated, View } from 'react-native';

import ButtonView from './ButtonView';


class AwesomeButton extends Component {
  static propTypes = {
    states: PropTypes.object.isRequired,
    buttonState: PropTypes.string,
    transitionDuration: PropTypes.number
  }

  constructor(props) {
    super(props);
    this.state = {
      viewState: this.props.states[this.props.buttonState] ||
        this.props.states[Object.keys(this.props.states)[0]],
      backgroundColor: new Animated.Value(0.0)
    };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.buttonState) {
      this.setState({
        viewState: newProps.states[newProps.buttonState],
        prevBackgroundColor: this.state.viewState.backgroundStyle.backgroundColor
      });
    }
  }

  componentDidUpdate() {
    this.state.backgroundColor.setValue(0);
    this.startAnimation();
  }

  startAnimation() {
    Animated.timing(this.state.backgroundColor,
      {
        toValue: 1.0,
        duration: this.props.transitionDuration
      }
    ).start();
  }

  render() {
    const {
      backgroundStyle,
      labelStyle,
      text,
      spinner,
      onPress,
      icon,
      iconAlignment
    } = this.state.viewState;
    const backgroundColor = this.state.backgroundColor.interpolate({
      inputRange: [0, 1],
      outputRange: this.state.prevBackgroundColor ?
        [this.state.prevBackgroundColor, backgroundStyle.backgroundColor]
        : [backgroundStyle.backgroundColor, backgroundStyle.backgroundColor]
    });
    return (
      <View>
        <ButtonView
          backgroundStyle={[backgroundStyle, { backgroundColor }]}
          labelStyle={labelStyle}
          text={text}
          spinner={spinner}
          onPress={onPress}
          disabled={onPress ? false : true}
          icon={icon}
          iconAlignment={iconAlignment}
        />
      </View>
    );
  }
}

AwesomeButton.defaultProps = {
  buttonState: 'default',
  transitionDuration: 200
};

export default AwesomeButton;
