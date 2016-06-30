/**
 * Sample React Native App showing use of AwesomeButton
 */

 'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Component,
  View,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

class Simple extends Component {
  
  handleButtonPress() {
    console.log('I was pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton states={{
                        default: {
                          text: 'Press me',
                          onPress: this.handleButtonPress,
                        }
                       }} />
      </View>
    )
  }

}


AppRegistry.registerComponent('Simple', () => Simple)
