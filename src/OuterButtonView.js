import React, { PropTypes } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  const styles = StyleSheet.create({
    backgroundStyle: props.backgroundStyle,
    labelStyle: props.labelStyle
  });

  return (
    <TouchableOpacity
      onPress={props.onPress}
    >
      <View style={styles.backgroundStyle}>
        <Text style={styles.labelStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

OuterButtonView.propTypes = {
  backgroundStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  text: PropTypes.string,
  onPress: PropTypes.func
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
  text: 'Click here',
  onPress: (() => {}) // work-around to suppress eslinters no-default-prop
};

export default OuterButtonView;
