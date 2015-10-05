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
        { this.props.currentStateObject.spinner ? <ActivityIndicatorIOS color={ this.props.labelStyle.color } style={styles.activityIndicator}/> : null }
        <Text style={ this.props.labelStyle }>{ this.props.currentStateObject.text }</Text>
      </View>
    )
  }
  
}


class ButtonView extends Component {

  getDefaultBackgroundStyle() {
    return (
      {
        flex: 1,
        height: 40,
        backgroundColor: '#477CCC',
        borderRadius: 20
      }
    )
  }

  getDefaultLabelStyle() {
    return (
      {
        color: '#000000'
      }
    )
  }

  getDefaultCurrentStateObject() {
    return (
      this.props.states[Object.keys(this.props.states)[0]]
    )
  }

  render() {

    // TODO: Check if this.props.states exists and has at least a text defined. If not, throw error

    const backgroundStyle = this.props.backgroundStyle || this.getDefaultBackgroundStyle()
    const labelStyle = this.props.labelStyle || this.getDefaultLabelStyle()
    const currentStateObject = this.props.states[this.props.buttonState] || this.getDefaultCurrentStateObject()


    if (currentStateObject.onPress) {
      return (
        <TouchableOpacity style={ backgroundStyle }
                          activeOpacity={0.92}
                          onPress={currentStateObject.onPress}>
          <View style={[ backgroundStyle, { backgroundColor: currentStateObject.backgroundColor } ]}>
            <InnerButtonView currentStateObject={currentStateObject} labelStyle={ labelStyle } />
          </View>
        </TouchableOpacity> 
      )
    } else {
      return (
      <View style={ backgroundStyle }>
        <InnerButtonView currentStateObject={currentStateObject} labelStyle={ labelStyle }/>
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

  getDefaultTransitionDuration() {
    return 300
  }

  startAnimation() {
    Animated.timing(this.state.opacityValue,
    {
      toValue: 1,
      duration: this.props.transitionDuration || getDefaultTransitionDuration(),
      delay: 50
    }).start()
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ view1: this.props.buttonState, view2: nextProps.buttonState })
    this.startAnimation()
  }

  render() {
    return (
      <View style={ styles.container }>
        <ButtonView {...this.props} buttonState={this.state.view1}/>
        { this.state.view2 ? <AnimatedButton {...this.props} buttonState={this.state.view2} style={{ position: 'absolute', top: 0, left: 0, opacity: this.state.opacityValue }}/> : null }
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