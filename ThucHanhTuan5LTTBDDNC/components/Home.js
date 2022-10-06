import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import React , {useState} from 'react'

const Home = (props) => {

    const moveBai1 = () => props.navigation.navigate("Bai1")
    const moveBai2 = () => props.navigation.navigate("Bai2")

  return (
    <View style={styles.fram1}>
        <Text style={[styles.title1, { textAlign: 'center' }]}>Thực hành tuần 5 LTTBDD</Text>
        <Text style={[styles.title, { textAlign: 'center' }]}>Chọn câu muốn xem</Text>
        <View style={[{ top: 450 }, { left: 30 }, { position: 'absolute' }]}>
          <TouchableOpacity style={styles.button} onPress={moveBai2}>
            <Text>Bai 2</Text>
          </TouchableOpacity>
        </View>
        <View style={[{ top: 400 }, { left: 30 }, { position: 'absolute' }]}>
          <TouchableOpacity style={styles.button} onPress={moveBai1}>
            <Text>Bai 1</Text>
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