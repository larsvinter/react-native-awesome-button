/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Simple = React.createClass({
  render: function() {
    return (
      <View>
        <Text>
          Sorry - Android not supported yet!
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('Simple', () => Simple);
