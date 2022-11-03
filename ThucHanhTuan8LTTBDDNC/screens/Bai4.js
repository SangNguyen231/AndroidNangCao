import { View, Text, Image, Animated, StyleSheet} from "react-native";
import React, { useEffect, useRef } from "react";

const Bai4 = () => {
  const fadeText = useRef(new Animated.Value(0)).current;
  const fadeIma = useRef(new Animated.Value(0)).current;
  function start() {}
  useEffect(() => {
    Animated.timing(fadeText, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.timing(fadeIma, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  }, []);
  return (
    <View style={{marginTop:300}}>
      <Animated.View style={{ marginLeft: fadeText }}>
        <Text style={{ fontSize: 20 }}>Welcome to Animation React Native</Text>
      </Animated.View>
      <Animated.View style={{ opacity: fadeIma, alignItems:'center', marginTop:50 }}>
        <Image source={require("../assets/favicon.png")}></Image>
      </Animated.View>
    </View>
  );
}

export default Bai4

const styles = StyleSheet.create({})