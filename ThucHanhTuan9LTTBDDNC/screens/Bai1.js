import { useRef, useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Bai1 = () => {
    const [location, setLocation]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(Math.random() * 400),
      marginTop: new Animated.Value(Math.random() * 600)
    });
  function onPress(evt) {
    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y
    })
  }

  function onMove(evt) {
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    //setLocation({marginLeft: x, marginTop: y })
  }

  function onRelease() {
    console.log("Realse!");
  }

  const { marginTop, marginLeft } = location;
  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}>
      <Animated.View
        style={{ marginLeft: marginLeft, marginTop: marginTop }}
      >
        <Text style={{fontSize:80}}>🐈</Text>
      </Animated.View>

    </View>
  );
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})