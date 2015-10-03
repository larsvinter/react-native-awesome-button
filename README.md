### React Native Awesome Button
An `<AwesomeButton />` component that creates a button depict different states in terms of e.g. color and label text. When a new buttonState is passed to the component the button will animate transition to the new appearance specified upon initiation. You can also pass in different functions to be called on touch depending of the current state of the button.

<img src='http://oi62.tinypic.com/8x4u94.jpg' />

### Content
- [Installation](#installation)
- [Usage example](#usage-example)
  - [Simple example](#simple-example)
  - [Advanced example](#advanced-example)
- [Component properties](#component-properties)

### Installation
1. `npm install react-native-awesome-button --save`
2. Whenever you want to use it within React Native code now you can: `var AwesomeButton = require('react-native-awesome-button');`

### Usage Example

#### Simple Example

To use `<AwesomeButton>`, you need to require `react-native-awesome-button` to your module and insert `<AwesomeButton>` tag inside render function with the required properties as it's done below:
```javascript
var React = require('react-native');
var AwesomeButton = require('react-native-awesome-button');

var {
  StyleSheet
} = React;

var Menu = React.createClass({

  buttonClick: function() {
    console.log('I was clicked!');
  },

  render: function() {

    var buttonStates = {
      default: {
        text: 'Click Me',
        onClick: this.buttonClick,
        backgroundStyle: {
          backgroundColor: '#CC0033'
        },
        labelStyle: {
          color: '#FFFFFF'
        }
      }
    }

    return (
      <AwesomeButton style={styles.myButton} 
                     states={buttonStates}
                     buttonState="default" />
    );
  }
});

var styles = StyleSheet.create({
  myButton: {
    width: 300,
    height: 100,
    borderRadius: 10
  }
});
```

In this example, a simple button with only one appearance and function will be rendered. This would produce something like this:

![Example code result](https://raw.githubusercontent.com/brentvatne/react-native-overlay/master/example.png)

#### Advanced Example - Animated Login Button

This shows how you might implement a button that transitions to a new state upon user click. Notice that you create an object that specifies the different states and then pass the prop buttonState to the button, when you want it to transition.

```javascript
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
    this.setState({ buttonState: 'busy' })
  },

  render: function() {

    var buttonStates = {
      idle: {
        touchable: true,
        onClick: this.logIn,
        text: 'Log In',
        backgroundStyle: {
          backgroundColor: '#326173'
        },
        labelStyle: {
          color: '#DDDDDD',
        },
      },
      busy: {
        spinner: true,          
        text: 'Logging In',
        onClick: this.logIn,
        backgroundStyle: {
          backgroundColor: '#CC0033',
        },
        labelStyle: {
          color: '#FFFFFF',
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


### Component properties
- `states` (Object) - object of all possible states and parameters for each state. The following parameters can be used:
  - `touchable` (Bool) - indicates if the button will receive touch event in this state
  - `onClick` (Function) - the function to call when button is clicked in this state
  - `spinner` (Bool) - if true then the button will show a spinner in this state
  - `text` (String) - the label of the button in this state
  - `backgroundStyle` (Object) - a style object for the button background (with same style properties as for a <View> component)
  - `labelStyle` (Object) - a style object for the label (with same style properties as for a <Text> component)

- `buttonState` (String) - tells the button which is the current state
  - `xlight` - extra light blur type
  - `light` - light blur type
  - `dark` - dark blur type

- `style` (Object) - gives the style properties for the button (e.g. for size etc.) (with same style properties as for a <View> component)

