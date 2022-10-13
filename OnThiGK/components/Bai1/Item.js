import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Item = (props) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginTop: 10, backgroundColor: '#fff', height: 60 }}>
      <View style={{ width: 50, height: 40, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', borderRadius: 10, marginLeft: 0 }}>
        <Text style={{ color: '#fff' }}>{props.number}</Text>
      </View>
      <View style={{ justifyContent: 'center', marginLeft: 40 }}>
        <Text style={{ fontSize: 20 }}>{props.title}</Text>
      </View>
      <View style={{ width: 60, height: 40, backgroundColor: 'red' ,justifyContent:'center',alignItems:'center',borderRadius:10}}>
        <TouchableOpacity
          onPress={props.onDeleteTask}
        >
          <Text style={{ color: '#fff' }}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Item

const styles = StyleSheet.create({})