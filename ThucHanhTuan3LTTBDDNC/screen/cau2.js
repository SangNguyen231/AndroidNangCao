import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'

const cau2 = () => {
  return (
    <View style={styles.fram1}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0)', 'rgba(209, 244, 246, 1)', 'rgba(229, 244, 245, 1)', 'rgba(0, 204, 249, 1)']}
        style={styles.background}>
        <LinearGradient
          colors={['#BDF6C600', '#BDF6C6']}
          style={styles.fram1}
        >
          <View style={styles.logo}>
            <Image source={require('../img/lock.png')}></Image>
          </View>
          <Text style={[styles.title1, { textAlign: 'center' }]}>FORGET {"\n"}PASSWORD</Text>
          <Text style={[styles.title, { textAlign: 'center' }]}>Provide your account’s email for which you want to reset your password</Text>
          <View style={[{ top: 500 }, { left: 30 }]}>
            <TouchableOpacity style={styles.button}>
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.SectionStyle}>
            <Image
              source={require('../img/mail-inbox-app.png')}
              style={styles.ImageStyle}
            />

            <TextInput
              style={{ flex: 1 }}
              placeholder="Email"
              underlineColorAndroid="transparent"
            />
          </View>

        </LinearGradient>
      </LinearGradient>
    </View>
  )
}

export default cau2

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
        left: 130,
        top: 80,
      },
      title: {
        position: 'absolute',
        width: 302,
        height: 53,
        left: 35,
        top: 340,
    
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
        top: 240,
    
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
      },
      SectionStyle: {
        top: 360,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C4C4C4',
        height: 45,
        margin: 10,
        width:300,
        left:20
      },
      ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      }
})