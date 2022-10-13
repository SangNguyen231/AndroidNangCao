import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import React, { useState } from 'react'

const Home = (props) => {

  const moveBai1 = () => props.navigation.navigate("Bai1")
  const moveBai2 = () => props.navigation.navigate("Bai2")

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.title1, { textAlign: 'center' }]}>Ôn Thi Giữa Kỳ</Text>
        <Text style={[styles.title, { textAlign: 'center' }]}>Chọn câu muốn xem</Text>
      </View>

      <View style={[{ marginTop: 20 }]}>
        <TouchableOpacity style={styles.button} onPress={moveBai1}>
          <Text>Bai 1</Text>
        </TouchableOpacity>
      </View>

      <View style={[{ marginTop: 20 }]}>
        <TouchableOpacity style={styles.button} onPress={moveBai2}>
          <Text>Bai 2</Text>
        </TouchableOpacity>
      </View>

    </View>
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
    alignItems: 'center'
  },
  title: {
    marginTop: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
    alignItems: 'center',
    fontSize: 15,
  },
  title1: {
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 25,
  },
  fram1: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    position: 'relative',
    width: 360,
    height: 640
  }
})