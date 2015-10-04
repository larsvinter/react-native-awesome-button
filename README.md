### React Native Awesome Button
An `<AwesomeButton />` component that creates a button depicting different states in terms of e.g. color and label text. When a new buttonState is passed to the component the button will animate transition to the new appearance specified upon initiation. You can also pass in different functions to be called on touch depending of the current state of the button.

### Content
- [Installation](#installation)
- [Usage Example](#usage-example)
  - [Simple Example](#simple-example)
  - [Advanced Example](#advanced-example)
- [Component properties](#component-properties)
- [Roadmap](#roadmap)

### Installation
1. `npm install react-native-awesome-button --save`
2. Whenever you want to use it within React Native code now you can: `const AwesomeButton = require('react-native-awesome-button')`

### Usage Example

#### Simple Example

To use `<AwesomeButton>`, you need to require `react-native-awesome-button` to your module and insert `<AwesomeButton>` tag inside render function with the required properties as it's done below:
```javascript
const React = require('react-native')
const AwesomeButton = require('react-native-awesome-button')


const {
  AppRegistry,
  Component,
  View,
  StyleSheet
} = React


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myButton: {
    flex: 1,
    height: 50,
    width: 300,
    borderRadius: 8
  },
  myButtonDefaultBackground: {
    backgroundColor: '#477CCC'
  },
  myButtonDefaultLabel: {
    color: '#DDDDDD',
    fontSize: 18
  }
})


class Simple extends Component {
  
  handleButtonPress() {
    console.log('I was pressed')
  }

  render() {
    return (
      <View style={styles.container}>
        <AwesomeButton style={styles.myButton}
                       states={{
                        default: {
                          text: 'Press me',
                          touchable: true,
                          onPress: this.handleButtonPress,
                          backgroundStyle: styles.myButtonDefaultBackground,
                          labelStyle: styles.myButtonDefaultLabel
                        }
                       }}
                       buttonState="default" />
      </View>
    )
  }

}


AppRegistry.registerComponent('Simple', () => Simple)
```

In this example, a simple button with only one appearance and onPress-function will be rendered. This would produce something like this:

![Example code result](https://raw.githubusercontent.com/larsvinter/react-native-awesome-button/docs/Simple%20Example.png)

To run this example yourself, you need to do the following:

1. Clone the full source code from github: `git clone git@github.com:larsvinter/react-native-awesome-button.git`
2. Change to the proper directory of the simple example: `cd react-native-awesome-button/examples/Simple`
3. Install dependecies: `npm install`
4. Open the project in Xcode and hit 'run' (the project is inside 'ios' folder) (remember to restart the packager)

#### Advanced Example

This shows how you might implement an "animated login" button that transitions to a new state upon user click. Notice that you create an object that specifies the different states and then pass the prop buttonState to the button, when you want it to transition.

Coming soon.


### Component properties

| Prop | Type | Description |
|---|---|---|
|**`states`**|`object`|Includes a nested object for each possible state and the parameters for this state. The key used for the nested object will be the name for that specific state|
|**`buttonState`**|`string`|The key used to tell the button what apparance and functionality to take on. Changing this will trigger an animation to the new state given|
|**`style`**|`styles object`|A standard style object for the button (with same style properties as for a `<View>` component. Possible to reference a StyleSheet object|

#### Keys in the `states` objects

Each state in the states object should have a unique key. For each of these keys you need to specify the parameters for the button when it is in that specific state. A buttonstate can have one or more of the following parameters:

| Key | Type | Description |
|---|---|---|
|**`touchable`**|`bool`|If true the button will accept press events and dim the color while being pressed in this state. The function given to the `onPress` key will be fired|
|**`onPress`**|`function`|The function fired when the button is pressed (only if `touchable` is set to true) in this state|
|**`spinner`**|`bool`|If true the button will show a spinner on the left hand side of the label in this state|
|**`text`**|`string`|The label of the button in this state|
|**`backgroundStyle`**|`styles object`|A style object for the button background (with same style properties as for a `<View>` component in this state)|
|**`labelStyle`**|`styles object`|A style object for the label (with same style properties as for a `<Text>` component in this state)|


### Roadmap
 - Add advanced example
 - Clean-up the way styling is handled (i.e. avoid two styles for actual button appearance)
 - Fix issues with using flex-box for styling
 - Improve transition animation (i.e. instead of fading between colors, do a proper interpolated transition from one color to the other and then only fade the label text)
 - Add Android compatibility
 

 If you would like to refactor, please create a separate branch, make your changes, commit, push and submit a pull-request