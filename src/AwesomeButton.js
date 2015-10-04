const React = require('react-native')


const {
  Animated,
  ActivityIndicatorIOS,
  Component,
  View,
  Text,
  StyleSheet,
  TouchableHighlight
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

  shadeColor1(color, percent) {  
    const num = parseInt(color.slice(1),16), amt = Math.round(2.55 * percent), R = (num >> 16) + amt, G = (num >> 8 & 0x00FF) + amt, B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
  }

  render() {
    if(this.props.states.hasOwnProperty(this.props.buttonState)){
      const currentStateObject = this.props.states[this.props.buttonState]
    } else {
      const currentStateObject = {
        text: 'Button state not recognized',
        backgroundStyle: {
          backgroundColor: 'black',          
        },
        labelStyle: {
          color: 'white',
        }
      }
    }
    if (currentStateObject.touchable) {
      return (
        <TouchableHighlight style={[ this.props.style, currentStateObject.backgroundStyle ]}
                            underlayColor={this.shadeColor1(currentStateObject.backgroundStyle.backgroundColor,-5)}
                            onPress={currentStateObject.onPress}>
          <View style={[styles.container, this.props.style ]}>
            <InnerButtonView currentStateObject={currentStateObject}/>
          </View>
        </TouchableHighlight> 
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
      view1: this.props.buttonState,
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
        <AnimatedButton {...this.props} buttonState={this.state.view2} style={[ this.props.style, { position: 'absolute', top: 0, left: 0, opacity: this.state.opacityValue }]}/>
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