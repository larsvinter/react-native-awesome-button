const React = require('react-native')


const {
  Animated,
  ActivityIndicatorIOS,
  Component,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} = React


class InnerButtonView extends Component {

  render() {
    return(
      <View style={styles.insideView}>
        { this.props.currentStateObject.spinner ? <ActivityIndicatorIOS color="white" style={styles.activityIndicator}/> : null }
        <Text style={ this.props.currentStateObject.labelStyle }>{ this.props.currentStateObject.text }</Text>
      </View>
    )
  }
  
}


class ButtonView extends Component {

  render() {

    if(this.props.states.hasOwnProperty(this.props.buttonState)){
      const currentStateObject = this.props.states[this.props.buttonState]
    } else {
      const currentStateObject = {
        text: 'Button state not recognized',
        backgroundStyle: {
          backgroundColor: '#000000',          
        },
        labelStyle: {
          color: '#EEEEEE',
        }
      }
    }
    if (currentStateObject.touchable) {
      return (
        <TouchableOpacity style={[ this.props.style, currentStateObject.backgroundStyle ]}
                          activeOpacity={0.92}
                          onPress={currentStateObject.onPress}>
          <View style={[styles.container, this.props.style ]}>
            <InnerButtonView currentStateObject={currentStateObject}/>
          </View>
        </TouchableOpacity> 
      )
    } else {
      return (
      <View style={[ this.props.style, currentStateObject.backgroundStyle ]}>
        <InnerButtonView currentStateObject={currentStateObject}/>
      </View>
      )
    }
  }

}


const AnimatedButton = Animated.createAnimatedComponent(ButtonView)


class AwesomeButton extends Component {

  constructor(props: any) {
    super(props);
    this.state = {
      opacityValue: new Animated.Value(0),
      view1: this.props.buttonState
    }
  }

  startAnimation() {
    Animated.timing(this.state.opacityValue,
    {
      toValue: 1,
      duration: 300,
      delay: 50
    }).start()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ view1: this.props.buttonState, view2: nextProps.buttonState })
    this.startAnimation()
  }

  render() {
    return (
      <View>
        <ButtonView {...this.props} buttonState={this.state.view1}/>
        { this.state.view2 ? <AnimatedButton {...this.props} buttonState={this.state.view2} style={[ this.props.style, { position: 'absolute', top: 0, left: 0, opacity: this.state.opacityValue }]}/> : null }
      </View>
    )
  }

}


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
})


module.exports = AwesomeButton