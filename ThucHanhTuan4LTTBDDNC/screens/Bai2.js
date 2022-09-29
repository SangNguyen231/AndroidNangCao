import { StyleSheet, Text, View ,TouchableOpacity, Image} from 'react-native'
import React , {useState, useEffect} from 'react'
import {useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bai2s1 from './screen02';

const Stack = createNativeStackNavigator();


const Bai2 = (props) => {

  const route = useRoute()

  const moveScreen2 = () => props.navigation.navigate("Screen2")

  var blue = require('../img/blue.png')
  var [link, setLink] = useState(blue)

  useEffect(() => {
    if (route.params != null)
      setLink(route.params.message)
  });

  return (
    <View style={[{backgroundColor:'#fff'},{height:'100%'},{flexDirection:'column'},{justifyContent:'space-evenly'}]}>
      <Image source={link} style={[{width:258},{height:319},{left:51}]}></Image>
      <Text style={[{left:22},{top:10},{fontWeight:'400'},{fontSize:15}]}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      <View>
        <View style={[{ flexDirection: 'row' }]}>
          <View style={[{ flexDirection: 'row' },{left:20}]}>
            <Image source={require('../img/star.png')}></Image>
            <Image source={require('../img/star.png')}></Image>
            <Image source={require('../img/star.png')}></Image>
            <Image source={require('../img/star.png')}></Image>
            <Image source={require('../img/star.png')}></Image>
          </View>
          <Text style={[{left:40},{fontSize:15},{fontWeight:'400'}]}>(Xem 828 đánh giá)</Text>
        </View>
        <View>

        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={[{left:20},{fontSize:18},{fontWeight:'700'}]}>1.790.000 đ</Text>
        <Text style={[{fontSize:15},{color:'rgba(0, 0, 0, 0.58)'},{left:60},{top:2},{textDecorationLine:'line-through'}]}>1.790.000 đ</Text>
      </View>
      <View style={{flexDirection:'row'}}>
        <Text style={[{top:3},{left:20},{fontSize:12},{fontWeight:'700'},{color:'red'}]}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('../img/hinhtron.png')} style={[{left:30}]}></Image>
        <Image source={require('../img/dauhoi.png')} style={[{left:16},{top:4}]}></Image>
      </View>
      <View style={{alignItems:'center'}}>  
        <TouchableOpacity
          style={[{width:332},{borderRadius:10},{borderColor:'black'},{borderWidth:2},{height:34},{justifyContent:'center'},{alignItems:'center'}]}
          onPress={moveScreen2}
        >
          <View style={{flexDirection:'row'}}>
            <Text style={[{fontSize:15},{fontWeight:'400'}]}>4 MÀU-CHỌN MÀU</Text>
            <Image source={require('../img/muiten.png')} style={[{left:80},{top:3}]}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[{top:10},{borderRadius:10},{left:17},{backgroundColor:'red'},{width:326},{height:44},{alignItems:'center'},{justifyContent:'center'}]}
      >
        <Text style={[{color:'#fff'},{fontSize:20},{fontWeight:'700'}]}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Bai2

const styles = StyleSheet.create({})