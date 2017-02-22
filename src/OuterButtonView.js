import React, { PropTypes } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  const styles = StyleSheet.create({
    backgroundStyle: props.backgroundStyle,
    labelStyle: props.labelStyle,
  });

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.8}
    >
      <View style={styles.backgroundStyle}>
        { props.spinner ? <ActivityIndicator {props.spinnerProps} /> : null }
        <Text style={styles.labelStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

OuterButtonView.propTypes = {
  backgroundStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  spinnerStyle: PropTypes.object,
  text: PropTypes.string,
  onPress: PropTypes.func,
  spinner: PropTypes.bool
};

OuterButtonView.defaultProps = {
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
  onPress: (() => {}) // work-around to suppress eslinters no-default-prop
};

export default OuterButtonView;
