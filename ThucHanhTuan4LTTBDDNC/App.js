import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Bai1 from './screens/Bai1';
import Bai2 from './screens/Bai2';
import Screen02 from './screens/screen02'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='Bai1' component={Bai1}></Stack.Screen>
        <Stack.Screen name='Bai2' component={Bai2}></Stack.Screen>
        <Stack.Screen name='Screen2' component={Screen02}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
});
