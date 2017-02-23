import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import AwesomeButton from 'react-native-awesome-button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560
  }
});


class Simple extends Component {
  handleButtonPress() {
    console.log('I was pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          states={{
            default: {
              backgroundStyle: {
                backgroundColor: 'red',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              },
              onPress: this.handleButtonPress
            }
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Simple', () => Simple);
