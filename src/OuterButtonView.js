import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';

import InnerButtonView from './InnerButtonView';

const OuterButtonView = (props) => {
  const lars = 'er';

  alert(JSON.stringify(props.viewState));

  return (
    <View>
      <Text>Dette {lars} en test</Text>
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
    }
  }
};

export default OuterButtonView;
