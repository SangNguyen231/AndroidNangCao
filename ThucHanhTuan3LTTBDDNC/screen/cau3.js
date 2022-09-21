import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const cau3 = () => {
  return (
    <View style={styles.fram1}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(209, 244, 246, 1)', 'rgba(229, 244, 245, 1)', 'rgba(0, 204, 249, 1)']}
        style={styles.background}>
        <View style={styles.logo}>
          <Text style={styles.title2}>CODE</Text>
        </View>
        <Text style={[styles.title1, { textAlign: 'center' }]}>VERIFICATION</Text>
        <Text style={[styles.title, { textAlign: 'center' }]}>Enter ontime password sent on {"\n"}++849092605798</Text>
        <View style={[{ top: 450 }, { left: 30 }, { position: 'absolute' }]}>
          <TouchableOpacity style={styles.button}>
            <Text>VERIFY CODE</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.groupButton,{left:60},{top:70}]}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
      </LinearGradient>
    </View>
  )
}

export default cau3

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
      logo: {
        position: 'absolute',
        left: 80,
        top: -120,
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
      title2: {
        position: 'absolute',
        width: 302,
        height: 60,
        left: 35,
        top: 240,
    
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 50,
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
      },
      input: {
        height: 40,
        margin: 0,
        borderWidth: 1,
        padding: 0,
        width: 40,
      },
      groupButton: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      },
})