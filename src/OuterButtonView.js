import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  return (
    <View style={props.backgroundStyle}>
      <Text style={props.labelStyle}>{props.text}</Text>
    </View>
  );
};

OuterButtonView.propTypes = {
  backgroundStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  text: PropTypes.string
};

OuterButtonView.defaultProps = {
  backgroundStyle: {
    backgrouldColor: 'rgb(0, 255, 0)'
  },
  labelStyle: {
    color: 'rgb(255, 255, 255)'
  },
  text: 'Click here'
};

export default OuterButtonView;
