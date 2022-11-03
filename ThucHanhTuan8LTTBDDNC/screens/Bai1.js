import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";

const Bai1 = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text
          style={{
            fontSize: 23,
          }}
        >
          Welcome to Animation React Native
        </Text>
      </Animated.View>
    </View>
  );
}

export default Bai1

const styles = StyleSheet.create({})