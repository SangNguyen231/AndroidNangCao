import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai5 = () => {
  const fade1 = useRef(new Animated.Value(0)).current;
  const fade2 = useRef(new Animated.Value(0)).current;
  const fade3 = useRef(new Animated.Value(0)).current;
  const fade4 = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.timing(fade1, {
        toValue: -170,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fade2, {
        toValue: 170,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fade3, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(fade4, {
        toValue: 200,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, []);

  return (
    <View style={{ marginTop: 200, marginLeft: 8 }}>
      <Animated.View style={{ marginLeft: fade1 }}>
        <View style={{ width: 60, height: 60, backgroundColor: "yellow", position: "absolute", marginLeft: 170, }} />
      </Animated.View>
      <Animated.View style={{ marginLeft: fade2 }}>
        <View style={{ width: 60, height: 60, backgroundColor: "blue", position: "absolute", marginLeft: 170, }} />
      </Animated.View>
      <Animated.View style={{ opacity: fade3, marginTop: fade4 }}>
        <View style={{ width: 60, height: 60, backgroundColor: "red", position: "absolute", marginLeft: 170, }} />
      </Animated.View>
    </View>
  );
}

export default Bai5

const styles = StyleSheet.create({})