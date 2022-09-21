import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screen/Home';
import cau1 from './screen/cau1';
import cau2 from './screen/cau2';
import cau3 from './screen/cau3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cau1' component={cau1}/>
        <Stack.Screen name='Cau2' component={cau2}/>
        <Stack.Screen name='Cau3' component={cau3}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
