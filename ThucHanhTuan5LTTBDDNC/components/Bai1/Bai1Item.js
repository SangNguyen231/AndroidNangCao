import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function ListItem({item, onPress, backgroundColor, textColor}) {
    return (
        <TouchableOpacity onPress={onPress} style={backgroundColor}>
            <View style={{ height: 1, backgroundColor: 'black' }} />
            <View style={[{ flexDirection: 'row' }, { height: 80 }, {justifyContent:'space-between'}]}>
                <View style={[]}>
                    <Image source={item.url} style={[{ marginLeft: 3 }, { marginTop: 3 }]}></Image>
                </View>
                <View style={[{ flex: 0 }, { marginTop: 5 }]}>
                    <Text >{item.name}</Text>
                    <Text style={[{ marginTop: 10 }, textColor]}>Shop: {item.shop}</Text>
                </View>
                <View style={[{ flex: 0 }, { marginLeft: 20 }, { marginTop: 20 }]}>
                    <TouchableOpacity
                        style={[{ backgroundColor: 'red' }, { height: 38 }, { width: 88 }, { alignItems: 'center', justifyContent: 'center' }]}
                    >
                        <Text style={[{ color: '#fff' }]}>Chat</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        )
}

export default ListItem