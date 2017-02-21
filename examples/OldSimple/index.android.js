/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// TODO: Update Android example

class Simple extends Component {
  render() {
    return (
      <View>
        <Text>
          Sorry - Android not supported yet!
        </Text>
      </View>
    );
  }

}

AppRegistry.registerComponent('Simple', () => Simple);
