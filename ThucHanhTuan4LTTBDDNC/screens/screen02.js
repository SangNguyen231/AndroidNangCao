import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const Bai2s1 = (props) => {


  const silver = require('../img/silver.png')
  const black = require('../img/black.png')
  const red = require('../img/red.png')
  const blue = require('../img/blue.png')

  var [color, setColor] = useState('Xanh')
  var [link, setLink] = useState(blue)

  const pressSilver = () => {
    setColor("Bạc")
    setLink(silver)
  }
  const pressRed = () => {
    setColor("Đỏ")
    setLink(red)
  }
  const pressBlack = () => {
    setColor("Đen")
    setLink(black)
  }
  const pressBlue = () => {
    setColor("Xanh")
    setLink(blue)
  }
  

  return (
    <View style={[{backgroundColor:'#fff'},{height:'100%'},{top:25}]}>
      <View style={[{flexDirection:'row'}]}>
        <View>
          <Image source={link} style={[{ width: 119 }, { height: 126 }, { left: 5 }, { top: 7 }]}></Image>
        </View>
        <View style={[{left:20},{top:10},{justifyContent:'space-between'}]}>
          <Text style={[{fontSize:15},{fontWeight:'400'}]}>Điện Thoại Vsmart Joy 3 {"\n"}Hàng chính hãng</Text>
          <Text style={[{}]}>Màu: <Text style={{fontWeight:'bold'}}>{color}</Text></Text>
          <Text>Cung cấp bởi <Text style={{fontWeight:'bold'}}>Tiki Tradding</Text></Text>
          <Text style={[{fontSize:18},{fontWeight:'700'}]}>1.790.000 đ</Text>
        </View>
      </View>
      <View style={[{backgroundColor:'#C4C4C4'},{height:420},{top:20},{justifyContent:'space-between'}]}>
        <Text style={[{fontSize:18},{fontWeight:'400'},{left:10},{top:5}]}>Chọn một màu bên dưới:</Text>
        <View style={[{top:10},{alignItems:'center'},{justifyContent:'space-between'}]}>
          <TouchableOpacity
            style={[{width:80},{height:75},{backgroundColor:'#C5F1FB'},{top:-30}]}
            onPress={pressSilver}
          >
          </TouchableOpacity>
          <TouchableOpacity
            style={[{width:80},{height:75},{backgroundColor:'#F30D0D'},{top:-20}]}
            onPress={pressRed}
          >
          </TouchableOpacity>
          <TouchableOpacity
            style={[{width:80},{height:75},{backgroundColor:'#000000'},{top:-10}]}
            onPress={pressBlack}
          >
          </TouchableOpacity>
          <TouchableOpacity
            style={[{width:80},{height:75},{backgroundColor:'#234896'},{top:0}]}
            onPress={pressBlue}
          >
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            style={[{alignItems:'center'},{justifyContent:'center'},{width:326},{height:40},{left:17},{borderRadius:10},{backgroundColor:'rgba(25, 82, 226, 0.58)'}]}
            onPress={() => {
              props.navigation.navigate("Bai2", {message: link,})
            }}
          >
            <Text style={[{fontSize:20},{fontWeight:'700'},{color:'#fff'}]}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Bai2s1

const styles = StyleSheet.create({})