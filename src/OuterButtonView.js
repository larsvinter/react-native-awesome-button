import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  const lars = 'er';

  return (
    <View>
      <Text>Dette {lars} en test og en {props.item}</Text>
      <InnerButtonView />
    </View>
  );
};

OuterButtonView.propTypes = {
  item: PropTypes.string.isRequired,
};

OuterButtonView.defaultProps = {
  item: 'default'
};

export default OuterButtonView;
