import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  return (
    <View style={props.viewState.backgroundStyle}>
      <Text style={props.viewState.labelStyle}>{props.viewState.text}</Text>
    </View>
  );
};

OuterButtonView.propTypes = {
  viewState: PropTypes.object
};

OuterButtonView.defaultProps = {
  viewState: {
    backgroundStyle: {
      backgrouldColor: 'rgb(0, 255, 0)'
    },
    labelStyle: {
      color: 'rgb(255, 255, 0)'
    },
    text: 'Click here'
  }
};

export default OuterButtonView;
