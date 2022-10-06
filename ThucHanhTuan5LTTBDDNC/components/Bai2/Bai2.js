import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, SafeAreaView, TextInput } from 'react-native';
import React, { useState } from 'react'

import dataBai2 from '../../dataBai2';
import Bai2Item from './Bai2Item'

const Bai2 = (props) => {
    const [selectedId, setSelectedId] = useState(null)

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#fff' : '#E5E5E5'
        const color = item.id === selectedId ? 'red' : 'black'
        return (
            <Bai2Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        )
    }

    const numColumns = 2

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={[{ backgroundColor: '#E5E5E5' }, { height: '100%' }, { top: 24 }]}>
                <View style={[{ backgroundColor: '#1BA9FF' }, { flexDirection: 'row' }, { height: 42 }, { justifyContent: 'space-evenly' }, { alignItems: 'center' }]}>
                    <View style={[{}]}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                        >
                        <Image source={require('../../img/muiten.png')} style={{ left: 0 }}></Image>
                        </TouchableOpacity> 
                    </View>
                    <View style={{backgroundColor:'#fff', width: 200, flexDirection:'row'}}>
                            <Image source={require('../../img/Vector.png')} style={{marginLeft:5, marginTop:2}}/>
                        <TextInput placeholder='Dây cáp usb' style={{marginLeft:10}}>

                        </TextInput>
                    </View>
                    <View>
                        <Image source={require('../../img/store.png')} style={{ left: 0 }}></Image>
                    </View>
                    <View>
                      <Image source={require('../../img/option.png')} style={{height:30, width:30}}/>
                    </View>
                </View>
                <View>
                    <FlatList
                        style={{height:500}}
                        data={dataBai2}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
                        numColumns={numColumns}
                    />
                </View>
            </View>
            <View style={[{ position: 'absolute' }, { backgroundColor: '#1BA9FF' }, { flexDirection: 'row' }, { height: 49 }, { justifyContent: 'space-between' }, { alignItems: 'center' }, { top: 543 }, { width: '100%' }]}>
                <View style={[{}]}>
                    <Image source={require('../../img/menu.png')} style={[{ left: 15 }, { height: 20 }, { width: 20 }]}></Image>
                </View>
                <View>
                    <Image source={require('../../img/home.png')} style={[{ height: 20 }, { width: 20 }]}></Image>
                </View>
                <View>
                    <Image source={require('../../img/back.png')} style={{ left: -15 }}></Image>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Bai2

const styles = StyleSheet.create({})