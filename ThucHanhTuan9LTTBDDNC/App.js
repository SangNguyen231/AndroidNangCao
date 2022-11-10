import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';
import icon from './assets/favicon.png'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Bai1 from './screens/Bai1';
import Bai2 from './screens/Bai2';
import Bai3 from './screens/Bai3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Bai1' component={Bai1}/>
        <Stack.Screen name='Bai2' component={Bai2}/>
        <Stack.Screen name='Bai3' component={Bai3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

