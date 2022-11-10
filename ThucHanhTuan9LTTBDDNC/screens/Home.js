import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const Home = (props) => {

  const moveBai1 = () => props.navigation.navigate("Bai1")
  const moveBai2 = () => props.navigation.navigate("Bai2")
  const moveBai3 = () => props.navigation.navigate("Bai3")

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0)', 'rgba(209, 244, 246, 1)', 'rgba(229, 244, 245, 1)', 'rgba(0, 204, 249, 1)']}
      style={styles.container}>
      <Text style={[styles.title1, { textAlign: 'center' }]}>Thực hành tuần 9 LTTBDD</Text>
      <Text style={[styles.title, { textAlign: 'center' }]}>Chọn câu muốn xem</Text>
      <View style={{marginTop:150}}>
        <View style={{}}>
          <TouchableOpacity style={styles.button} onPress={moveBai1}>
            <Text>Bai 1</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity style={styles.button} onPress={moveBai2}>
            <Text>Bai 2</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity style={styles.button} onPress={moveBai3}>
            <Text>Bai 3</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#E3C000',
    width: 300,
    height: 45,
    padding: 15,
    alignItems: 'center',
    marginTop: 10
  },
  title: {
    position: 'absolute',
    width: "100%",
    height: 53,
    left: 0,
    top: 300,

    fontFamily: 'Roboto',
    fontWeight: '700',
    alignItems: 'center',
    fontSize: 15,
  },
  title1: {
    position: 'absolute',
    width: '100%',
    height: 60,
    left: 0,
    top: 220,

    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
  },
  fram1: {
    position: 'absolute',
    width: 360,
    height: 640,
    left: 0,
    top: 0
  },
})