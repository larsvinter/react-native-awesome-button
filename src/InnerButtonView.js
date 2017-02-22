import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  insideView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center'
  },
  activityIndicator: {
    marginRight: 8,
  },
  container: {
    flex: 1,
  }
});

const InnerButtonView = props => (
  <View style={styles.insideView}>
    { props.currentStateObject.spinner ? <ActivityIndicator color={props.spinnerColor} style={styles.activityIndicator} styleAttr="small" /> : null }
    <Text style={props.labelStyle}>{props.currentStateObject.text}</Text>
  </View>
);

export default InnerButtonView;
