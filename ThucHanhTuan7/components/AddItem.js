import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

const AddItem = ({ isData, setData }) => {

    const [text, setText] = useState('');

    const AddItemList = (text) => {
        if (text !== '') {
			addDataApi({ id: (isData.length + 1), title: text });
           // setData((prev) => [...prev, { id: isData.id + 1, title: text }]);
			setText('');
		}
    }

    const addDataApi =  (data) => {
        try {
            fetch('https://6348cc9fa59874146b1113f9.mockapi.io/demo', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    setData((prev) => [...prev, data]);
                  })
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <View style={{ width: '100%' }}>
            <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }} />
            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginTop: 20 }}>
                <View style={{ justifyContent: 'center', width: 300, borderWidth: 1, borderRadius: 15, backgroundColor: 'white' }}>
                    <TextInput
                        style={{ marginLeft: 20 }}
                        placeholder="Input Text"
                        value={text}
                        onChangeText={setText}
                    />
                </View>
                <View style={{ width: 50, height: 50, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}>
                    <TouchableOpacity onPress={() => AddItemList(text)}>
                        <Text style={{ fontSize: 17, color: 'white' }}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: '100%', height: 1, backgroundColor: 'gray', marginTop: 20 }} />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({})