import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

import Splash from "./screens/splash";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from './screens/login';
const Stack = createStackNavigator();

export default function App() {
  return (
   
    <NavigationContainer>
    <StatusBar backgroundColor="white" barStyle="light-content" />
     <Stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
   
  },
});
