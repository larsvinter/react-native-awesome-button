## react-native-awesome-button

An `<AwesomeButton />` component that creates a button that can depict different states in terms of color and label text. When a new buttonState is passed to the component the button will animate transition to a new appearance as specified. 

### Add it to your project

1. Run `npm install react-native-awesome-button --save`
2. Whenever you want to use it within React Native code now you can: `var AwesomeButton = require('react-native-awesome-button');`

## Example - An animated login button

This shows how you might implement a button that transitions to a new state upon user click. Notice that you create an object that specifies the different states and then pass the prop buttonState to the button, when you want it to transition.

```javascript
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var AwesomeButton = require('./react-native-awesome-button')

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var ComponentTester = React.createClass({

  getInitialState: function() {
    return ({
      buttonState: 'idle'
    })
  },

  logIn: function() {
    console.log('haps haps');
    this.setState({ buttonState: 'busy' })
  },

  render: function() {

    var buttonStates = {
      inactive: {
        text: 'Log In',
        backgroundStyle: {
          backgroundColor: 'gray'
        },
        labelStyle: {
          color: 'white'
        },
      },
      idle: {
        touchable: true,
        onClick: this.logIn,
        text: 'Log In',
        backgroundStyle: {
          backgroundColor: '#326173'
        },
        labelStyle: {
          color: 'white',
        },
      },
      busy: {
        spinner: true,          
        text: 'Logging In',
        onClick: this.logIn,
        backgroundStyle: {
          backgroundColor: 'red',
        },
        labelStyle: {
          color: 'white',
        }
      },
      success: {
        text: 'Logged In',
        icon: 'checkmark',
        backgroundStyle: {
          backgroundColor: 'green',          
        },
        labelStyle: {
          color: 'white',
        }
      }
    };


    return (
      <View style={styles.container}>
        <AwesomeButton style={styles.myButton} 
                       states={buttonStates}
                       buttonState={this.state.buttonState} />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  myButton: {
    width: 300,
    height: 100,
    borderRadius: 10
  },
});

AppRegistry.registerComponent('ComponentTester', () => ComponentTester);
```
This would produce something like this:

![Example code result](https://raw.githubusercontent.com/brentvatne/react-native-overlay/master/example.png)

You can try this code yourself by cloning this repo and running
`Examples/LoaingOverlay`.
