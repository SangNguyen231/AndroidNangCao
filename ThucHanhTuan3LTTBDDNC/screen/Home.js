import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const Home = (props) => {

    const moveCau1 = () => props.navigation.navigate("Cau1")
    const moveCau2 = () => props.navigation.navigate("Cau2")
    const moveCau3 = () => props.navigation.navigate("Cau3")

  return (
    <View style={styles.fram1}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(209, 244, 246, 1)', 'rgba(229, 244, 245, 1)', 'rgba(0, 204, 249, 1)']}
        style={styles.background}>
        <Text style={[styles.title1, { textAlign: 'center' }]}>Thực hành tuần 3 LTTBDD</Text>
        <Text style={[styles.title, { textAlign: 'center' }]}>Chọn câu muốn xem</Text>
        <View style={[{ top: 450 }, { left: 30 }, { position: 'absolute' }]}>
          <TouchableOpacity style={styles.button} onPress={moveCau3}>
            <Text>Cau 3</Text>
          </TouchableOpacity>
        </View>
        <View style={[{ top: 400 }, { left: 30 }, { position: 'absolute' }]}>
          <TouchableOpacity style={styles.button} onPress={moveCau2}>
            <Text>Cau 2</Text>
          </TouchableOpacity>
        </View>
        <View style={[{ top: 350 }, { left: 30 }, { position: 'absolute' }]}>
          <TouchableOpacity style={styles.button} onPress={moveCau1}>
            <Text>Cau 1</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

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
        position: 'absolute',
        width: 302,
        height: 53,
        left: 35,
        top: 300,
    
        fontFamily: 'Roboto',
        fontWeight: '700',
        alignItems: 'center',
        fontSize: 15,
      },
      title1: {
        position: 'absolute',
        width: 302,
        height: 60,
        left: 35,
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