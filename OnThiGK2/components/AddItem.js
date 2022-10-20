import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const AddItem = ({ isdata, setData }) => {

  const [isItem, setItem] = useState()
  const [isLink, setLink] = useState('https://res.cloudinary.com/dee6zyobu/image/upload/v1666256748/sample.jpg')

  const AddItemList = (text, link) => {
      addDataApi({ id: (isdata.length + 1), item: text, link: link});
      // setData((prev) => [...prev, { id: isData.id + 1, title: text }]);
      console.log(text, link)
  }

  const addDataApi = (text, link) => {
    try {
      fetch('https://6348cc9fa59874146b1113f9.mockapi.io/OnThiGK', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({item: text, link: link}),
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
    <View style={{ marginTop: 0, width: '100%' }}>
      <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
        <TextInput 
          placeholder='Nhap link' 
          style={{ borderWidth: 1, height: 40, width: 150, borderRadius: 20 }} 
          value={isLink} 
          onChangeText={setLink} />
        <TextInput placeholder='Nhap Item' 
          style={{ borderWidth: 1, height: 40, width: 150, borderRadius: 20 }} 
          value={isItem} 
          onChangeText={setItem} />
        <TouchableOpacity
          style={{ justifyContent: 'center', width: 50, height: 40, backgroundColor: 'red', alignItems: 'center', borderRadius: 20 }}
          onPress={() => addDataApi(isItem, isLink)}
        >
          <Text style={{ fontSize: 17, fontWeight: '600', color: 'white' }}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 1, backgroundColor: 'gray', marginTop: 20 }} />
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({})