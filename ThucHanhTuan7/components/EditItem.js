import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

const EditItem = () => {
    return (
        <View>
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 0 }}>
                <View style={{ justifyContent: 'center', width: 300, borderWidth: 1, borderRadius: 15, backgroundColor: 'white' }}>
                    <TextInput
                        style={{ marginLeft: 20 }}
                        placeholder="Text Edit"
                        value={''}
                        onChangeText={{}}
                    />
                </View>
                <View style={{ width: 50, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                    <TouchableOpacity onPress={{}}>
                        <Text style={{ fontSize: 17, color: 'white' }}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: 'gray', marginTop: 20 }} />
        </View>
    )
}

export default EditItem

const styles = StyleSheet.create({})