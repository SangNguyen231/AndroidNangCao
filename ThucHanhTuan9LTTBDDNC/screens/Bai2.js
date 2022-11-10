import { StatusBar } from 'expo-status-bar';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useEffect, useRef, useState } from 'react';

const Bai2 = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const [location, setLocation]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(Math.random() * 300),
      marginTop: new Animated.Value(Math.random() * 600)
    });

  const [location1, setLocation1]
    = useState({
      x: null,
      y: null,
      marginLeft1: new Animated.Value(Math.random() * 300),
      marginTop1: new Animated.Value(Math.random() * 600)
    });

  const [location2, setLocation2]
    = useState({
      x: null,
      y: null,
      marginLeft2: new Animated.Value(Math.random() * 300),
      marginTop2: new Animated.Value(Math.random() * 600)
    });

  function onPress(evt) {
    // var x = evt.nativeEvent.locationX;
    // var y = evt.nativeEvent.locationY;
    var x = Math.random() * 300;
    var y = Math.random() * 600;
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y
    })
  }

  function onPress1(evt) {
    // var x = evt.nativeEvent.locationX;
    // var y = evt.nativeEvent.locationY;
    var x = Math.random() * 300;
    var y = Math.random() * 600;
    setLocation1({
      x: x,
      y: y,
      marginLeft1: x,
      marginTop1: y
    })
  }

  function onPress2(evt) {
    // var x = evt.nativeEvent.locationX;
    // var y = evt.nativeEvent.locationY;
    var x = Math.random() * 300;
    var y = Math.random() * 600;
    setLocation2({
      x: x,
      y: y,
      marginLeft2: x,
      marginTop2: y
    })
  }

  function onMove(evt) {
  }

  function onRelease() {

  }

  const { marginTop, marginLeft } = location;
  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        style={{ marginLeft: marginLeft, marginTop: marginTop, position:"absolute" }}
      >
        <Text style={{ fontSize: 80 }}>🐀 </Text>
      </Animated.View>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress1}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        style={{ marginLeft: marginLeft1, marginTop: marginTop1, position:"absolute" }}
      >
        <Text style={{ fontSize: 80 }}>🐀 </Text>
      </Animated.View>
      <Animated.View
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderGrant={onPress2}
        onResponderMove={onMove}
        onResponderRelease={onRelease}
        style={{ marginLeft: marginLeft2, marginTop: marginTop2, position:"absolute"}}
      >
        <Text style={{ fontSize: 80 }}>🐀 </Text>
      </Animated.View>
    </View>
  );
}

export default Bai2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
})