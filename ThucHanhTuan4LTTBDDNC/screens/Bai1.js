import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react'

const Bai1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fram1}>
        <Text style={styles.title}>Nguyên hàm tích phân và ứng dụng</Text>
        <Text style={styles.title1}>Cung cấp bởi Tiki Trading</Text>
        <Image source={require('../img/book.png')} style={styles.book}></Image>
        <Text style={styles.giatien}>141.800 đ</Text>
        <Text style={[styles.giagiam,{textDecorationLine:'line-through'}]}>141.800 đ</Text>
        <TouchableOpacity style={styles.button1}>
          <Image source={require('../img/minus.png')} style={styles.dautru}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Image source={require('../img/plus.png')} style={styles.daucong}></Image>
        </TouchableOpacity>
        <Text style={styles.soluong}>1</Text>
        <Text style={styles.muasau}>Mua sau</Text>
        <Text style={styles.magiam}>Mã giảm giá đã lưu</Text>
        <Text style={styles.xemtaiday}>Xem tại đây</Text>
        <View style={styles.SectionStyle}>
            <Image
              source={require('../img/yellow_block.png')}
              style={styles.ImageStyle}
            />

            <TextInput
              style={[{ flex: 1 }, {left : 15}]}
              placeholder="Mã giảm giá"
              underlineColorAndroid="transparent"
            />
      </View>
      <TouchableOpacity
        style={styles.buttonApDung}
      >
        <Text style={styles.textApDung}>Áp dụng</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.fram2}>
        <Text style={[{left:10},{top:17},{fontSize:11},{lineHeight:14},{fontWeight:'700'}]}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
        <Text style={[{left:-60},{top:17},{fontSize:11},{lineHeight:14},{fontWeight:'700'},{color:'#134FEC'}]}>Nhập tại đây?</Text>
      </View>
      <View style={styles.fram3}>
        <Text style={[{left:10},{top:10},{fontSize:17},{lineHeight:21},{fontWeight:'700'}]}>Tạm tính</Text>
        <Text style={[{left:-20},{top:10},{fontSize:17},{lineHeight:21},{fontWeight:'700'},{color:'#EE0D0D'}]}>141.800 đ</Text>
      </View>
      <View style={styles.fram4}>
        <View style={[{flexDirection:'row'},{justifyContent:'space-between'}]}>
          <Text style={[{left:10},{top:15},{fontSize:17},{lineHeight:21},{fontWeight:'700'},{color:'#808080'}]}>Thành tiền</Text>
          <Text style={[{left:-20},{top:15},{fontSize:17},{lineHeight:21},{fontWeight:'700'},{color:'#EE0D0D'}]}>141.800 đ</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonTienHanhDatHang}
        >
          <Text style={styles.textApDung}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C4C4C4',
        alignItems: 'center',
        justifyContent: 'center',
      },
      fram1:{
        position:'absolute',
        width:360,
        height:283,
        left:1,
        top:0,
        backgroundColor:'#FFFFFF'
      },
      fram2:{
        position:'absolute',
        width:360,
        height:51,
        left:0,
        top:297,
        backgroundColor:'#FFFFFF',
        justifyContent: 'space-between',
        flexDirection:'row'
      },
      fram3:{
        position:'absolute',
        width:360,
        height:51,
        left:1,
        top:360,
        backgroundColor:'#FFFFFF',
        justifyContent:'space-between',
        flexDirection:'row'
      },
      fram4:{
        position:'absolute',
        width:361,
        height:120,
        left:0,
        top:470,
        backgroundColor:'#FFFFFF'
      },
      title:{
        position:'absolute',
        width:191,
        height:14,
        left:142,
        top:20,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:14,
        fontSize:12,
        textAlign:'center',
      },
      title1:{
        position:'absolute',
        width:200,
        height:14,
        left:112,
        top:52,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:14,
        fontSize:12,
        textAlign:'center',
      },
      book:{
        position:'absolute',
        width:104,
        height:127,
        left:13,
        top:20,
      },
      giatien:{
        position:'absolute',
        width:84,
        height:21,
        left:136,
        top:80,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:21,
        fontSize:20,
        textAlign:'center',
        color:'#EE0D0D'
      },
      giagiam:{
        position:'absolute',
        width:56,
        height:14,
        left:140,
        top:110,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:14,
        fontSize:10,
        textAlign:'center',
        color:'#808080'
      },
      button1:{
        position:'absolute',
        width:14.22,
        height:16,
        left:142,
        top:130,
        backgroundColor:'#C4C4C4'
      },
      button2:{
        position:'absolute',
        width:14.22,
        height:16,
        left:187,
        top:130,
        backgroundColor:'#C4C4C4'
      },
      soluong:{
        position:'absolute',
        width:9,
        height:18,
        left:167,
        top:128,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:18,
        fontSize:13,
        textAlign:'center',
      },
      dautru:{
        position:'absolute',
        width:10,
        height:10,
        left:2,
        top:4,
      },
      daucong:{
        position:'absolute',
        width:10,
        height:10,
        left: 2,
        top: 4,
      },
      muasau:{
        position:'absolute',
        width:46,
        height:14,
        left:290,
        top:130,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:14,
        fontSize:10,
        textAlign:'center',
        
        color:'#134FEC'
      },
      magiam:{
        position:'absolute',
        width:107,
        height:14,
        left:10,
        top:167,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:14,
        fontSize:10,
        textAlign:'center',
      },
      xemtaiday:{
        position:'absolute',
        width:64,
        height:14,
        left:134,
        top:167,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:14,
        fontSize:10,
        textAlign:'center',
        
        color:'#134FEC'
      },
      SectionStyle: {
        position:'absolute',
        top: 200,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        margin: 10,
        width:200,
        left:10,
        borderBottomWidth:2,
        borderTopWidth:2,
        borderLeftWidth:1,
        borderRightWidth:2,
        borderTopEndRadius:3,
        borderTopLeftRadius:3,
        borderBottomEndRadius:3,
        borderBottomLeftRadius:3,
      },
      ImageStyle: {
        padding: 5,
        margin: 5,
        left:10,
        height: 15,
        width: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
      buttonApDung:{
        left: 245,
        top: 210,
        position:'absolute',
        width: 100,
        height: 45,
        backgroundColor: '#0A5EB7',
        borderRadius: 2,
        alignItems:'center',
        justifyContent: 'center'
      },
      textApDung : {
        position:'absolute',
        width:208,
        height:23,
    
        fontFamily:'Roboto',
        fontStyle:'normal',
        fontWeight:'700',
        lineHeight:23,
        fontSize:18,
        textAlign:'center',
        
        color:'#FFFFFF'
      },buttonTienHanhDatHang:{
        position:'absolute',
        width: 331,
        height: 45,
        backgroundColor: '#E53935',
        borderRadius: 2,
        alignItems:'center',
        justifyContent: 'center',
        top:60,
        left:15
      }
})