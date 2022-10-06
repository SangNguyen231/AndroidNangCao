import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, SafeAreaView } from 'react-native';
import React, { useState } from 'react'

import dataBai1 from '../../dataBai1';
import Bai1Item from './Bai1Item'

const Bai1 = (props) => {
    const [selectedId, setSelectedId] = useState(null)

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? '#fff' : '#E5E5E5'
        const color = item.id === selectedId ? 'red' : 'black'
        return (
            <Bai1Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        )
    }

    return (
        <SafeAreaView style={{flex:1}}>
            <View style={[{ backgroundColor: '#E5E5E5' }, { height: '100%' }, { top: 24 }]}>
                <View style={[{ backgroundColor: '#1BA9FF' }, { flexDirection: 'row' }, { height: 42 }, { justifyContent: 'space-between' }, { alignItems: 'center' }]}>
                    <View style={[{}]}>
                        <TouchableOpacity
                            onPress={() => {
                                props.navigation.navigate('Home')
                            }}
                        >
                        <Image source={require('../../img/muiten.png')} style={{ left: 15 }}></Image>
                        </TouchableOpacity> 
                    </View>
                    <View>
                        <Text style={[{ color: '#fff' }]}>Chat</Text>
                    </View>
                    <View>
                        <Image source={require('../../img/store.png')} style={{ left: -15 }}></Image>
                    </View>
                </View>
                <View style={[{ alignItems: 'center' }, { justifyContent: 'center' }, { height: 50 }]}>
                    <Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại {"\n"}chát với shop!</Text>
                </View>
                <View>
                    <FlatList
                        style={{height:440}}
                        data={dataBai1}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        extraData={selectedId}
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

export default Bai1

const styles = StyleSheet.create({})