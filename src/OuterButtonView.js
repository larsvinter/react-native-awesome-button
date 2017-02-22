import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  const lars = 'er';

  alert(props.viewState);

  return (
    <View>
      <Text>Dette {lars} en test og en {props.item}</Text>
    </View>
  );
};

OuterButtonView.propTypes = {
  viewState: PropTypes.object,
  item: PropTypes.string.isRequired,
};

OuterButtonView.defaultProps = {
  viewState: {
    backgroundStyle: {
      backgrouldColor: 'rgb(0, 255, 0)'
    }
  },
  item: 'default'
};

export default OuterButtonView;
