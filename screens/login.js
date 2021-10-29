import React from "react";
import { Button, StyleSheet, View, Text } from 'react-native';
export default class Login extends React.Component {
    componentDidMount() {
        // Or set a specific startFrame and endFrame with:
        // this.animation.play(30, 120);
      }

      render() {
        return (
          <View style={styles.animationContainer}>
            <Text>Home Login</Text>
          </View>
        );
      }
}


const styles = StyleSheet.create({
    animationContainer: {
      backgroundColor: '#fff',
     
      flex: 1,
    },
    buttonContainer: {
      paddingTop: 20,
    },
  });