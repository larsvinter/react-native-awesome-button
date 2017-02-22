import React, { PropTypes } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const ButtonView = (props) => {
  const styles = StyleSheet.create({
    backgroundStyle: props.backgroundStyle,
    labelStyle: props.labelStyle,
  });

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
      disabled={props.disabled}
    >
      <View style={styles.backgroundStyle}>
        <View style={{ flexDirection: 'row' }}>
          { props.spinner ?
            <ActivityIndicator {...props.spinnerProps} style={{ marginRight: 10 }} />
            : null
          }
          <Text style={styles.labelStyle}>{props.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ButtonView.propTypes = {
  backgroundStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  spinnerProps: PropTypes.object,
  text: PropTypes.string,
  onPress: PropTypes.func,
  spinner: PropTypes.bool,
  disabled: PropTypes.bool
};

ButtonView.defaultProps = {
  backgroundStyle: {
    flex: 1,
    maxHeight: 40,
    backgroundColor: '#1155DD',
    borderRadius: 20,
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
  onPress: (() => {}) // work-around to suppress eslinters no-default-prop
};

export default ButtonView;
