import React, { PropTypes } from 'react';
import { ActivityIndicator, Animated, View, StyleSheet, Text, TouchableOpacity } from 'react-native';


const ButtonView = (props) => {
  const styles = StyleSheet.flatten({
    labelStyle: props.labelStyle,
    backgroundStyle: props.backgroundStyle
  });
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.9}
      disabled={props.disabled}
    >
      <Animated.View style={styles.backgroundStyle}>
        <View style={{ flexDirection: 'row' }}>
          { (props.icon && props.iconAlignment === 'left') ?
            props.icon
            : null
          }
          { props.spinner ?
            <ActivityIndicator {...props.spinnerProps} style={{ marginRight: 10 }} />
            : null
          }
          <Text style={styles.labelStyle}>{props.text}</Text>
          { (props.icon && props.iconAlignment === 'right') ?
            props.icon
            : null
          }
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

ButtonView.propTypes = {
  backgroundStyle: PropTypes.array,
  labelStyle: PropTypes.object,
  spinnerProps: PropTypes.object,
  text: PropTypes.string,
  onPress: PropTypes.func,
  spinner: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  iconAlignment: PropTypes.string
};

ButtonView.defaultProps = {
  backgroundStyle: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: '#1155DD',
    borderRadius: 20
  },
  labelStyle: {
    color: '#FFFFFF',
    textAlign: 'center'
  },
  spinnerProps: {
    animating: true,
    color: '#FFFFFF'
  },
  text: 'Click here',
  spinner: false,
  disabled: true,
  icon: null,
  iconAlignment: null,
  onPress: (() => {}) // work-around to suppress eslinters no-default-prop
};

export default ButtonView;
