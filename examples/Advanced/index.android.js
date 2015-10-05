/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  View,
} = React;

var Advanced = React.createClass({
  render: function() {
    return (
      <View >
        <Text>
          Android not yet supported
        </Text>
      </View>
    );
  }
});

AppRegistry.registerComponent('Advanced', () => Advanced);
