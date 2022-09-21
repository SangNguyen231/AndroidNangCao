import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity, TextInput } from 'react-native';

import React from 'react'

const cau1 = () => {
  return (
    <View style={styles.fram1}>
      <LinearGradient 
        colors={['#C7F4F6','#D1F4F6','#E5F4F5','#00CCF9']}
        style={styles.background}>
        <LinearGradient
          colors={['#C4C4C4','#28F7AC']}
          style={styles.fram1}
          >
          <View style={styles.logo}>
              <Image source={require('../img/circle.png')}></Image>
          </View>
          <Text style={[styles.title1,{textAlign:'center'}]}>GROW {"\n"} YOUR BUSINESS</Text>
          <Text style={[styles.title,{textAlign:'center'}]}>We will help you to grow your business using online server</Text>
          <Text style={styles.howwework}>HOW WE WORK?</Text>
          <View style={[{top:420},{left:30}]}>
            <TouchableOpacity style={styles.button}>
              <Text>LOGIN</Text>
            </TouchableOpacity>
          </View>
          <View style={[{top:375},{left:200}]}>
            <TouchableOpacity style={styles.button}>
              <Text>SING UP</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>    
      </LinearGradient>
    </View>
  )
}

export default cau1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#E3C000',
    width:125,
    height:45,
    padding:15,
    alignItems:'center'
  },
  logo:{
    position:'absolute',
    left:115,
    top:50,
  },
  howwework:{
    position:'absolute',
    width:302,
    height:53,
    left:115,
    top:500,

    fontFamily:'Roboto',
    fontWeight:'700',
    alignItems:'center',
    fontSize:20
  },
  title:{
    position:'absolute',
    width:302,
    height:53,
    left:35,
    top:340,

    fontFamily:'Roboto',
    fontWeight:'700',
    alignItems:'center',
    fontSize:15,
  },
  title1:{
    position:'absolute',
    width:302,
    height:60,
    left:35,
    top:260,

    fontFamily:'Roboto',
    fontWeight:'700',
    fontSize:25,
  },
  fram1:{
    position:'absolute',
    width:360,
    height:640,
    left: 0,
    top: 0
  },
  background: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    position: 'relative',
    width:360,
    height:640
  },
})
