import { StyleSheet, Text, View, Animated, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from "react";

const Bai2 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const dichuyen = () => {
    Animated.timing(fadeAnim, {
      toValue: 500,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{height:700, marginTop:50}}>
        <Animated.View style={{ marginTop: fadeAnim }}>
          <Text style={{ fontSize: 100 }}>🚁</Text>
        </Animated.View>
      </View>
      <TouchableOpacity
        style={{ width: 200, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', top: 20 }}
        onPress={dichuyen}
      >
        <Text style={{ fontSize: 20, color: '#fff' }}>
          Di chuyen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default Bai2

const styles = StyleSheet.create({})