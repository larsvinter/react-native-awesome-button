### React Native Awesome Button
An `<AwesomeButton />` component that creates a button depicting different states in terms of e.g. color and label text. When a new buttonState is passed to the component the button will animate transition to the new appearance specified upon initiation. You can also pass in different functions to be called on touch depending of the current state of the button.


### Content
- [Installation](#installation)
- [Usage Example](#usage-example)
  - [Simple Example](#simple-example)
  - [Advanced Example](#advanced-example)
- [Component properties](#component-properties)
- [Roadmap](#roadmap)
- [Contributing](#contributing)


### Installation
1. `npm install react-native-awesome-button --save`
2. Whenever you want to use it within React Native code you can: `import AwesomeButton from 'react-native-awesome-button'`
3. Use `<AwesomeButton />` wherever you want :)



### Usage Example

#### Simple Example
To use `<AwesomeButton>`, you need to import `react-native-awesome-button` and insert `<AwesomeButton>` comonent in the render function with the required properties. Just as it's done below:
```javascript
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

```

In this example, a simple button with only one appearance and onPress-function will be rendered. This would produce something like this:

![Example code result](https://raw.githubusercontent.com/larsvinter/react-native-awesome-button/master/docs/simple.png)

To run this example yourself, you need to do the following:

1. Clone the full source code from github: `git clone git@github.com:larsvinter/react-native-awesome-button.git`
2. Change to the proper directory of the simple example: `cd react-native-awesome-button/examples/Simple`
3. Install dependencies: `npm install`
4. For ios: Open the project in Xcode and hit 'run' (the project is inside 'ios' folder) (remember to restart the packager)

<BR>
<BR>

#### Advanced Example

This shows how you might implement an animated button that transitions to a new state upon e.g. a user press. Notice that you create an object that specifies the different states and then pass the prop buttonState to the button, when you want it to transition to a new appearance. You can have an unlimited number of possible states for a button.

```javascript
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import AwesomeButton from 'react-native-awesome-button';
import { Icon } from 'react-native-material-design';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 30,
    marginTop: 560
  }
});

export default class Advanced extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: 'idle'
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    this.setState({ buttonState: 'busy' });
    setTimeout(() => {
      this.setState({ buttonState: 'success' });
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton
          states={{
            idle: {
              text: 'Log In',
              icon: <Icon name="person" color="rgba(255, 255, 255, .9)" />,
              iconAlignment: 'left',
              backgroundStyle: {
                backgroundColor: 'blue',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              },
              labelStyle: {
                color: 'white',
                alignSelf: 'center',
                marginLeft: 10
              },
              onPress: this.handleLogin
            },
            busy: {
              text: 'Loggin In',
              spinner: true,
              spinnerProps: {
                animated: true,
                color: 'white'
              },
              backgroundStyle: {
                backgroundColor: 'darkblue',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              }
            },
            success: {
              text: 'Logged In',
              backgroundStyle: {
                backgroundColor: 'green',
                minHeight: 60,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
              }
            }
          }}
          transitionDuration={400}
          buttonState={this.state.buttonState}
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('Advanced', () => Advanced);
```

In this example, a login-button with three different appearances will be rendered. This would produce something like this (in 3 steps):
![Example code result](https://raw.githubusercontent.com/Sh3rawi/react-native-awesome-button/Android_Support/docs/awesomeButton.gif)

To run this example yourself, you need to do the following:

1. Clone the full source code from github: `git clone git@github.com:larsvinter/react-native-awesome-button.git`
2. Change to the proper directory of the advanced example: `cd react-native-awesome-button/examples/Advanced`
3. Install dependencies: `npm install`
4. Open the project in Xcode and hit 'run' (the project is inside 'ios' folder) (remember to restart the packager)

<BR>
<BR>
### Component properties

| Prop | Type | Description |
|---|---|---|
|**`states`**|`object`|Includes a nested object for each possible state and the parameters for this state. The key used for the nested object will be the name for that specific state|
|**`buttonState`**|`string`|The key used to tell the button what apparance and functionality to take on. Changing this will trigger an animation to the new state given|
|**`transitionDuration`**|`number`|The duration of the transition in ms|


#### Definition of each key-value pair in the `states` objects

Each state in the states object should have a unique key. For each of these keys you need to specify an object. This object will hold all parameters that are specific for the button when in the given state. Each of these objects can have one or more of these key-value pairs:

| Key | Type | Description |
|---|---|---|
|**`onPress`**|`function`|The function fired when the button is pressed. If not defined the button has no press functionality and simply renders as a view|
|**`spinner`**|`bool`|If true the button will show a spinner on the left hand side of the label when in this state|
|**`text`**|`string`|The label of the button when in this state|
|**`icon`**|`string`|The view (e.g. an icon) to render next to the text (any View will be accepted|
|**`iconAlignment`**|`string`|Whether to put icon on the left hand or right hand side of text. Accepts 'left' or 'right'|
|**`backgroundStyle`**|`object`|An object with styling for the background view of the button in the given state|
|**`labelStyle`**|`object`|An object with styling for the label text of the button in the given state|


### Versions
v 1.8.0
  - Added feature to include an icon (any View will be accepted) to left or right hand side of text (see Advanced example)
  - Fixed linting errors in examples

v 1.7.0  Major refactoring adding several improvements (and a few breaking changes):
  - Background Style now accepts same styling properties as the component View
  - Label Style now accepts same styling properties as the component Text
  - Addressed several bugs raised
  - Added eslinting (using airbnb preset)


### Roadmap
 - Add tests
 - Add animations on other props (e.g. labelStyle or width)
 - Add smooth fade in/out of text at "center timing" of animation to sync effects
 - Add Android examples


### Contributing
If you would like to refactor or help with new features, please create a separate branch, make your changes, commit, push and submit a pull-request.
