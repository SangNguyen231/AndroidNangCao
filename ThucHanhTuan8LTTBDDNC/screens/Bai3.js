
import { View, Text, Animated, Button, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef } from "react";

const Bai3 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  function start() {
    Animated.timing(fadeAnim, {
      toValue: 300,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }
  function stop() {
    Animated.timing(fadeAnim).stop();
  }
  function reset() {
    Animated.timing(fadeAnim).reset();
  }

  return (
    <View>
      <View style={{marginTop:100}}>
        <Animated.View style={{ marginLeft: fadeAnim }}>
          <Text style={{ fontSize: 100 }}>🚁</Text>
        </Animated.View>
      </View>
      <View
        style={{flexDirection: "row", justifyContent: "space-around", marginTop: 380}}
      >
        <TouchableOpacity
          style={{backgroundColor: "red", padding: 20}}
          onPress={start}
        >
          <Text style={{fontSize: 20, color: "white" }}>
            Start
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={stop}
          style={{ padding: 20, backgroundColor: "red" }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>
            Stop
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={reset}
          style={{ padding: 20, backgroundColor: "red"}}
        >
          <Text style={{fontSize: 20, color: "white" }}>
            Reset
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Bai3

const styles = StyleSheet.create({})