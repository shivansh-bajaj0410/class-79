import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";
import {NavigationContainer}from '@react-navigation/native'
import {CreateStackNavigator}from'@react-navigation/stack'
const Stack = CreateStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "home"
        screenOptions = {{headerShown:false}}>
          <Stack.Screen name = "home" component={HomeScreen}/>
           <Stack.Screen name = "issLocation" component={IssLocationScreen}/>
           <Stack.Screen name = "meteors" component={MeteorScreen}/>
           </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
