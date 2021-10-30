import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import {API_KEY} from "@env";
export default class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
  componentDidMount() {
      this.render()
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  changePage(){
      // console.log(this.props);
    this.props.navigation.navigate('login');
  }

  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: '#eee',
          }}
          loop={false}
        autoPlay
        onAnimationFinish = {() => this.changePage()}

        source={require('../assets/splash.json')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});